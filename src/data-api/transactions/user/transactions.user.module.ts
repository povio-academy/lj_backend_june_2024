import { Global, Module } from '@nestjs/common';
import { TransactionsUserController } from './transactions.user.controller';

@Global()
@Module({
    controllers: [TransactionsUserController],
})
export class TransactionsUserModule {}
