import { Global, Module } from '@nestjs/common';

import { PrismaModule } from '~vendor/prisma/prisma.module';
import { UserPrismaRepository } from './repositories/user.prisma.repository';

export const USER_DB_REPOSITORY = Symbol('UserDbRepositoryKey');

@Global()
@Module({
    imports: [PrismaModule],
    providers: [
        { provide: USER_DB_REPOSITORY, useClass: UserPrismaRepository },
    ],
    exports: [USER_DB_REPOSITORY],
})
export class DbModule {}
