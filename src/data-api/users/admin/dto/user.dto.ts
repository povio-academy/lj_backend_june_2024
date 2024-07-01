import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { Expose } from 'class-transformer';
import { UserEntity } from '~modules/user/user.entity';

export class UserDto {
    @Expose()
    @ApiProperty({ description: 'Users first name', example: 'John' })
    firstName!: string;

    @Expose()
    @ApiProperty({
        description: 'Users last name',
        example: 'Walker',
    })
    lastName!: string;

    @Expose()
    @ApiProperty({
        description: 'Users email',
        example: 'test@mail.com',
    })
    email!: string;

    @Expose()
    @ApiProperty({
        description: 'User role',
        example: UserRole.USER,
    })
    role!: UserRole;

    @Expose()
    @ApiProperty({
        description: 'Is user soft deleted',
        example: 'false',
    })
    isDeleted!: boolean;

    constructor(user: UserEntity) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.role = user.role;
        this.isDeleted = user.isDeleted;
    }
}
