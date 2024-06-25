import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class PagedReqDto {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    @ApiProperty({
        description: 'Page number',
        example: 1,
    })
    readonly page: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    @ApiProperty({
        description: 'Number of items per page',
        example: 10,
    })
    readonly pageSize: number;
}

export enum SortOrder {
    ASC = 'ASC',
    DESC = 'DESC',
}
