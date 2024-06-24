import { Module } from '@nestjs/common';
import { TeamsAdminController } from './admin/teams.admin.controller';
import { TeamsUserController } from './user/teams.user.controller';

@Module({
  controllers: [TeamsAdminController, TeamsUserController],
})
export class TeamsModule {}
