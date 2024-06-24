import {
    Body,
    Controller,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_V1_USER_PATH } from '~common/http/http.constant';
import { CreateRecurringExpenseUserBodyDto } from './dto/create-recurring-expense.user.body.dto';
import { RecurringExpenseUserResDto } from './dto/recurring-expense.user.res.dto';
import { UpdateRecurringTransactionUserBodyDto } from './dto/update-recurring-transaction.user.body.dto';

@ApiTags('Recurring transactions')
@Controller(API_V1_USER_PATH + '/recurring-transactions')
export class RecurringTransactionsUserController {
    constructor() {}

    @ApiOperation({ summary: 'Create a recurring expense' })
    @Post()
    async createRecurringExpense(
        @Body() body: CreateRecurringExpenseUserBodyDto,
    ): Promise<RecurringExpenseUserResDto> {
        return;
    }

    @ApiOperation({ summary: 'Get a specific recurring expense' })
    @Get(':id')
    async getRecurringExpense(
        @Param('id') id: string,
    ): Promise<RecurringExpenseUserResDto> {
        return;
    }

    @ApiOperation({ summary: 'Get all recurring expenses' })
    @Get()
    async getRecurringExpenses(): Promise<RecurringExpenseUserResDto[]> {
        return;
    }

    @ApiOperation({ summary: 'Update a recurring expense' })
    @Patch(':id')
    async updateRecurringExpense(
        @Param('id') id: string,
        @Body() body: UpdateRecurringTransactionUserBodyDto,
    ): Promise<RecurringExpenseUserResDto> {
        return;
    }

    @ApiOperation({ summary: 'Delete a recurring expense' })
    @Patch(':id')
    @HttpCode(200)
    async deleteRecurringExpense(@Param('id') id: string): Promise<void> {
        return;
    }
}
