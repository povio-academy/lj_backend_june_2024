import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_V1_ADMIN_PATH } from '~common/http/http.constant';
import { CategoryAdminResDto } from './dto/category.admin.res.dto';
import { CreateCategoryAdminBodyDto } from './dto/create-category.admin.body.dto';
import { PagedReqDto } from '~data-api/common/dto/paged.req.dto';
import { PagedResDto } from '~data-api/common/dto/paged.res.dto';
import { PagingInfo } from '~data-api/common/dto/paging-info';

@ApiTags('categories')
@Controller(API_V1_ADMIN_PATH + '/categories')
export class CategoriesAdminController {
    constructor() {}

    @ApiOperation({ summary: 'Create a new category' })
    @Post()
    async createCategory(
        @Body() body: CreateCategoryAdminBodyDto,
    ): Promise<CategoryAdminResDto> {
        return new CategoryAdminResDto('id', 'name');
    }

    @ApiOperation({ summary: 'Get a specific category' })
    @Get(':id')
    async getCategory(@Param('id') id: string): Promise<CategoryAdminResDto> {
        return new CategoryAdminResDto('id', 'name');
    }

    @ApiOperation({ summary: 'Get all categories' })
    @Get()
    async getCategories(
        @Query() paging: PagedReqDto,
    ): Promise<PagedResDto<CategoryAdminResDto>> {
        return {
            data: [
                new CategoryAdminResDto('id', 'name'),
                new CategoryAdminResDto('id2', 'name2'),
            ],
            pagingInfo: new PagingInfo({ page: 1, pageSize: 10, total: 1 }),
        };
    }
}
