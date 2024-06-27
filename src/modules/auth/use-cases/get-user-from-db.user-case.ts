import { Inject, Injectable } from '@nestjs/common';
import { USER_DB_REPOSITORY } from '~db/db.module';
import { IUserRepository } from '~modules/user/user.repository';
import { UserEntity } from '~modules/user/user.entity';

@Injectable()
export class GetUserFromDbService {
    constructor(
        @Inject(USER_DB_REPOSITORY)
        private readonly userDbRepository: IUserRepository,
    ) {}

    async execute(email: string): Promise<UserEntity> {
        const currentUser = await this.userDbRepository.getByEmail(email);
        if (!currentUser) {
            throw new Error('User not found');
        }

        const userEntity = UserEntity.toDomain(currentUser);
        return userEntity;
    }
}
