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
import { TransactionResUserDto } from './dto/transaction.res.user.dto';
import { UpdateTransactionUserDto } from './dto/update-transaction.user.dto';
import { TransactionQueryUserDto } from './dto/transaction-search-query.user.dto';
import { TransactionSearchResUserDto } from './dto/transaction-search.res.user.dto';
import { TransactionGetResUserDto } from './dto/transaction-get.res.user.dto';
import { GetTransactionReportUserDto } from './dto/get-transaction-report.user.dto';

@ApiTags('Transactions')
@Controller(API_V1_USER_PATH + '/transactions/')
export class TransactionsUserController {
    constructor() {}

    @ApiOperation({ summary: 'Create a new transaction' })
    @Post()
    @HttpCode(200)
    async createTransaction(
        @Body() createTransactionUserDto: CreateTransactionUserDto,
    ): Promise<TransactionResUserDto> {
        return new TransactionResUserDto();
    }

    @ApiOperation({ summary: 'Update an existing transaction' })
    @Post(':id')
    @HttpCode(200)
    async updateTransaction(
        @Param('id') id: string,
        @Body() updateTransactionUserDto: UpdateTransactionUserDto,
    ): Promise<void> {}

    @ApiOperation({ summary: 'Delete an existing transaction' })
    @Patch(':id')
    @HttpCode(200)
    async deleteTransaction(@Param('id') id: string): Promise<void> {}

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

    @ApiOperation({ summary: 'Search transactions' })
    @Get()
    @HttpCode(200)
    async searchTransactions(
        @Query() query: TransactionQueryUserDto,
    ): Promise<TransactionSearchResUserDto> {
        // get user id from JWT token
        return new TransactionSearchResUserDto();
    }

    @ApiOperation({ summary: 'Get all user transactions' })
    @Get('/user')
    @HttpCode(200)
    async getTransactionsUser(): Promise<TransactionGetResUserDto> {
        return new TransactionGetResUserDto();
    }

    @ApiOperation({ summary: 'Get all team transactions' })
    @Get('/team/:id')
    @HttpCode(200)
    async getTransactionsTeam(
        @Param('id') id: string,
    ): Promise<TransactionGetResUserDto> {
        return new TransactionGetResUserDto();
    }
}
