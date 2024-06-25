import { Module } from '@nestjs/common';
import { TeamsUserController } from './user/teams.user.controller';

@Module({
    controllers: [TeamsUserController],
})
export class TeamsModule {}
