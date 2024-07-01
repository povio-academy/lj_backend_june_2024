import { Inject, Injectable } from '@nestjs/common';
import { UpdateUser } from '../user.entity';
import { USER_DB_REPOSITORY } from '~db/db.module';
import { IUserRepository } from '../user.repository';

@Injectable()
export class UpdateUserAdminUseCase {
    constructor(
        @Inject(USER_DB_REPOSITORY) private userRepository: IUserRepository,
    ) {}

    async execute(userId: string, data: UpdateUser) {
        const userToUpdate = await this.userRepository.getById(userId);

        if (!userToUpdate) {
            throw new Error('User not found');
        }

        const updatedUser = await userToUpdate.update(data).validate();

        return this.userRepository.update(updatedUser);
    }
}
