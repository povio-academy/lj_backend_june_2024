import {
    Body,
    Controller,
    HttpCode,
    Param,
    Patch,
    Post,
    Query,
    Get,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_V1_USER_PATH } from '~common/http/http.constant';
import { CreateTransactionUserDto } from './dto/create-transaction.user.dto';
import { TransactionUserResDto } from './dto/transaction.user.res.dto';
import { UpdateTransactionUserDto } from './dto/update-transaction.user.dto';
import { TransactionQueryUserDto } from './dto/transaction-search-query.user.dto';
import { TransactionSearchResUserDto } from './dto/transaction-search.res.user.dto';
import { TransactionGetResUserDto } from './dto/transaction-get.res.user.dto';

@ApiTags('Transactions')
@Controller(API_V1_USER_PATH + '/transactions/')
export class TransactionsUserController {
    constructor() {}

    @ApiOperation({ summary: 'Create a new transaction' })
    @Post()
    @HttpCode(200)
    async createTransaction(
        @Body() createTransactionUserDto: CreateTransactionUserDto,
    ): Promise<TransactionUserResDto> {
        return new TransactionUserResDto();
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
    async getTransactionUser(): Promise<TransactionGetResUserDto> {
        return new TransactionGetResUserDto();
    }
}
