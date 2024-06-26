import { Global, Module } from '@nestjs/common';
import { ImagesUserController } from './images.user.controller';

@Global()
@Module({
    controllers: [ImagesUserController],
})
export class ImagesUserModule {}
