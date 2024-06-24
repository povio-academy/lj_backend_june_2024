import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { API_V1_USER_PATH } from '~common/http/http.constant';
import { CreateImageResUserDto } from './user/dto/create-image.res.user.dto';
import { CreateImageUserDto } from './user/dto/create-image.user.dto';

@ApiTags('Images')
@Controller(API_V1_USER_PATH + '/images')
export class ImagesUserController {
    constructor() {}

    @ApiOperation({ summary: 'Upload a new image' })
    @Post()
    @HttpCode(200)
    async createImage(
        @Body() createImageUserDto: CreateImageUserDto,
    ): Promise<CreateImageResUserDto> {
        return new CreateImageResUserDto();
    }
}
