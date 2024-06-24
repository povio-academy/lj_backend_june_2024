import { Expose } from 'class-transformer';

export class CategoryAdminResDto {
    @Expose()
    id: string;

    @Expose()
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}
