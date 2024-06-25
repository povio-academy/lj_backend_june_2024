import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class UpdateTeamMemberBodyDto {
    @ApiProperty({ description: 'Team member status', example: true })
    @IsBoolean()
    isDeleted: boolean;
}
