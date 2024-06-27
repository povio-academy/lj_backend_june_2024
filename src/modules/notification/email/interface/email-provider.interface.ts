export const EMAIL_PROVIDER_SERVICE = Symbol('EMAIL_PROVIDER_SERVICE');

export interface IEmailProvider {
    sendAppInviteFromTemplate(to: string): Promise<boolean>;
}
