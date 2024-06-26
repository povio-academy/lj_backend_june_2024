import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { UserDto } from './user.dto';

export class UsersAdminResDto {
    @ApiProperty({ type: () => [UserDto] })
    @Expose()
    users: UserDto[];

    constructor() {}
}
