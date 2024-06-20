import { Global, Module } from "@nestjs/common";
import { SubcategoriesAdminController } from "./subcategories.admin.controller";

@Global()
@Module({
    controllers: [SubcategoriesAdminController],
})
export class SubcategoriesAdminDataApiModule {}