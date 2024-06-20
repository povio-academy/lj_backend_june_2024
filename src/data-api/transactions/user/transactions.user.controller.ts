import { Body, Controller, HttpCode, Injectable, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { USER_API_V1_PATH } from '~common/http/http.constant';
import { CreateTransactionUserDto } from './dto/create-transaction.user.dto';
import { TransactionUserResDto } from './dto/transaction.user.res.dto';
import { ChangeTransactionUserDto } from './dto/change-transaction.user.dto';

@ApiTags('Transactions')
@Controller(USER_API_V1_PATH + '/transactions/')
export class TransactionsUserController {
  constructor() {}

  @ApiOperation({ summary: 'Create a new transaction' })
  @Post()
  @HttpCode(200)
  async createTransaction(
    @Body() createTransactionUserDto: CreateTransactionUserDto,
  ): Promise<TransactionUserResDto> {
    return new TransactionUserResDto();
    {
    }
  }

  @ApiOperation({ summary: 'Update an existing transaction' })
  @Post(':id')
  @HttpCode(200)
  async updateTransaction(
    @Body() changeTransactionUserDto: ChangeTransactionUserDto,
  ) {}
}
