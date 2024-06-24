import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    ArrayMaxSize,
    ArrayMinSize,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsString,
    IsUUID,
    MaxLength,
    ValidateNested,
} from 'class-validator';
import { TransactionType } from '~common/enums';
import { ImageIdUserDto } from './image-id.user.dto';
import {
    OBJECT_IMAGES_MAX_LENGTH,
    OBJECT_IMAGES_MIN_LENGTH,
    OBJECT_NOTE_MAX_LENGTH,
} from '~common/domain.constants';

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

    @ApiProperty({
        description: 'Images ids array',
        example: [
            'c6895fef-5456-4665-aece-14c2ee1e2fe0',
            'b7895fef-1234-4678-bcde-56d7ee3e4gh1',
        ],
    })
    @ArrayMinSize(OBJECT_IMAGES_MIN_LENGTH)
    @ArrayMaxSize(OBJECT_IMAGES_MAX_LENGTH)
    @ValidateNested({ each: true })
    @Type(() => ImageIdUserDto)
    imagesIds?: ImageIdUserDto[];

    constructor() {}
}
