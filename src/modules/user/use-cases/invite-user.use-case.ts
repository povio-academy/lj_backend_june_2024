import { Inject, Injectable } from '@nestjs/common';
import { INVITE_DB_REPOSITORY, USER_DB_REPOSITORY } from '~db/db.module';
import { IInviteRepository } from '~modules/invite/invite.repository';
import { IUserRepository } from '../user.repository';
import { InviteEntity } from '~modules/invite/invite.entity';
import {
    AppInviteData,
    EmailService,
} from '~modules/notification/email/email.service';
import { EMAIL_PROVIDER_SERVICE } from '~modules/notification/email/interface/email-provider.interface';
import { UserRole } from '~common/enums';

@Injectable()
export class InviteUserUseCase {
    constructor(
        @Inject(USER_DB_REPOSITORY) private userRepository: IUserRepository,
        @Inject(INVITE_DB_REPOSITORY)
        private inviteRepository: IInviteRepository,
        @Inject(EMAIL_PROVIDER_SERVICE) private emailService: EmailService,
    ) {}

    async execute(userId: string, email: string) {
        // THIS SHOULD BE TAKEN FROM JWT IN THE FUTURE
        const inviter = await this.userRepository.getById(userId);
        if (!inviter) {
            throw new Error('Inviter not found');
        }

        if (inviter.role !== UserRole.ADMIN) {
            throw new Error('Only admins can invite users');
        }

        const userExists = await this.userRepository.getByEmail(email);
        if (userExists) {
            throw new Error(
                'User you are trying to invite already has an account',
            );
        }

        const invitesForUser = await this.inviteRepository.getByEmail(email);
        if (invitesForUser.length > 0) {
            const lastInvite = invitesForUser[0];
            // check if the last invite is older than three days
            if (lastInvite.createdAt.getTime() + 259200000 > Date.now()) {
                throw new Error(
                    'There is a pending invite for this user already',
                );
            }
        }
        const newInvite = await InviteEntity.new({
            idInviter: userId,
            email: email,
        }).validate();

        await this.inviteRepository.create(newInvite);

        const appInviteData = {} as AppInviteData;
        appInviteData.invite_link = 'https://povio.com';
        appInviteData.invitee_email = email;
        appInviteData.inviter_first_name = inviter.firstName;
        appInviteData.inviter_last_name = inviter.lastName;
        appInviteData.inviter_email = inviter.email;

        if (
            !(await this.emailService.sendAppInviteFromTemplate(appInviteData))
        ) {
            console.log('Email not sent, deleting invite');
            await this.inviteRepository.delete(newInvite.id);
        }
        console.log('Invite sent successfully');
    }
}
