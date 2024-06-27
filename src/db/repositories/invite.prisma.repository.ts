import { Injectable } from '@nestjs/common';
import { InviteEntity } from '~modules/invite/invite.entity';
import { IInviteRepository } from '~modules/invite/invite.repository';
import { PrismaService } from '~vendor/prisma/prisma.service';

@Injectable()
export class InvitePrismaRepository implements IInviteRepository {
    constructor(private prisma: PrismaService) {}

    async getById(id: string) {
        const invite = await this.prisma.client.invite.findUnique({
            where: { id },
        });
        return invite ? InviteEntity.toDomain(invite) : null;
    }

    async create(data: InviteEntity) {
        const invite = await this.prisma.client.invite.create({
            data: data.toPersist('create'),
        });
        return InviteEntity.toDomain(invite);
    }

    async update(data: InviteEntity) {
        const invite = await this.prisma.client.invite.update({
            data: data.toPersist('update'),
            where: { id: data.id },
        });
        return InviteEntity.toDomain(invite);
    }

    async delete(id: string) {
        const invite = await this.prisma.client.invite.delete({
            where: { id },
        });
        return InviteEntity.toDomain(invite);
    }

    getByEmail(email: string): Promise<InviteEntity[]> {
        const invites = this.prisma.client.invite.findMany({
            where: { email },
            orderBy: { createdAt: 'desc' },
        });
        return invites.then((invites) => invites.map(InviteEntity.toDomain));
    }
}
