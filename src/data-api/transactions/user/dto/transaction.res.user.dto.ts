import { ApiProperty } from '@nestjs/swagger';
import { TransactionType } from '@prisma/client';
import { Expose } from 'class-transformer';

export class TransactionResUserDto {
    @ApiProperty({
        description: 'Transaction ID',
        example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
    })
    @Expose()
    transactionId: string;

    @ApiProperty({
        description: 'User ID',
        example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
    })
    @Expose()
    userId: string;

    @ApiProperty({
        description: 'Team ID',
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

    @ApiProperty({
        description: 'Created at',
        example: '2021-07-01T00:00:00.000Z',
    })
    @Expose()
    createdAt: Date;

    @ApiProperty({
        description: 'Images ids array',
        example: [
            'c6895fef-5456-4665-aece-14c2ee1e2fe0',
            'b7895fef-1234-4678-bcde-56d7ee3e4gh1',
        ],
    })
    @Expose()
    imagesIds?: string[];

    constructor() {}
}
