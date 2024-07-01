import { INestApplication } from '@nestjs/common';
import { CreateJwtTokenUseCase } from '~modules/auth/use-cases/create-jwt-token.use-case';

export const newJwtAdminTokenFixture = async (app: INestApplication) => {
    const createJwtTokenUseCase = app.get(CreateJwtTokenUseCase);

    const jwtToken = createJwtTokenUseCase.execute(
        `ADMIN|${encodeURIComponent('admin@mail.com')}`,
    );
    return jwtToken;
};

export const newJwtUserTokenFixture = async (app: INestApplication) => {
    const createJwtTokenUseCase = app.get(CreateJwtTokenUseCase);

    const jwtToken = createJwtTokenUseCase.execute(
        `USER|${encodeURIComponent('user@mail.com')}`,
    );
    return jwtToken;
};
