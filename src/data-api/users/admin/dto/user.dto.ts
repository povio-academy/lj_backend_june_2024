import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { UserRole } from '~common/enums';

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

    constructor() {}
}
