import { AppInviteData } from '../email.service';

export const EMAIL_PROVIDER_SERVICE = Symbol('EMAIL_PROVIDER_SERVICE');

export interface IEmailProvider {
    sendAppInviteFromTemplate(data: AppInviteData): Promise<boolean>;
}
