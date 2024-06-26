import {
    Body,
    Controller,
    HttpCode,
    Param,
    Patch,
    Post,
    Query,
    Get,
    StreamableFile,
    Header,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_V1_USER_PATH } from '~common/http/http.constant';
import { CreateTransactionUserDto } from './dto/create-transaction.user.dto';
import { UpdateTransactionUserDto } from './dto/update-transaction.user.dto';
import { SearchTransactionReqUserDto } from './dto/search-transaction.req.user.dto';
import { SearchTransactionResUserDto } from './dto/search-transaction.res.user.dto';
import { GetTransactionReportUserDto } from './dto/get-transaction-report.user.dto';
import { PagedResDto } from '~data-api/common/dto/paged.res.dto';
import { PagedReqDto } from '~data-api/common/dto/paged.req.dto';
import { GetTransactionResUserDto } from './dto/get-transaction.res.user.dto';
import { ApiPaginationResponse } from '~common/decorators/api-pagination.res.decorator';
import { PagingMetadataDto } from '~data-api/common/dto/paging-metadata.dto';

@ApiTags('Transactions')
@Controller(API_V1_USER_PATH + '/transactions/')
export class TransactionsUserController {
    constructor() {}

    @ApiOperation({ summary: 'Create a new transaction' })
    @Post()
    @HttpCode(200)
    async createTransaction(
        @Body() createTransactionUserDto: CreateTransactionUserDto,
    ): Promise<SearchTransactionResUserDto> {
        return new SearchTransactionResUserDto();
    }

    @ApiOperation({ summary: 'Update/delete an existing transaction' })
    @Patch(':id')
    @HttpCode(200)
    async updateTransaction(
        @Param('id') id: string,
        @Body() updateTransactionUserDto: UpdateTransactionUserDto,
    ): Promise<void> {}

    @ApiOperation({
        summary: 'Get a report of transactions, based on parameters',
    })
    @Get('report')
    @HttpCode(200)
    @Header('Content-Type', 'application/pdf')
    async getReport(
        @Query() query: GetTransactionReportUserDto,
    ): Promise<StreamableFile> {
        const buffer = Buffer.from(
            'This is an example file which will soon turn into a PDF report',
            'utf-8',
        );
        return new StreamableFile(buffer);
    }

    @ApiPaginationResponse(SearchTransactionReqUserDto)
    @ApiOperation({ summary: 'Search transactions' })
    @Get()
    @HttpCode(200)
    async searchTransactions(
        @Query() paging: PagedReqDto,
        searchQuery: SearchTransactionReqUserDto,
    ): Promise<PagedResDto> {
        // get user id from JWT token
        return {
            data: [new SearchTransactionResUserDto()],
            metadata: new PagingMetadataDto({
                page: 1,
                pageSize: 10,
                total: 1,
            }),
        };
    }

    @ApiPaginationResponse(GetTransactionResUserDto)
    @ApiOperation({ summary: 'Get all user transactions' })
    @Get('/user')
    @HttpCode(200)
    async getTransactionsUser(
        @Query() paging: PagedReqDto,
    ): Promise<PagedResDto> {
        return {
            data: [new GetTransactionResUserDto()],
            metadata: new PagingMetadataDto({
                page: 1,
                pageSize: 10,
                total: 1,
            }),
        };
    }

    @ApiPaginationResponse(GetTransactionResUserDto)
    @ApiOperation({ summary: 'Get all team transactions' })
    @Get('/team/:id')
    @HttpCode(200)
    async getTransactionsTeam(
        @Param('id') id: string,
        @Query() paging: PagedReqDto,
    ): Promise<PagedResDto> {
        return {
            data: [new GetTransactionResUserDto()],
            metadata: new PagingMetadataDto({
                page: 1,
                pageSize: 10,
                total: 1,
            }),
        };
    }
}
