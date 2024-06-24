import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateTeamUserBodyDto {
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
