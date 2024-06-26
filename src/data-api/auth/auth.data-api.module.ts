import { Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from '~modules/user/user.module';

@Global()
@Module({
    imports: [UserModule],
    controllers: [AuthController],
})
export class AuthDataApiModule {}
