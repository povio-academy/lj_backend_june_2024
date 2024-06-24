import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class InviteUserBodyDto {
    @ApiProperty({
        description: 'User email',
        example: 'example@gmail.com',
    })
    @IsEmail()
    readonly email: string;
}
