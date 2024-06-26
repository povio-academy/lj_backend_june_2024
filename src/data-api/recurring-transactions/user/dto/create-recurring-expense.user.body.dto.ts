import { ApiProperty } from '@nestjs/swagger';
import {
    IsDateString,
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsString,
    IsUUID,
    MaxLength,
} from 'class-validator';
import { OBJECT_NOTE_MAX_LENGTH } from '~common/domain.constants';

export class CreateRecurringExpenseUserBodyDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'Cron expression', example: '0 0 1 * *' })
    readonly cronExpression: string;

    @IsDateString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Start date',
        example: '2021-01-01T00:00:00.000Z',
    })
    readonly startDate: Date;

    @IsDateString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'End date',
        example: '2021-01-31T00:00:00.000Z',
    })
    readonly endDate: Date;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty({ description: 'Amount', example: 100.0 })
    readonly amount: number;

    @IsUUID()
    @ApiProperty({
        description: 'Category id',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    readonly teamId?: string;

    @IsUUID()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Category id',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    readonly categoryId: string;

    @IsUUID()
    @ApiProperty({
        description: 'Subcategory id',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    readonly subcategoryId?: string;

    @IsString()
    @MaxLength(OBJECT_NOTE_MAX_LENGTH)
    @ApiProperty({ description: 'Note', example: 'This is a note' })
    readonly note?: string;
}
