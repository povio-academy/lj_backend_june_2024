import { ApiProperty } from '@nestjs/swagger';
import {
    IsDateString,
    IsNumber,
    IsOptional,
    IsString,
    IsUUID,
    MaxLength,
} from 'class-validator';
import { OBJECT_NOTE_MAX_LENGTH } from '~common/domain.constants';

export class UpdateRecurringTransactionUserBodyDto {
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'Cron expression', example: '0 0 1 * *' })
    readonly cronExpression?: string;

    @IsDateString()
    @IsOptional()
    @ApiProperty({
        description: 'Start date',
        example: '2021-01-01T00:00:00.000Z',
    })
    readonly startDate?: Date;

    @IsDateString()
    @IsOptional()
    @ApiProperty({
        description: 'End date',
        example: '2021-01-31T00:00:00.000Z',
    })
    readonly endDate?: Date;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'Amount', example: 100.0 })
    readonly amount?: number;

    @IsString()
    @IsOptional()
    @MaxLength(OBJECT_NOTE_MAX_LENGTH)
    @ApiProperty({ description: 'Note', example: 'This is a note' })
    readonly note?: string;

    @IsUUID()
    @IsOptional()
    @ApiProperty({
        description: 'Category id',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    readonly categoryId?: string;

    @IsUUID()
    @IsOptional()
    @ApiProperty({
        description: 'Subcategory id',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    readonly subcategoryId?: string;

    @IsUUID()
    @IsOptional()
    @ApiProperty({
        description: 'Team id',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    readonly teamId?: string;

    constructor() {}
}
