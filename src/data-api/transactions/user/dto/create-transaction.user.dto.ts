import { ApiProperty } from '@nestjs/swagger';
import {
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsString,
    IsUUID,
    MaxLength,
} from 'class-validator';
import { OBJECT_NOTE_MAX_LENGTH } from '~common/domain.constants';
import { TransactionType } from '~common/enums';

export class CreateTransactionUserDto {
    @ApiProperty({
        description: 'Team ID',
        example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
    })
    @IsUUID()
    readonly teamId?: string;

    @ApiProperty({
        description: 'Category ID',
        example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
    })
    @IsUUID()
    @IsNotEmpty()
    readonly categoryId: string;

    @ApiProperty({
        description: 'Subcategory ID',
        example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
    })
    @IsUUID()
    readonly subcategoryId?: string;

    @ApiProperty({ description: 'Amount', example: 100 })
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    readonly amount: number;

    @ApiProperty({ description: 'Note', example: 'This is a note' })
    @IsString()
    @MaxLength(OBJECT_NOTE_MAX_LENGTH)
    readonly note?: string;

    @ApiProperty({
        description: 'Transaction type',
        example: TransactionType.INCOME,
    })
    @IsNotEmpty()
    @IsEnum(TransactionType)
    readonly type: TransactionType;

    constructor() {}
}
