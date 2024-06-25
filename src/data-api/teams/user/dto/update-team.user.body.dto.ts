import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
} from 'class-validator';
import {
    OBJECT_NAME_MAX_LENGTH,
    OBJECT_DESCRIPTION_MAX_LENGTH,
} from '~common/domain.constants';

export class UpdateTeamBodyDto {
    @ApiProperty({ description: 'Team name', example: 'Team B' })
    @IsNotEmpty()
    @MaxLength(OBJECT_NAME_MAX_LENGTH)
    @IsOptional()
    @IsString()
    readonly name?: string;

    @ApiProperty({
        description: 'Team description',
        example: 'The worst team in the world!',
    })
    @IsNotEmpty()
    @MaxLength(OBJECT_DESCRIPTION_MAX_LENGTH)
    @IsOptional()
    @IsString()
    readonly description?: string;

    @ApiProperty({ description: 'Team status', example: false })
    @IsOptional()
    @IsBoolean()
    readonly isDeleted?: boolean;
}
