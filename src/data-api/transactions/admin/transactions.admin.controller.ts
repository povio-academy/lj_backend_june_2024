import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_V1_ADMIN_PATH } from '~common/http/http.constant';
import { PagedReqDto } from '~data-api/common/dto/paged.req.dto';
import { PagedResDto } from '~data-api/common/dto/paged.res.dto';
import { SearchTransactionResAdminDto } from './dto/search-transaction.res.admin.dto';
import { SearchTransactionReqAdminDto } from './dto/search-transaction.req.admin.dto';
import { ApiPaginationResponse } from '~common/decorators/api-pagination.res.decorator';
import { PagingMetadataDto } from '~data-api/common/dto/paging-metadata.dto';

@ApiTags('Transactions')
@Controller(API_V1_ADMIN_PATH + '/transactions/')
export class TransactionsAdminController {
    constructor() {}

    @ApiPaginationResponse(SearchTransactionResAdminDto)
    @ApiOperation({ summary: 'Search transactions' })
    @Get()
    @HttpCode(200)
    async searchTransactions(
        @Query() paging: PagedReqDto,
        searchQuery: SearchTransactionReqAdminDto,
    ): Promise<PagedResDto> {
        return {
            data: [
                new SearchTransactionResAdminDto(),
                new SearchTransactionResAdminDto(),
            ],
            metadata: new PagingMetadataDto({
                page: 1,
                pageSize: 10,
                total: 2,
            }),
        };
    }
}
