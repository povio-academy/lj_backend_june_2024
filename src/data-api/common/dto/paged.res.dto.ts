import { Expose } from 'class-transformer';
import { PagingInfo } from './paging-info';

export class PagedResDto<T> {
    @Expose()
    data: T[];

    @Expose()
    pagingInfo: PagingInfo;

    constructor(data: T[], pagingInfo: PagingInfo) {
        this.data = data;
        this.pagingInfo = pagingInfo;
    }
}
