import { Inject, Injectable } from '@nestjs/common';
import { USER_DB_REPOSITORY } from '~db/db.module';
import { IUserRepository } from '~modules/user/user.repository';
import { UserEntity } from '~modules/user/user.entity';
import { UserNotFoundUserError } from '../user.errors';

@Injectable()
export class GetUserUseCase {
    constructor(
        @Inject(USER_DB_REPOSITORY)
        private readonly userDbRepository: IUserRepository,
    ) {}

    async execute(email: string): Promise<UserEntity> {
        const user = await this.userDbRepository.getByEmail(email);

        if (!user) {
            throw new UserNotFoundUserError();
        }

        return user;
    }
}
