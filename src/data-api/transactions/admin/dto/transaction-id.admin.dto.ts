import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class TransactionIdAdminDto {
    @ApiProperty({
        description: 'Transaction ID',
        example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
    })
    @IsUUID()
    @IsNotEmpty()
    transactionIds: string;

    constructor() {}
}
