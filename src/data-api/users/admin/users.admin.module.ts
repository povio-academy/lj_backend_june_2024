import { Global, Module } from '@nestjs/common';
import { UsersAdminController } from './users.admin.controller';
import { EmailService } from '~modules/notification/email/email.service';

@Global()
@Module({
    controllers: [UsersAdminController],
    providers: [EmailService],
})
export class UsersAdminModule {}
