import { Expose } from 'class-transformer';

type PageInfoProps = {
    total: number;
    page: number;
    pageSize: number;
};

export class PagingInfo {
    @Expose()
    total: number;

    @Expose()
    page: number;

    @Expose()
    pageSize: number;

    constructor({ total, page, pageSize }: PageInfoProps) {
        this.total = total;
        this.page = page;
        this.pageSize = pageSize;
    }
}
