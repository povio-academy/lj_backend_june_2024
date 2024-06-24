import { ApiProperty } from '@nestjs/swagger';
import { TransactionType } from '@prisma/client';
import { Expose } from 'class-transformer';

export class TransactionUserResDto {
    @ApiProperty({
        description: 'Transaction ID',
        example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
    })
    @Expose()
    teamId?: string;

    @ApiProperty({
        description: 'Category ID',
        example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
    })
    @Expose()
    categoryId: string;

    @ApiProperty({
        description: 'Subcategory ID',
        example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
    })
    @Expose()
    subcategoryId?: string;

    @ApiProperty({ description: 'Amount', example: 100 })
    @Expose()
    amount: number;

    @ApiProperty({ description: 'Note', example: 'This is a note' })
    @Expose()
    note?: string;

    @ApiProperty({
        description: 'Transaction type',
        example: TransactionType.INCOME,
    })
    @Expose()
    type: TransactionType;

    constructor() {}
}
