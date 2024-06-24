import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNumber, Min } from 'class-validator';

export class TransactionSearchMetadataUserDto {
    @ApiProperty({
        description: 'Total number of transactions',
        example: 100,
    })
    @Expose()
    @IsNumber()
    total: number;

    @ApiProperty({
        description: 'Current page number',
        example: 1,
    })
    @Expose()
    @IsNumber()
    @Min(1)
    page: number;

    @ApiProperty({
        description: 'Number of transactions per page',
        example: 10,
    })
    @Expose()
    @IsNumber()
    @Min(1)
    pageSize: number;
}
