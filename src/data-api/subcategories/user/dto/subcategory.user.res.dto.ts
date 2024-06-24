import { Expose } from 'class-transformer';

export class SubcategoryUserResDto {
    @Expose()
    id: string;

    @Expose()
    name: string;

    @Expose()
    categoryId: string;

    constructor(id: string, name: string, categoryId: string) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
    }
}
