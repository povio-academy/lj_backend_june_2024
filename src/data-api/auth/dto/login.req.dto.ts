import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginReqDto {
    @ApiProperty({
        description: 'Users email',
        example: 'test@mail.com',
    })
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @ApiProperty({
        description: 'Users password',
        example: 'Password123!',
    })
    @IsNotEmpty()
    @IsString()
    password!: string;
}
