import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '~common/config/config.module';
import { ScheduleModule } from '@nestjs/schedule';
import { LoggerModule } from '~common/logging/logger.module';
import { AuthModule } from '~modules/auth/auth.module';
import { ClsModule } from '~common/cls/cls.module';
import { PrismaModule } from '~vendor/prisma/prisma.module';

@Module({
  imports: [
    ClsModule,
    ConfigModule,
    ScheduleModule.forRoot(),
    LoggerModule,
    AuthModule,
    PrismaModule
  ],
  controllers: [AppController],
})
export class AppModule {}
