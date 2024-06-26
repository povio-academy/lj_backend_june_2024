import { UserEntity } from './user.entity';

export interface IUserRepository {
    getById(id: string): Promise<UserEntity | null>;

    create(data: UserEntity): Promise<UserEntity>;

    update(data: UserEntity): Promise<UserEntity>;

    delete(userId: string): Promise<UserEntity>;
}
