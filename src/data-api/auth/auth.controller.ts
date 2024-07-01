import {
    BadRequestException,
    Body,
    Controller,
    HttpCode,
    Injectable,
    Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegisterReqDto } from './dto/register.req.dto';
import { CreateUserUseCase } from '~modules/user/use-cases/create-user.use-case';
import { LoginReqDto } from './dto/login.req.dto';
import { JwtDto } from './dto/Jwt.dto';
import { LoginUseCase } from '~modules/auth/use-cases/login.use-case';

@ApiTags('Auth')
@Injectable()
@Controller('/auth')
export class AuthController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
        private loginUseCase: LoginUseCase,
    ) {}

    @ApiOperation({
        summary: 'Register a new user',
    })
    @Post('/register')
    @HttpCode(204)
    async register(@Body() body: RegisterReqDto) {
        await this.createUserUseCase.execute(body);
    }

    @ApiOperation({
        summary: 'Login with an existing user',
    })
    @Post('/login')
    async login(@Body() body: LoginReqDto): Promise<JwtDto> {
        const token = await this.loginUseCase.execute(body);
        return new JwtDto(token);
    }
}
