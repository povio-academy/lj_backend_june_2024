import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TransactionQueryAdminDto } from './dto/transaction-search-query.admin.dto';
import { TransactionSearchResAdminDto } from './dto/transactions-search.res.admin.dto';
import { API_V1_ADMIN_PATH } from '~common/http/http.constant';

@ApiTags('Transactions')
@Controller(API_V1_ADMIN_PATH + '/transactions/')
export class TransactionsAdminController {
    constructor() {}

    @ApiOperation({ summary: 'Search transactions' })
    @Get()
    @HttpCode(200)
    async searchTransactions(
        @Query() query: TransactionQueryAdminDto,
    ): Promise<TransactionSearchResAdminDto> {
        // get user id from JWT token
        return new TransactionSearchResAdminDto();
    }
}
