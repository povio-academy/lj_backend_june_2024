import { Global, Module } from '@nestjs/common';
import { SubcategoriesUserController } from './subcategories.user.controller';

@Global()
@Module({
    controllers: [SubcategoriesUserController],
})
export class SubcategoriesUserDataApiModule {}
