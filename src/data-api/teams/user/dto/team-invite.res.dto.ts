import { Expose } from 'class-transformer';

export class TeamInviteResDto {
    @Expose()
    id: string;

    @Expose()
    inviter: string;

    @Expose()
    email: string;

    @Expose()
    isDeleted: boolean;

    @Expose()
    createdAt: Date;

    constructor(
        id: string,
        inviter: string,
        email: string,
        isDeleted: boolean,
        createdAt: Date,
    ) {
        this.id = id;
        this.inviter = inviter;
        this.email = email;
        this.isDeleted = isDeleted;
        this.createdAt = createdAt;
    }
}
