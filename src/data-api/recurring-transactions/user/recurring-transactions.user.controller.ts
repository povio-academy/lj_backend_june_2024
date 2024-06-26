import {
    Body,
    Controller,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_V1_USER_PATH } from '~common/http/http.constant';
import { CreateRecurringExpenseUserBodyDto } from './dto/create-recurring-expense.user.body.dto';
import { RecurringExpenseUserResDto } from './dto/recurring-expense.user.res.dto';
import { UpdateRecurringTransactionUserBodyDto } from './dto/update-recurring-transaction.user.body.dto';
import { PagedReqDto } from '~data-api/common/dto/paged.req.dto';
import { PagedResDto } from '~data-api/common/dto/paged.res.dto';
import { ApiPaginationResponse } from '~common/decorators/api-pagination.res.decorator';

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

    @ApiPaginationResponse(RecurringExpenseUserResDto)
    @ApiOperation({ summary: 'Get all recurring expenses' })
    @Get()
    async getRecurringExpenses(
        @Query() paging: PagedReqDto,
    ): Promise<PagedResDto> {
        return {
            data: [
                new RecurringExpenseUserResDto(
                    'id',
                    'categoryId',
                    'subcategoryId',
                    100.0,
                    'note',
                    '0 0 1 * *',
                    new Date(2021, 0, 1),
                    new Date(2025, 0, 1),
                    'teamId',
                    new Date(2024, 5, 27),
                    new Date(2024, 5, 26),
                ),
            ],
            metadata: {
                page: 1,
                pageSize: 10,
                total: 1,
            },
        };
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
