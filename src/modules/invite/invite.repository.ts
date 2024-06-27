import { InviteEntity } from './invite.entity';

export interface IInviteRepository {
    getById(id: string): Promise<InviteEntity | null>;

    create(data: InviteEntity): Promise<InviteEntity>;

    update(data: InviteEntity): Promise<InviteEntity>;

    delete(inviteId: string): Promise<InviteEntity>;
}
