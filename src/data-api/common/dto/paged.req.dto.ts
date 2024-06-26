import { ApiProperty } from '@nestjs/swagger';
import {
    IsNumber,
    IsNumberString,
    IsOptional,
    IsPositive,
} from 'class-validator';

export enum SortOrder {
    ASC = 'ASC',
    DESC = 'DESC',
}

export class PagedReqDto {
    @IsNumberString()
    @IsOptional()
    @ApiProperty({
        description: 'Page number',
        example: 1,
    })
    readonly page?: number = 1;

    @IsNumberString()
    @IsOptional()
    @ApiProperty({
        description: 'Number of items per page',
        example: 10,
    })
    readonly pageSize?: number = 10;

    @IsOptional()
    @ApiProperty({
        description: 'Sort order',
        example: 'ASC',
    })
    readonly sortOrder?: SortOrder = SortOrder.ASC;

    @IsOptional()
    @ApiProperty({
        description: 'Sort by',
        example: 'name',
    })
    readonly sortBy?: string;
}
