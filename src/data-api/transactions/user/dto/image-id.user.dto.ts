import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class ImageIdDto {
  @ApiProperty({
    description: 'Image ID',
    example: 'c6895fef-5456-4665-aece-14c2ee1e2fe0',
  })
  @IsUUID()
  imageId?: string;

  constructor() {}
}
