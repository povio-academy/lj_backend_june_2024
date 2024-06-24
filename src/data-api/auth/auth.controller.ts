import { Body, Controller, HttpCode, Injectable, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegisterReqDto } from './dto/register.req.dto';
import { CreateUserUseCase } from '~modules/user/use-cases/create-user.use-case';

@ApiTags('Auth')
@Injectable()
@Controller('/auth')
export class AuthController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    @Post('/register')
    @HttpCode(204)
    async register(@Body() body: RegisterReqDto) {
        await this.createUserUseCase.execute(body);
    }
}
