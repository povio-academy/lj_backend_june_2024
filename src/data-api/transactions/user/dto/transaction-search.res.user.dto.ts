import { ApiProperty } from '@nestjs/swagger';
import { TransactionResUserDto } from './transaction.res.user.dto';
import { TransactionSearchMetadataUserDto } from './transaction-search-metadata.user.dto';
import { Expose } from 'class-transformer';

export class TransactionSearchResUserDto {
    @ApiProperty({ type: [TransactionResUserDto] })
    @Expose()
    transactions: TransactionResUserDto[];

    @ApiProperty({ type: TransactionSearchMetadataUserDto })
    @Expose()
    metadata: TransactionSearchMetadataUserDto;
    constructor() {}
}
