import { ApiProperty } from '@nestjs/swagger';
import {
    IsArray,
    IsBoolean,
    IsEmail,
    IsString,
    IsStrongPassword,
} from 'class-validator';
import { UserRole } from '~common/enums';

export class UpdateUserAdminReqDto {
    @ApiProperty({ description: 'Users new first name', example: 'John' })
    @IsString()
    firstName?: string;

    @ApiProperty({
        description: 'Users new last name',
        example: 'Walker',
    })
    @IsString()
    lastName?: string;

    @ApiProperty({
        description: 'Users new email',
        example: 'test123@mail.com',
    })
    @IsEmail()
    email?: string;

    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
    })
    @ApiProperty({
        description:
            'New password -> minLength: 8, minLowerCase: 1, minNumbers: 1, minSymbols: 1, minUppercase: 1',
        example: 'Password123!',
    })
    @IsStrongPassword()
    password?: string;

    @ApiProperty({
        description: 'Users new role',
        example: UserRole.DENNIED,
    })
    role?: UserRole;

    //transactions array
    @ApiProperty({
        description: 'Users modified transactions',
        example: ['123e4567-e89b-12d3-a456-426614174000'],
    })
    @IsArray()
    transactions?: [string];

    @ApiProperty({
        description: 'User soft deleted or undeleted',
        example: false,
    })
    @IsBoolean()
    isDeleted?: boolean;
}
