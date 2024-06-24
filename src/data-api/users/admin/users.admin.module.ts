import { Global, Module } from '@nestjs/common';
import { UsersAdminController } from './users.admin.controller';

@Global()
@Module({
    controllers: [UsersAdminController],
})
export class UsersAdminModule {}
