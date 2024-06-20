import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '~common/config/config.module';
import { ScheduleModule } from '@nestjs/schedule';
import { LoggerModule } from '~common/logging/logger.module';
import { AuthModule } from '~modules/auth/auth.module';
import { ClsModule } from '~common/cls/cls.module';
import { PrismaModule } from '~vendor/prisma/prisma.module';
import { CategoriesAdminDataApiModule } from '~data-api/categories/admin/categories.admin.data-api.module';
import { CategoriesUserDataApiModule } from '~data-api/categories/user/categories.user.data-api.module';

@Module({
  imports: [
    ClsModule,
    ConfigModule,
    ScheduleModule.forRoot(),
    LoggerModule,
    AuthModule,
    PrismaModule,
    CategoriesAdminDataApiModule,
    CategoriesUserDataApiModule
  ],
  controllers: [AppController],
})
export class AppModule {}
