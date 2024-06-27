import { Global, Module } from '@nestjs/common';
import { LoginUseCase } from './use-cases/login.use-case';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
    imports: [JwtModule.register({ global: true })],
    providers: [LoginUseCase],
    exports: [LoginUseCase],
})
export class AuthModule {}
