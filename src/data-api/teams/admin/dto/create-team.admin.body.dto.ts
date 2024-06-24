import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamAdminBodyDto {
    @ApiProperty({ description: 'Team name', example: 'Team A' })
    @IsString()
    readonly name: string;

    @ApiProperty({
        description: 'Team description',
        example: 'The best team in the world',
    })
    @IsOptional()
    @IsString()
    readonly description: string;
}
