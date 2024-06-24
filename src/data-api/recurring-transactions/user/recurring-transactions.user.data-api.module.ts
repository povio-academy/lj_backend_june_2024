import { Global, Module } from '@nestjs/common';
import { RecurringTransactionsUserController } from './recurring-transactions.user.controller';

@Global()
@Module({
    controllers: [RecurringTransactionsUserController],
})
export class RecurringTransactionsUserDataApiModule {}
