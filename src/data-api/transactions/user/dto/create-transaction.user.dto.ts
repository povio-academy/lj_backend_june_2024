import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { TransactionType } from '~common/enums';

export class CreateTransactionUserDto {
  @ApiProperty({
    description: 'Team ID',
    example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
  })
  @IsUUID()
  teamId?: string;

  @ApiProperty({
    description: 'Category ID',
    example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
  })
  @IsUUID()
  @IsNotEmpty()
  categoryId: string;

  @ApiProperty({
    description: 'Subcategory ID',
    example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
  })
  @IsUUID()
  subcategoryId?: string;

  @ApiProperty({ description: 'Amount', example: 100 })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ description: 'Note', example: 'This is a note' })
  @IsString()
  @MaxLength(500)
  note?: string;

  @ApiProperty({
    description: 'Transaction type',
    example: TransactionType.INCOME,
  })
  @IsNotEmpty()
  type: TransactionType;

  constructor() {}
}
