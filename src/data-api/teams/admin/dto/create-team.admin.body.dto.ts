import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamAdminBodyDto {
    @ApiProperty({ description: 'Team name' })
    @IsString()
    readonly name: string;

    @ApiProperty({ description: 'Team description' })
    @IsOptional()
    @IsString()
    readonly description: string;
}
