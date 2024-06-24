import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_V1_ADMIN_PATH } from '~common/http/http.constant';
import { CategoryAdminResDto } from './dto/category.admin.res.dto';
import { CreateCategoryAdminBodyDto } from './dto/create-category.admin.body.dto';

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
    async getCategories(): Promise<CategoryAdminResDto[]> {
        return [new CategoryAdminResDto('id', 'name')];
    }
}
