import { Global, Module } from '@nestjs/common';
import { TransactionsAdminController } from './transactions.admin.controller';

@Global()
@Module({
    controllers: [TransactionsAdminController],
})
export class TransactionsAdminModule {}
