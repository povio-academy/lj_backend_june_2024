import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class LoginReqDto {
  @ApiProperty({
    description: "Users email",
    example: "test@mail.com"
  })
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty({
    description: "Users password",
    example: "Password123!"
  })
  @IsNotEmpty()
  @IsString()
  password!: string;
}
