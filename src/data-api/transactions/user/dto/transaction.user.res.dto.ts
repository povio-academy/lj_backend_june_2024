import { ApiProperty } from '@nestjs/swagger';
import { TransactionType } from '@prisma/client';
import { Expose } from 'class-transformer';

export class TransactionUserResDto {
  @ApiProperty({ description: 'Transaction ID', example: '1' })
  @Expose()
  teamId?: string;

  @ApiProperty({ description: 'Category ID', example: '1' })
  @Expose()
  categoryId: string;

  @ApiProperty({ description: 'Subcategory ID', example: '1' })
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
