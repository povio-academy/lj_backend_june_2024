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

    public async sendEmail() {
        const msg = {
            to: 'vito.drofenik@povio.com',
            from: 'vito.drofenik@povio.com',
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        await SendGrid.send(msg);
    }

    public async sendEmailInvite(recipient: string) {
        const invite_link = 'http://povio.com';
        const invitee_email = recipient;
        const inviter_first_name = 'Vito';
        const inviter_last_name = 'Drofenik';
        const inviter_email = 'vito.drofenik@povio.com';
        const emailTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Streamline Your Team & Track Everything in One Place!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            background-color: #ffffff;
            margin: 0 auto;
            padding: 20px;
            max-width: 600px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            color: #333333;
        }
        .content {
            font-size: 16px;
            line-height: 1.5;
            color: #666666;
        }
        .cta-button {
            display: block;
            width: 200px;
            margin: 20px auto;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            color: #ffffff;
            background-color: #007bff;
            border-radius: 5px;
        }
        .footer {
            font-size: 14px;
            text-align: center;
            color: #999999;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Streamline Your Team & Track Everything in One Place!</div>
        <div class="content">
            <p>Hey ${invitee_email},</p>
            <p>Tired of juggling communication channels and spreadsheets?</p>
            <p>We built Expense Tracker to simplify team collaboration and keep your finances organized. Here's how:</p>
            <ul>
                <li>Effortless Transaction Tracking: Track expenses, invoices, and payments with ease. No more digging through messy spreadsheets.</li>
            </ul>
            <p>${inviter_first_name} ${inviter_last_name} (<a href="mailto:${inviter_email}">${inviter_email}</a>) has invited you to join Expense Tracker and experience a more efficient way to work together. Get started for free:</p>
            <a href="${invite_link}" class="cta-button">Get Started</a>
        </div>
        <div class="footer">
            See you there!<br>
            The Expense Tracker Team
        </div>
    </div>
</body>
</html>
`;

        const msg = {
            to: recipient,
            from: inviter_email,
            subject: 'Join Expense Tracker and Simplify Team Collaboration',
            html: emailTemplate,
        };
        await SendGrid.send(msg);
        return 'Email invite sent';
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
