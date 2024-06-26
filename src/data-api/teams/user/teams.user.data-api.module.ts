import { Module } from '@nestjs/common';
import { TeamsUserController } from './teams.user.controller';

@Module({
    controllers: [TeamsUserController],
})
export class TeamsUserDataApiModule {}
