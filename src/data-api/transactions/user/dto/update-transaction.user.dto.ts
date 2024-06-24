import { ApiProperty } from '@nestjs/swagger';
import { TransactionType } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsEnum,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { ImageIdDto } from './image-id.user.dto';

export class UpdateTransactionUserDto {
  @ApiProperty({
    description: 'Category id',
    example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
  })
  @IsUUID()
  categoryId?: string;

  @ApiProperty({
    description: 'Subcategory id',
    example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
  })
  @IsUUID()
  subcategoryId?: string;

  @ApiProperty({ description: 'Note', example: 'This is a note' })
  @IsString()
  @MaxLength(500)
  note?: string;

  @ApiProperty({ description: 'Amount', example: 100 })
  @IsNumber()
  @IsPositive()
  amount?: number;

  @ApiProperty({
    description: 'Transaction type',
    example: TransactionType.INCOME,
  })
  @IsEnum(TransactionType)
  type?: TransactionType;

  @ApiProperty({
    description: 'Images ids array',
    example: [
      'c6895fef-5456-4665-aece-14c2ee1e2fe0',
      'b7895fef-1234-4678-bcde-56d7ee3e4gh1',
    ],
  })
  @ArrayMinSize(1)
  @ArrayMaxSize(20)
  @ValidateNested({ each: true })
  @Type(() => ImageIdDto)
  imagesIds?: ImageIdDto[];

  constructor() {}
}
