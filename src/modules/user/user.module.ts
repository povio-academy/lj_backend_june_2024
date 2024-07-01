import { Get, Module } from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { InviteUserUseCase } from './use-cases/invite-user.use-case';
import { DbModule } from '~db/db.module';
import { GetUserFromDbUseCase } from './use-cases/get-user-from-db.user-case';

@Module({
    imports: [DbModule],
    providers: [CreateUserUseCase, GetUserFromDbUseCase, InviteUserUseCase],
    exports: [CreateUserUseCase],
})
export class UserModule {}
