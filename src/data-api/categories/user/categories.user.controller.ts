import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { USER_API_V1_PATH } from "~common/http/http.constant";
import { CategoryUserResDto } from "./dto/category.user.res.dto";

@ApiTags('categories')
@Controller(USER_API_V1_PATH + '/categories')
export class CategoriesUserController {
    constructor() {}

    @ApiOperation({ summary: 'Get a specific category'})
    @Get(':id')
    async getCategory(
        @Param('id') id: string
    ) : Promise<CategoryUserResDto> {
        return new CategoryUserResDto('id', 'name');
    }

    @ApiOperation({ summary: 'Get all categories' })
    @Get()
    async getCategories() : Promise<CategoryUserResDto[]> {
        return [new CategoryUserResDto('id', 'name')];
    }
}