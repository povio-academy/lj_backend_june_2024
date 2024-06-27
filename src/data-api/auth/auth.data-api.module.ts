import { Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from '~modules/user/user.module';
import { AuthModule } from '~modules/auth/auth.module';

@Global()
@Module({
    imports: [UserModule, AuthModule],
    controllers: [AuthController],
})
export class AuthDataApiModule {}
