import { ApiProperty } from '@nestjs/swagger';
import { TransactionResUserDto } from './transaction.res.user.dto';
import { Expose } from 'class-transformer';

export class TransactionGetResUserDto {
    @ApiProperty({ type: () => [TransactionResUserDto] })
    @Expose()
    transactions: TransactionResUserDto[];
    constructor() {}
}
