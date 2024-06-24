import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateTeamUserBodyDto {
    @ApiProperty({ description: 'Team name' })
    @IsString()
    readonly name: string;

    @ApiProperty({ description: 'Team description' })
    @IsOptional()
    @IsString()
    readonly description: string;
}
