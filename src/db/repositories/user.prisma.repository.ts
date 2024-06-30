import { Injectable } from '@nestjs/common';

import { UserEntity } from '~modules/user/user.entity';
import { IUserRepository } from '~modules/user/user.repository';

import { PrismaService } from '~vendor/prisma/prisma.service';

@Injectable()
export class UserPrismaRepository implements IUserRepository {
    constructor(private prisma: PrismaService) {}

    async getById(id: string) {
        const u = await this.prisma.client.user.findUnique({
            where: { id },
        });

        return u ? UserEntity.toDomain(u) : null;
    }

    async getByEmail(email: string): Promise<UserEntity> {
        const u = await this.prisma.client.user.findUnique({
            where: { email },
        });

        return u ? UserEntity.toDomain(u) : null;
    }

    async create(data: UserEntity) {
        const u = await this.prisma.client.user.create({
            data: data.toPersist('create'),
        });

        return UserEntity.toDomain(u);
    }

    async update(data: UserEntity) {
        const u = await this.prisma.client.user.update({
            data: data.toPersist('update'),
            where: { id: data.id },
        });

        return UserEntity.toDomain(u);
    }

    async delete(id: string) {
        const u = await this.prisma.client.user.delete({
            where: { id },
        });

        return UserEntity.toDomain(u);
    }
}
