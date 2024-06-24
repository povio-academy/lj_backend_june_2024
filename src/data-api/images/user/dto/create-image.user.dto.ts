import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';

export class CreateImageUserDto {
    @ApiProperty({
        description: 'Image URL',
        example: 'https://example.com/image.jpg',
    })
    @IsNotEmpty()
    @IsUrl()
    url: string;

    constructor() {}
}
