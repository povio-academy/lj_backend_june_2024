import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { InviteUserUseCase } from './use-cases/invite-user.use-case';

@Module({
    providers: [CreateUserUseCase, InviteUserUseCase],
    exports: [CreateUserUseCase],
})
export class UserModule {}
