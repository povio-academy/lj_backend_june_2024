import { Injectable } from '@nestjs/common';
import * as SendGrid from '@sendgrid/mail';
import { SendgridConfig } from './sendgrid.config';
import { IEmailProvider } from '~modules/notification/email/interface/email-provider.interface';
import { AppInviteData } from '~modules/notification/email/email.service';

@Injectable()
export class SendGridService implements IEmailProvider {
    constructor(private readonly sendgridConfig: SendgridConfig) {
        console.log('SendgridConfig', sendgridConfig);
        SendGrid.setApiKey(sendgridConfig.apiKey);
    }

    public async sendAppInviteFromTemplate(
        data: AppInviteData,
    ): Promise<boolean> {
        const invite_link = data.invite_link;
        const invitee_email = data.invitee_email;
        const inviter_first_name = data.inviter_first_name;
        const inviter_last_name = data.inviter_last_name;
        const inviter_email = data.inviter_email;
        const msg = {
            to: invitee_email,
            from: 'vito.drofenik@povio.com',
            subject: 'Join Expense Tracker and Simplify Team Collaboration',
            templateId: 'd-5fd3dd97cae74b5ca2c55cee2ef6ca8d',
            dynamicTemplateData: {
                invitee_email: invitee_email,
                inviter_first_name: inviter_first_name,
                inviter_last_name: inviter_last_name,
                inviter_email: inviter_email,
                invite_link: invite_link,
            },
        };
        const response = await SendGrid.send(msg);
        if (response[0].statusCode === 202) {
            return true;
        }
        return false;
    }
}
