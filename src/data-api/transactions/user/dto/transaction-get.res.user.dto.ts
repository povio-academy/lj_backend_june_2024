import { ApiProperty } from '@nestjs/swagger';
import { TransactionUserResDto } from './transaction.user.res.dto';
import { Expose } from 'class-transformer';

export class TransactionGetResUserDto {
    @ApiProperty({ type: () => [TransactionUserResDto] })
    @Expose()
    transactions: TransactionUserResDto[];
    constructor() {}
}
