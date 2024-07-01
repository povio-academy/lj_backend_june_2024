import { faker } from '@faker-js/faker';
import { INestApplication } from '@nestjs/common';
//import { CreateAccessTokenUseCase } from '~modules/auth/use-cases/create-access-token.use-case';
import { UpdateUser, UserEntity } from '~modules/user/user.entity';

import { IUserRepository } from '~modules/user/user.repository';
import { USER_DB_REPOSITORY } from '~db/db.module';
import { genSalt, hash } from 'bcrypt';
import { UserRole } from '~common/enums';

export const newUserFixture = async (
    app: INestApplication,
    password: string,
) => {
    const userRepository = app.get<IUserRepository>(USER_DB_REPOSITORY);

    const user = await userRepository.create(
        await UserEntity.new({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: await hash(password, await genSalt()),
        }),
    );

    return user;
};

export const updateUserFixture = async (
    app: INestApplication,
    user: UserEntity,
    updatedUser: UpdateUser,
) => {
    const userRepository = app.get<IUserRepository>(USER_DB_REPOSITORY);

    const res = await userRepository.update(await user.update(updatedUser));

    return res;
};

export const updateUserRoleFixture = async (
    app: INestApplication,
    user: UserEntity,
    role: string,
) => {
    const userRepository = app.get<IUserRepository>(USER_DB_REPOSITORY);

    const userEntity = UserEntity.toDomain(user);
    userEntity.role = UserRole[role];
    return await userRepository.update(userEntity);
};

/*
export const newUserWithAccessTokenFixture = async (
    app: INestApplication,
    data: CreateUser = {},
) => {
    const createAccessTokenUseCase = app.get(CreateAccessTokenUseCase);
    const user = await newUserFixture(app, data);

    const accessToken = createAccessTokenUseCase.execute(user);

    return { user, accessToken: `Bearer ${accessToken}` };
};
*/
