import { BaseEntity, trackChanges } from '~common/entity/base.entity';
import { IInvite } from './interfaces/invite.interface';
import { Expose } from 'class-transformer';
import { IsAlpha, IsEmail } from 'class-validator';
import { Invite, InviteStatus } from '@prisma/client';
import { randomUUID } from 'node:crypto';

export type NewInvite = Pick<IInvite, 'email' | 'idInviter'>;

export type UpdateInvite = Omit<
    Partial<NewInvite>,
    'id' | 'createdAt' | 'updatedAt'
>;

export class InviteEntity extends BaseEntity<IInvite> implements IInvite {
    @Expose()
    id: string;

    @IsEmail()
    @Expose()
    email: string;

    @Expose()
    idInviter: string;

    @Expose()
    status: InviteStatus;

    @Expose()
    isDeleted: boolean;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;

    private constructor(data: IInvite) {
        super();
        this.id = data.id;
        this.email = data.email;
        this.idInviter = data.idInviter;
        this.status = data.status;
        this.isDeleted = data.isDeleted;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    static new(data: NewInvite) {
        return new InviteEntity({
            id: randomUUID(),
            createdAt: new Date(),
            updatedAt: new Date(),
            isDeleted: false,
            status: InviteStatus.PENDING,
            ...data,
        });
    }

    update(changes: UpdateInvite) {
        return Object.assign(this, { ...changes, updatedAt: new Date() });
    }

    static toDomain(data: IInvite) {
        return trackChanges<InviteEntity>(new InviteEntity(data));
    }
}
