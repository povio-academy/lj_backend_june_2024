import { Inject, Injectable } from '@nestjs/common';
import { USER_DB_REPOSITORY } from '~db/db.module';
import { IUserRepository } from '../user.repository';
import { NewUser, UserEntity } from '../user.entity';

@Injectable()
export class CreateUserUseCase {
    constructor(
        @Inject(USER_DB_REPOSITORY) private userRepository: IUserRepository,
    ) {}

    async execute(data: NewUser) {
        const newUser = await UserEntity.new(data).validate();

        return this.userRepository.create(newUser);
    }
}
