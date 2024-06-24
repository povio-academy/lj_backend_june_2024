import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateSubcategoryAdminBodyDto {
    @IsUUID()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Category id',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    categoryId: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    @ApiProperty({ description: 'Subcategory name', example: 'Fruits' })
    name: string;
}
