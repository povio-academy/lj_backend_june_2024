import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';
import { TransactionType } from '~common/enums';

export class CreateTransactionUserDto {
  @ApiProperty({ description: 'Team ID', example: '1' })
  @IsString()
  teamId?: string;

  @ApiProperty({ description: 'Category ID', example: '1' })
  @IsString()
  @IsNotEmpty()
  categoryId: string;

  @ApiProperty({ description: 'Subcategory ID', example: '1' })
  @IsString()
  subcategoryId?: string;

  @ApiProperty({ description: 'Amount', example: 100 })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ description: 'Note', example: 'This is a note' })
  @IsString()
  @MaxLength(255)
  note?: string;

  @ApiProperty({
    description: 'Transaction type',
    example: TransactionType.INCOME,
  })
  @IsNotEmpty()
  type: TransactionType;

  constructor() {}
}
