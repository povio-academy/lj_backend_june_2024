import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_V1_USER_PATH } from '~common/http/http.constant';
import { CategoryUserResDto } from './dto/category.user.res.dto';
import { PagedReqDto } from '~data-api/common/dto/paged.req.dto';
import { PagedResDto } from '~data-api/common/dto/paged.res.dto';

@ApiTags('categories')
@Controller(API_V1_USER_PATH + '/categories')
export class CategoriesUserController {
    constructor() {}

    @ApiOperation({ summary: 'Get a specific category' })
    @Get(':id')
    async getCategory(@Param('id') id: string): Promise<CategoryUserResDto> {
        return new CategoryUserResDto('id', 'name');
    }

    @ApiOperation({ summary: 'Get all categories' })
    @Get()
    async getCategories(
        @Query() paging: PagedReqDto,
    ): Promise<PagedResDto<CategoryUserResDto>> {
        return {
            data: [
                new CategoryUserResDto('id', 'name'),
                new CategoryUserResDto('id2', 'name2'),
            ],
            pagingInfo: {
                page: 1,
                pageSize: 10,
                total: 2,
            },
        };
    }
}
