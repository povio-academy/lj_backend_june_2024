import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { USER_API_V1_PATH } from "~common/http/http.constant";
import { SubcategoryUserResDto } from "./dto/subcategory.user.res.dto";

@ApiTags('subcategories')
@Controller(USER_API_V1_PATH + '/subcategories')
export class SubcategoriesUserController {
    constructor() {}

    @ApiOperation({ summary: 'Get a specific subcategory' })
    @Get(':id')
    async getSubcategory(
        @Param('id') id: string
    ) : Promise<SubcategoryUserResDto> {
        return new SubcategoryUserResDto('id', 'name', 'categoryId');
    }

    @ApiOperation({ summary: 'Get all subcategories' })
    @Get()
    async getSubcategories() : Promise<SubcategoryUserResDto[]> {
        return [new SubcategoryUserResDto('id', 'name', 'categoryId')];
    }

    @ApiOperation({ summary: 'Get subcategories of a specific category' })
    @Get('category/:categoryId')
    async getSubcategoriesByCategory(
        @Param('categoryId') categoryId: string
    ) : Promise<SubcategoryUserResDto[]> {
        return [new SubcategoryUserResDto('id', 'name', 'categoryId')];
    }
}