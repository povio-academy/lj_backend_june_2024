import { Expose } from 'class-transformer';
import { PagingInfo } from './paging-info';

export class PagedResDto<T> {
    @Expose()
    items: T[];

    @Expose()
    pagingInfo: PagingInfo;

    constructor(items: T[], pagingInfo: PagingInfo) {
        this.items = items;
        this.pagingInfo = pagingInfo;
    }
}
