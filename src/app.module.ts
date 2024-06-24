import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '~common/config/config.module';
import { ScheduleModule } from '@nestjs/schedule';
import { LoggerModule } from '~common/logging/logger.module';
import { AuthModule } from '~modules/auth/auth.module';
import { ClsModule } from '~common/cls/cls.module';
import { PrismaModule } from '~vendor/prisma/prisma.module';
import { TransactionsUserModule } from '~data-api/transactions/user/transactions.user.module';
import { CategoriesAdminDataApiModule } from '~data-api/categories/admin/categories.admin.data-api.module';
import { CategoriesUserDataApiModule } from '~data-api/categories/user/categories.user.data-api.module';
import { AuthDataApiModule } from '~data-api/auth/auth.data-api.module';
import { SubcategoriesAdminDataApiModule } from '~data-api/subcategories/admin/subcategories.admin.data-api.module';
import { TeamsModule } from '~data-api/teams/teams.module';

@Module({
  imports: [
    ClsModule,
    ConfigModule,
    ScheduleModule.forRoot(),
    LoggerModule,
    AuthModule,
    PrismaModule,
    TransactionsUserModule,
    CategoriesAdminDataApiModule,
    CategoriesUserDataApiModule,
    SubcategoriesAdminDataApiModule,
    AuthDataApiModule,
    TeamsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
