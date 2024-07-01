import { Global, Module } from '@nestjs/common';
import { UsersAdminController } from './users.admin.controller';
import { EmailService } from '~modules/notification/email/email.service';
import { InviteUserUseCase } from '~modules/user/use-cases/invite-user.use-case';
import { UpdateUserAdminUseCase } from '~modules/user/use-cases/update-user-admin.use-case';
@Global()
@Module({
    controllers: [UsersAdminController],
    providers: [EmailService, UpdateUserAdminUseCase, InviteUserUseCase],
})
export class UsersAdminModule {}
