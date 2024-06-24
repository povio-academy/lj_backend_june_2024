import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CreateImageResUserDto {
    @ApiProperty({
        description: 'Image URL',
        example: 'https://example.com/image.jpg',
    })
    @Expose()
    url: string;

    constructor() {}
}
