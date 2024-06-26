import { ApiProperty } from '@nestjs/swagger';
import {
    IsNumber,
    IsNumberString,
    IsOptional,
    IsPositive,
} from 'class-validator';

export class PagedReqDto {
    @IsNumberString()
    @IsOptional()
    @ApiProperty({
        description: 'Page number',
        example: 1,
    })
    readonly page?: number;

    @IsNumberString()
    @IsOptional()
    @ApiProperty({
        description: 'Number of items per page',
        example: 10,
    })
    readonly pageSize?: number;

    @IsOptional()
    @ApiProperty({
        description: 'Sort order',
        example: 'ASC',
    })
    readonly sortOrder?: SortOrder;

    @IsOptional()
    @ApiProperty({
        description: 'Sort by',
        example: 'name',
    })
    readonly sortBy?: string;
}

export enum SortOrder {
    ASC = 'ASC',
    DESC = 'DESC',
}
