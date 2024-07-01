import { Inject, Injectable } from '@nestjs/common';
import {
    EMAIL_PROVIDER_SERVICE,
    IEmailProvider,
} from './interface/email-provider.interface';

@Injectable()
export class EmailService {
    constructor(
        @Inject(EMAIL_PROVIDER_SERVICE) private emailProvider: IEmailProvider,
    ) {}

    async sendAppInviteFromTemplate(to: string): Promise<boolean> {
        return this.emailProvider.sendAppInviteFromTemplate(to);
    }
}
