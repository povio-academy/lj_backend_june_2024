import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class RegisterReqDto {

  @Expose()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email!: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password!: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  firstName!: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @ApiProperty()
  lastName!: string;
}
