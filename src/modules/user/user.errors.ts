import { BaseError } from '~common/error/base.error';

export class EmailInUseUserError extends BaseError {
    code = EmailInUseUserError.name;
    constructor() {
        super({ message: 'Email address already in use!' });
    }
}

export class UserNotFoundUserError extends BaseError {
    code = UserNotFoundUserError.name;
    constructor() {
        super({ message: 'User not found!' });
    }
}
