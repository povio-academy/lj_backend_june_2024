import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

type PageInfoProps = {
    total: number;
    page: number;
    pageSize: number;
};

export class PagingMetadataDto {
    @ApiProperty({ description: 'Total number of items', example: 50 })
    @Expose()
    total: number;

    @ApiProperty({ description: 'Current page number', example: 3 })
    @Expose()
    page: number;

    @ApiProperty({ description: 'Number of items per page', example: 10 })
    @Expose()
    pageSize: number;

    constructor({ total, page, pageSize }: PageInfoProps) {
        this.total = total;
        this.page = page;
        this.pageSize = pageSize;
    }
}
