import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '~common/config/config.module';
import { ScheduleModule } from '@nestjs/schedule';
import { LoggerModule } from '~common/logging/logger.module';
import { AuthModule } from '~modules/auth/auth.module';
import { ClsModule } from '~common/cls/cls.module';
import { PrismaModule } from '~vendor/prisma/prisma.module';
import { TeamsModule } from '~data-api/teams/teams.module';
import { TransactionsUserModule } from '~data-api/transactions/user/transactions.user.module';
import { CategoriesAdminDataApiModule } from '~data-api/categories/admin/categories.admin.data-api.module';
import { CategoriesUserDataApiModule } from '~data-api/categories/user/categories.user.data-api.module';
import { AuthDataApiModule } from '~data-api/auth/auth.data-api.module';
import { SubcategoriesAdminDataApiModule } from '~data-api/subcategories/admin/subcategories.admin.data-api.module';
import { SubcategoriesUserDataApiModule } from '~data-api/subcategories/user/subcategories.user.data-api.module';

@Module({
    imports: [
        ClsModule,
        ConfigModule,
        ScheduleModule.forRoot(),
        LoggerModule,
        AuthModule,
        PrismaModule,
        TeamsModule,
        TransactionsUserModule,
        CategoriesAdminDataApiModule,
        CategoriesUserDataApiModule,
        SubcategoriesAdminDataApiModule,
        SubcategoriesUserDataApiModule,
        AuthDataApiModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
