import { Expose } from 'class-transformer';

export class TeamMemberResDto {
    @Expose()
    id: string;

    @Expose()
    firstName: string;

    @Expose()
    lastName: string;

    @Expose()
    email: string;

    @Expose()
    isAdmin: boolean;

    constructor(
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        isAdmin: boolean,
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isAdmin = isAdmin;
    }
}
