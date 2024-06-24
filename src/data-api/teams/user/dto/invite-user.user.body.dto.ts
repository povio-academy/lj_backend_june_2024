import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class InviteUserBodyDto {
    @ApiProperty({ description: 'User email' })
    @IsEmail()
    readonly email: string;
}