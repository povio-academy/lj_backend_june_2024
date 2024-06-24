import { ApiProperty } from '@nestjs/swagger';
import { TransactionUserResDto } from './transaction.user.res.dto';
import { TransactionSearchMetadataUserDto } from './transaction-search-metadata.user.dto';
import { Expose } from 'class-transformer';

export class TransactionSearchResUserDto {
    @ApiProperty({ type: () => [TransactionUserResDto] })
    @Expose()
    transactions: TransactionUserResDto[];

    @ApiProperty({ type: () => TransactionSearchMetadataUserDto })
    @Expose()
    metadata: TransactionSearchMetadataUserDto;
    constructor() {}
}
