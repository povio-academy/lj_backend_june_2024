import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { USER_DB_REPOSITORY } from '~db/db.module';
import { IUserRepository } from '../user.repository';
import { NewUser, UserEntity } from '../user.entity';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class CreateUserUseCase {
    constructor(
        @Inject(USER_DB_REPOSITORY) private userRepository: IUserRepository,
    ) {}

    async execute(data: NewUser) {
        const user = await this.userRepository.getByEmail(data.email);

        if (user) {
            throw new BadRequestException('Email in use!');
        }

        const hashedPassword = await this.hash(data.password);

        const newUser = await UserEntity.new({
            ...data,
            password: hashedPassword,
        }).validate();

        return this.userRepository.create(newUser);
    }

    private async hash(data: string | Buffer): Promise<string> {
        const salt = await genSalt();
        return hash(data, salt);
    }
}
