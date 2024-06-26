import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_V1_USER_PATH } from '~common/http/http.constant';
import { SubcategoryUserResDto } from './dto/subcategory.user.res.dto';
import { PagedReqDto } from '~data-api/common/dto/paged.req.dto';
import { PagedResDto } from '~data-api/common/dto/paged.res.dto';

@ApiTags('Subcategories')
@Controller(API_V1_USER_PATH + '/subcategories')
export class SubcategoriesUserController {
    constructor() {}

    @ApiOperation({ summary: 'Get a specific subcategory' })
    @Get(':id')
    async getSubcategory(
        @Param('id') id: string,
    ): Promise<SubcategoryUserResDto> {
        return new SubcategoryUserResDto('id', 'name', 'categoryId');
    }

    @ApiOperation({ summary: 'Get all subcategories' })
    @Get()
    async getSubcategories(
        @Query() paging: PagedReqDto,
    ): Promise<PagedResDto<SubcategoryUserResDto>> {
        return {
            data: [
                new SubcategoryUserResDto('id', 'name', 'categoryId'),
                new SubcategoryUserResDto('id2', 'name2', 'categoryId2'),
            ],
            pagingInfo: {
                page: 1,
                pageSize: 10,
                total: 2,
            },
        };
    }

    @ApiOperation({ summary: 'Get subcategories of a specific category' })
    @Get('category/:categoryId')
    async getSubcategoriesByCategory(
        @Param('categoryId') categoryId: string,
        @Query() paging: PagedReqDto,
    ): Promise<PagedResDto<SubcategoryUserResDto>> {
        return {
            data: [
                new SubcategoryUserResDto('id', 'name', 'categoryId'),
                new SubcategoryUserResDto('id2', 'name2', 'categoryId'),
            ],
            pagingInfo: {
                page: 1,
                pageSize: 10,
                total: 2,
            },
        };
    }
}
