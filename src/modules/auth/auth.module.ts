import { Global, Module } from '@nestjs/common';
import { LoginUseCase } from './use-cases/login.use-case';
import { JwtModule } from '@nestjs/jwt';
import { DbModule } from '~db/db.module';

@Global()
@Module({
    imports: [JwtModule.register({ global: true }), DbModule],
    providers: [LoginUseCase],
    exports: [LoginUseCase],
})
export class AuthModule {}
