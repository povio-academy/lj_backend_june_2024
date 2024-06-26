import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsUUID } from 'class-validator';

export class GetTransactionReportUserDto {
    @IsDateString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Start date ',
        example: '2021-01-01',
    })
    from: string;

    @IsDateString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'End date',
        example: '2021-01-31',
    })
    to: string;

    @IsUUID()
    @ApiProperty({
        description: 'Category id',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    teamId?: string;
}
