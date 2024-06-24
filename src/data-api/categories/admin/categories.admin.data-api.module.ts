import { Global, Module } from '@nestjs/common';
import { CategoriesAdminController } from './categories.admin.controller';

@Global()
@Module({
    controllers: [CategoriesAdminController],
})
export class CategoriesAdminDataApiModule {}
