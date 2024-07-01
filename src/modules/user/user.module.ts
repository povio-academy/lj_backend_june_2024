import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { InviteUserUseCase } from './use-cases/invite-user.use-case';
import { NotificationModule } from '~modules/notification/notification.module';
import { UpdateUserAdminUseCase } from './use-cases/update-user-admin.use-case';
import { DbModule } from '~db/db.module';
import { GetUserUseCase } from './use-cases/get-user.use-case';
@Module({
    imports: [DbModule, NotificationModule],
    exports: [
        CreateUserUseCase,
        UpdateUserAdminUseCase,
        GetUserUseCase,
        InviteUserUseCase,
    ],
    providers: [
        CreateUserUseCase,
        GetUserUseCase,
        InviteUserUseCase,
        UpdateUserAdminUseCase,
    ],
})
export class UserModule {}
