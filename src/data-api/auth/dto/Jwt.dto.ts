import { Expose } from 'class-transformer';

export class JwtDto {
    @Expose()
    token: string;

    constructor(token: string) {
        this.token = token;
    }
}
