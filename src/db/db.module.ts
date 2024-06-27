import { Global, Module } from '@nestjs/common';

import { PrismaModule } from '~vendor/prisma/prisma.module';
import { UserPrismaRepository } from './repositories/user.prisma.repository';
import { InvitePrismaRepository } from './repositories/invite.prisma.repository';

export const USER_DB_REPOSITORY = Symbol('UserDbRepositoryKey');
export const INVITE_DB_REPOSITORY = Symbol('InviteDbRepositoryKey');

@Global()
@Module({
    imports: [PrismaModule],
    providers: [
        { provide: USER_DB_REPOSITORY, useClass: UserPrismaRepository },
        { provide: INVITE_DB_REPOSITORY, useClass: InvitePrismaRepository },
    ],
    exports: [USER_DB_REPOSITORY, INVITE_DB_REPOSITORY],
})
export class DbModule {}
