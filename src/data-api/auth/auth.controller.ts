import { Body, Controller, HttpCode, Injectable, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RegisterReqDto } from "./dto/register.req.dto";


@ApiTags("Auth")
@Injectable()
@Controller('/auth')
export class AuthController {
  constructor() {}

  @Post("/register")
  @HttpCode(204)
  async register(@Body() body : RegisterReqDto) {}

}