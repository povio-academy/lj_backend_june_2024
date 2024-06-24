import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class InviteUserBodyDto {
    @ApiProperty({
        description: 'User email',
        example: 'janez.novak@gmail.com',
    })
    @IsEmail()
    readonly email: string;
}
