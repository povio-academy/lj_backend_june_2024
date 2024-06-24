import { Global, Module } from '@nestjs/common';
import { CategoriesUserController } from './categories.user.controller';

@Global()
@Module({
    controllers: [CategoriesUserController],
})
export class CategoriesUserDataApiModule {}
