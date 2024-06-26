import { Body, Controller, Post } from '@nestjs/common';
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
}
