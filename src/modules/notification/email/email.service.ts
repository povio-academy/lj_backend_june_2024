import { Inject, Injectable } from '@nestjs/common';
import {
    EMAIL_PROVIDER_SERVICE,
    IEmailProvider,
} from './interface/email-provider.interface';

export type AppInviteData = {
    invitee_email: string;
    inviter_first_name: string;
    inviter_last_name: string;
    inviter_email: string;
    invite_link: string;
};

@Injectable()
export class EmailService {
    constructor(
        @Inject(EMAIL_PROVIDER_SERVICE) private emailProvider: IEmailProvider,
    ) {}

    async sendAppInviteFromTemplate(data: AppInviteData): Promise<boolean> {
        return await this.emailProvider.sendAppInviteFromTemplate(data);
    }
}
