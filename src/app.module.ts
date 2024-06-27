import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '~common/config/config.module';
import { ScheduleModule } from '@nestjs/schedule';
import { LoggerModule } from '~common/logging/logger.module';
import { AuthModule } from '~modules/auth/auth.module';
import { ClsModule } from '~common/cls/cls.module';
import { PrismaModule } from '~vendor/prisma/prisma.module';
import { SendgridModule } from '~vendor/sendgrid/sendgrid.module';
import { TeamsModule } from '~data-api/teams/teams.module';
import { TransactionsUserModule } from '~data-api/transactions/user/transactions.user.module';
import { CategoriesAdminDataApiModule } from '~data-api/categories/admin/categories.admin.data-api.module';
import { CategoriesUserDataApiModule } from '~data-api/categories/user/categories.user.data-api.module';
import { AuthDataApiModule } from '~data-api/auth/auth.data-api.module';
import { SubcategoriesAdminDataApiModule } from '~data-api/subcategories/admin/subcategories.admin.data-api.module';
import { SubcategoriesUserDataApiModule } from '~data-api/subcategories/user/subcategories.user.data-api.module';
import { UserModule } from '~modules/user/user.module';
import { DbModule } from '~db/db.module';
import { UsersAdminModule } from '~data-api/users/admin/users.admin.module';
import { ImagesUserModule } from '~data-api/images/images.user.module';
import { RecurringTransactionsUserDataApiModule } from '~data-api/recurring-transactions/user/recurring-transactions.user.data-api.module';
import { TransactionsAdminModule } from '~data-api/transactions/admin/transactions.admin.module';
import { NotificationModule } from '~modules/notification/notification.module';
import { TeamsUserDataApiModule } from '~data-api/teams/user/teams.user.data-api.module';

@Module({
    imports: [
        ClsModule,
        ConfigModule,
        ScheduleModule.forRoot(),
        LoggerModule,
        AuthModule,
        PrismaModule,
        SendgridModule,
        TeamsModule,
        TeamsUserDataApiModule,
        TransactionsUserModule,
        CategoriesAdminDataApiModule,
        CategoriesUserDataApiModule,
        SubcategoriesAdminDataApiModule,
        SubcategoriesUserDataApiModule,
        AuthDataApiModule,
        DbModule,
        UserModule,
        UsersAdminModule,
        ImagesUserModule,
        RecurringTransactionsUserDataApiModule,
        TransactionsAdminModule,
        NotificationModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
