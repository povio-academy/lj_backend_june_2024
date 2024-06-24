import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    IsStrongPassword,
    MaxLength,
} from 'class-validator';
import { OBJECT_NAME_MAX_LENGTH } from '~common/domain.constants';

export class RegisterReqDto {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: "New user's email", example: 'test@mail.com' })
    email!: string;

    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
    })
    @IsNotEmpty()
    @ApiProperty({
        description:
            'minLength: 8, minLowerCase: 1, minNumbers: 1, minSymbols: 1, minUppercase: 1',
        example: 'Password123!',
    })
    password!: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(OBJECT_NAME_MAX_LENGTH)
    @ApiProperty({
        description: "User's first name",
        example: 'John',
    })
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(OBJECT_NAME_MAX_LENGTH)
    @ApiProperty({
        description: "User's last name",
        example: 'Walker',
    })
    lastName!: string;
}
