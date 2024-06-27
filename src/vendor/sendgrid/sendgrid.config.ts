import { IsString } from 'class-validator';

export class SendgridConfig {
    @IsString()
    apiKey!: string;
}
