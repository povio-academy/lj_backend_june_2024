import { Get, Module } from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { GetUserFromDbUseCase } from './use-cases/get-user-from-db.user-case';

@Module({
    providers: [CreateUserUseCase, GetUserFromDbUseCase],
    exports: [CreateUserUseCase],
})
export class UserModule {}
