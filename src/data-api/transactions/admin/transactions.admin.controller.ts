import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TransactionSearchReqAdminDto } from './dto/transaction-search.req.admin.dto';
import { API_V1_ADMIN_PATH } from '~common/http/http.constant';
import { PagedReqDto } from '~data-api/common/dto/paged.req.dto';
import { PagedResDto } from '~data-api/common/dto/paged.res.dto';
import { TransactionResAdminDto } from './dto/transaction.res.admin.dto';
import { PagingInfo } from '~data-api/common/dto/paging-info';

@ApiTags('Transactions')
@Controller(API_V1_ADMIN_PATH + '/transactions/')
export class TransactionsAdminController {
    constructor() {}

    @ApiOperation({ summary: 'Search transactions' })
    @Get()
    @HttpCode(200)
    async searchTransactions(
        @Query() paging: PagedReqDto,
        searchQuery: TransactionSearchReqAdminDto,
    ): Promise<PagedResDto<TransactionResAdminDto>> {
        return {
            data: [new TransactionResAdminDto(), new TransactionResAdminDto()],
            pagingInfo: new PagingInfo({ page: 1, pageSize: 10, total: 2 }),
        };
    }
}
