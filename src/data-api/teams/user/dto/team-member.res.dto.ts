import { UserRole } from '@prisma/client';
import { Expose } from 'class-transformer';

export class TeamMemberResDto {
    @Expose()
    firstName: string;

    @Expose()
    lastName: string;

    @Expose()
    email: string;

    @Expose()
    isAdmin: boolean;

    @Expose()
    role: UserRole;

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        isAdmin: boolean,
        role: UserRole,
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isAdmin = isAdmin;
        this.role = role;
    }
}
