import { Expose } from 'class-transformer';

export class PagingInfo {
    @Expose()
    total: number;

    @Expose()
    page: number;

    @Expose()
    pageSize: number;

    constructor(total: number, page: number, pageSize: number) {
        this.total = total;
        this.page = page;
        this.pageSize = pageSize;
    }
}
