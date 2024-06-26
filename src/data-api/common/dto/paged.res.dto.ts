import { Expose } from 'class-transformer';
import { PagingMetadataDto } from './paging-metadata.dto';
import { ApiProperty } from '@nestjs/swagger';

export class PagedResDto {
    @Expose()
    data: any[];

    @ApiProperty({ type: PagingMetadataDto })
    @Expose()
    metadata: PagingMetadataDto;

    constructor(data: any[], metadata: PagingMetadataDto) {
        this.data = data;
        this.metadata = metadata;
    }
}
