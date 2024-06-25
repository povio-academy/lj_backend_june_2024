import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNotEmpty, MaxLength } from 'class-validator';
import {
    OBJECT_NAME_MAX_LENGTH,
    OBJECT_DESCRIPTION_MAX_LENGTH,
} from '~common/domain.constants';

export class CreateTeamUserBodyDto {
    @ApiProperty({ description: 'Team name', example: 'Team A' })
    @IsNotEmpty()
    @MaxLength(OBJECT_NAME_MAX_LENGTH)
    @IsString()
    readonly name: string;

    @ApiProperty({
        description: 'Team description',
        example: 'The best team in the world',
    })
    @IsOptional()
    @IsNotEmpty()
    @MaxLength(OBJECT_DESCRIPTION_MAX_LENGTH)
    @IsString()
    readonly description: string;
}
