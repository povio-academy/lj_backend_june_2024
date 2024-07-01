import { Global, Module } from '@nestjs/common';
import { LoginUseCase } from './use-cases/login.use-case';
import { JwtModule } from '@nestjs/jwt';
import { DbModule } from '~db/db.module';
import { VerifyJwtTokenUseCase } from './use-cases/verify-jwt-token.use-case';
import { CreateJwtTokenUseCase } from './use-cases/create-jwt-token.use-case';

@Global()
@Module({
    imports: [JwtModule.register({ global: true }), DbModule],
    providers: [LoginUseCase, VerifyJwtTokenUseCase, CreateJwtTokenUseCase],
    exports: [LoginUseCase, VerifyJwtTokenUseCase, CreateJwtTokenUseCase],
})
export class AuthModule {}
