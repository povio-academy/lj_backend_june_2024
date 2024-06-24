import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class InviteReqDto {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Email of invited user',
        example: 'test@mail.com',
    })
    email!: string;
}
