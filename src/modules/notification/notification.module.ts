import { Global, Module } from '@nestjs/common';
import { EMAIL_PROVIDER_SERVICE } from './email/interface/email-provider.interface';
import { SendgridConfig } from '~vendor/sendgrid/sendgrid.config';
import { SendGridService } from '~vendor/sendgrid/sendgrid.service';
import { EmailService } from './email/email.service';

@Global()
@Module({
    controllers: [],
    providers: [
        EmailService,
        {
            provide: EMAIL_PROVIDER_SERVICE,
            useFactory: (config: SendgridConfig) => {
                return new SendGridService(config);
            },
            inject: [SendgridConfig],
        },
    ],
    exports: [EmailService, EMAIL_PROVIDER_SERVICE],
})
export class NotificationModule {}
