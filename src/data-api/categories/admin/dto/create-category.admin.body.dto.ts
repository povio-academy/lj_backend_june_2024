import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCategoryAdminBodyDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    @ApiProperty({ description: 'Category name', example: 'Groceries' })
    name: string;
}
