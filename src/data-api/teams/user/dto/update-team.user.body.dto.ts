import { ApiProperty } from '@nestjs/swagger';
import {
    ArrayNotEmpty,
    IsArray,
    IsBoolean,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
} from 'class-validator';

const MIN_LENGTH = 1;
const MAX_LENGTH = 100;

export class UpdateTeamBodyDto {
    @ApiProperty({ description: 'Team name', example: 'Team B' })
    @MinLength(MIN_LENGTH)
    @MaxLength(MAX_LENGTH)
    @IsOptional()
    @IsString()
    readonly name: string;

    @ApiProperty({
        description: 'Team description',
        example: 'The worst team in the world!',
    })
    @MinLength(MIN_LENGTH)
    @MaxLength(MAX_LENGTH)
    @IsOptional()
    @IsString()
    readonly description: string;

    @ApiProperty({ description: 'Team members', example: ['Oliver', 'Emma'] })
    @IsOptional()
    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    @MinLength(MIN_LENGTH, { each: true })
    @MaxLength(MAX_LENGTH, { each: true })
    readonly membersId: string[];

    @ApiProperty({ description: 'Team status', example: false })
    @IsOptional()
    @IsBoolean()
    readonly isDeleted: boolean;
}
