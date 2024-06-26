import { ApiProperty } from '@nestjs/swagger';
import {
    ArrayMaxSize,
    ArrayMinSize,
    IsDate,
    IsString,
    IsUUID,
    ValidateNested,
} from 'class-validator';

export class SearchTransactionReqAdminDto {
    @ApiProperty({
        description: 'Transaction id',
        example: [
            'c6895fef-5456-4665-aece-14c2ee1e2fe0',
            'b7895fef-1234-4678-bcde-56d7ee3e4gh1',
        ],
    })
    @ArrayMinSize(1)
    @ArrayMaxSize(200)
    @ValidateNested({ each: true })
    @IsUUID(4, { each: true })
    transactionIds?: string[];

    @ApiProperty({
        description: 'User id',
        example: [
            'c6895fef-5456-4665-aece-14c2ee1e2fe0',
            'b7895fef-1234-4678-bcde-56d7ee3e4gh1',
        ],
    })
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @IsUUID(4, { each: true })
    userIds?: string[];

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

    constructor() {}
}
