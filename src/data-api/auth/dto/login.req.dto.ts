import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsEmail, IsString } from "class-validator";

export class LoginReqDto {
  @ApiProperty()
  @Expose()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @Expose()
  @IsString()
  password!: string;
}
