import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { TransactionResAdminDto } from './transaction.res.admin.dto';
import { TransactionSearchMetadataAdminDto } from './transaction-search-metadata.admin.dto';

export class TransactionSearchResAdminDto {
    @ApiProperty({ type: () => [TransactionResAdminDto] })
    @Expose()
    transactions: TransactionResAdminDto[];

    @ApiProperty({ type: () => TransactionSearchMetadataAdminDto })
    @Expose()
    metadata: TransactionSearchMetadataAdminDto;
    constructor() {}
}
