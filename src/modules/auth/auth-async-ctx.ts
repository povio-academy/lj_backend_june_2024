import { User } from '@prisma/client';
import { InjectableProxy } from 'nestjs-cls';
import { UserEntity } from '~modules/user/user.entity';

@InjectableProxy()
export class AuthAsyncCtx {
    constructor() {}

    private _currentUser!: UserEntity | null;
    get currentUser() {
        return this._currentUser;
    }

    async init() {
        //get user from db

        return this._currentUser;
    }

    async setCurrentUser(user: UserEntity) {
        this._currentUser = user;
        return this._currentUser;
    }
}
