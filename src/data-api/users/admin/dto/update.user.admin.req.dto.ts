import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
    IsArray,
    IsBoolean,
    IsEmail,
    IsOptional,
    IsString,
    IsStrongPassword,
} from 'class-validator';

import { UserRole } from '~common/enums';

export class UpdateUserAdminReqDto {
    @ApiProperty({ description: 'Users new first name', example: 'John' })
    @IsOptional()
    @IsString()
    firstName?: string;

    @ApiProperty({
        description: 'Users new last name',
        example: 'Walker',
    })
    @IsOptional()
    @IsString()
    lastName?: string;

    @ApiProperty({
        description: 'Users new email',
        example: 'test123@mail.com',
    })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({
        description:
            'New password -> minLength: 8, minLowerCase: 1, minNumbers: 1, minSymbols: 1, minUppercase: 1',
        example: 'Password123!',
    })
    @IsOptional()
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
    })
    password?: string;

    @ApiProperty({
        description: 'Users new role',
        example: UserRole.DENNIED,
    })
    @IsOptional()
    role?: UserRole;

    @ApiProperty({
        description: 'Users modified transactions',
        example: ['123e4567-e89b-12d3-a456-426614174000'],
    })
    @IsOptional()
    @IsString({ each: true })
    transactions?: string[];

    @ApiProperty({
        description: 'User soft deleted or undeleted',
        example: false,
    })
    @IsOptional()
    @IsBoolean()
    isDeleted?: boolean;
}
