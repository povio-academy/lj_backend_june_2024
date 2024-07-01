import { Get, Module } from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { InviteUserUseCase } from './use-cases/invite-user.use-case';
import { DbModule } from '~db/db.module';
import { GetUserUseCase } from './use-cases/get-user.use-case';
import { NotificationModule } from '~modules/notification/notification.module';

@Module({
    imports: [DbModule, NotificationModule],
    providers: [CreateUserUseCase, GetUserUseCase, InviteUserUseCase],
    exports: [CreateUserUseCase],
})
export class UserModule {}
