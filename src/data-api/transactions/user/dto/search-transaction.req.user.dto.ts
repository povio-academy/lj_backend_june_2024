import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString, IsUUID } from 'class-validator';

export class SearchTransactionReqUserDto {
    @ApiProperty({
        description: 'Subategory id',
        example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
    })
    @IsUUID()
    subcategoryId?: string;

    @ApiProperty({
        description: 'Category id',
        example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
    })
    @IsUUID()
    categoryId?: string;

    @ApiProperty({
        description: 'Start date from which to search transactions',
        example: '2021-01-01T00:00:00.000Z',
    })
    @IsDate()
    dateStart?: Date;

    @ApiProperty({
        description: 'End date to which to search transactions',
        example: '2021-01-01T00:00:00.000Z',
    })
    @IsDate()
    dateEnd?: Date;

    @ApiProperty({ description: 'Note', example: 'This is a note' })
    @IsString()
    note?: string;

    @ApiProperty({
        description: 'Transaction created at',
        example: '2021-01-01T00:00:00.000Z',
    })
    @IsDate()
    createdAt?: Date;

    @ApiProperty({
        description: 'Transaction updated at',
        example: '2021-01-01T00:00:00.000Z',
    })
    @IsDate()
    updatedAt?: Date;

    constructor() {}
}
