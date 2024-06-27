import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { USER_DB_REPOSITORY } from '~db/db.module';
import { AuthAsyncCtx } from '../auth-async-ctx';
import { IUserRepository } from '~modules/user/user.repository';
import { UserEntity } from '~modules/user/user.entity';

@Injectable()
export class InitUserFromJwtService {
    constructor(
        @Inject(USER_DB_REPOSITORY) private userDbRepository: IUserRepository,
        private authCtx: AuthAsyncCtx,
    ) {}

    async execute(email: string) {
        const currentUser = await this.userDbRepository.getByEmail(email);
        if (!currentUser) {
            throw new UnauthorizedException('User not found');
        }

        const userEntity = UserEntity.toDomain(currentUser);
        this.authCtx.setCurrentUser(currentUser);
        return currentUser;
    }
}
