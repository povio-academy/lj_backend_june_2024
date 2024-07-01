import { BaseError } from '~common/error/base.error';

export class WrongPasswordAuthError extends BaseError {
    WrongPasswordAuthError = true;
    code = WrongPasswordAuthError.name;

    constructor() {
        super({
            message: 'Wrong password',
        });
    }
}

export class UnknownEmailAuthError extends BaseError {
    UnknownEmailAuthError = true;
    code = UnknownEmailAuthError.name;

    constructor() {
        super({
            message: 'Email not found',
        });
    }
}

export class UserStatusDeniedAuthError extends BaseError {
    UserStatusDeniedAuthError = true;
    code = UserStatusDeniedAuthError.name;

    constructor() {
        super({
            message: 'User status is denied',
        });
    }
}

export class UserStatusPendingAuthError extends BaseError {
    UserStatusPendingAuthError = true;
    code = UserStatusPendingAuthError.name;

    constructor() {
        super({
            message: 'User status is pending',
        });
    }
}
