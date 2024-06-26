import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_V1_ADMIN_PATH } from '~common/http/http.constant';
import { CreateSubcategoryAdminBodyDto } from './dto/create-subcategory.admin.body.dto';
import { SubcategoryAdminResDto } from './dto/subcategory.admin.res.dto';

@ApiTags('Subcategories')
@Controller(API_V1_ADMIN_PATH + '/subcategories')
export class SubcategoriesAdminController {
    constructor() {}

    @ApiOperation({ summary: 'Create a new subcategory' })
    @Post()
    async createSubcategory(
        @Body() body: CreateSubcategoryAdminBodyDto,
    ): Promise<SubcategoryAdminResDto> {
        return new SubcategoryAdminResDto('id', 'name', 'categoryId');
    }
}
