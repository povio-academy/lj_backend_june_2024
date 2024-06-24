import { Expose } from 'class-transformer';
import { randomUUID } from 'node:crypto';
import { IUser, UserRole } from './interfaces/user.interface';
import { BaseEntity, trackChanges } from '~common/entity/base.entity';
import { IsEmail } from 'class-validator';

export type NewUser = Pick<
    IUser,
    'firstName' | 'lastName' | 'email' | 'password'
>;

export type UpdateUser = Omit<
    Partial<NewUser>,
    'id' | 'createdAt' | 'updatedAt'
>;

export class UserEntity extends BaseEntity<IUser> implements IUser {
    @Expose()
    id: string;

    @Expose()
    firstName: string;

    @Expose()
    lastName: string;

    @IsEmail()
    @Expose()
    email: string;

    @Expose()
    password: string;

    @Expose()
    role: UserRole;

    @Expose()
    isDeleted: boolean;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;

    private constructor(data: IUser) {
        super();
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.password = data.password;
        this.role = data.role;
        this.isDeleted = data.isDeleted;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    static new(data: NewUser) {
        return new UserEntity({
            id: randomUUID(),
            createdAt: new Date(),
            updatedAt: new Date(),
            isDeleted: false,
            role: UserRole.USER,
            ...data,
        });
    }

    update(changes: UpdateUser) {
        return Object.assign(this, { ...changes, updatedAt: new Date() });
    }

    static toDomain(data: IUser) {
        return trackChanges<UserEntity>(new UserEntity(data));
    }
}
