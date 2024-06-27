import { Injectable } from '@nestjs/common';
import * as SendGrid from '@sendgrid/mail';
import { SendgridConfig } from './sendgrid.config';
import { IEmailProvider } from '~modules/notification/email/interface/email-provider.interface';

@Injectable()
export class SendGridService implements IEmailProvider {
    constructor(private readonly sendgridConfig: SendgridConfig) {
        console.log('SendgridConfig', sendgridConfig);
        SendGrid.setApiKey(sendgridConfig.apiKey);
    }

    public async sendAppInviteFromTemplate(
        recipient: string,
    ): Promise<boolean> {
        const invite_link = 'http://povio.com';
        const invitee_email = recipient;
        const inviter_first_name = 'Vito';
        const inviter_last_name = 'Drofenik';
        const inviter_email = 'vito.drofenik@povio.com';
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
