import { INestApplication } from '@nestjs/common';
import { CreateJwtTokenUseCase } from '~modules/auth/use-cases/create-jwt-token.use-case';

export const newJwtAdminTokenFixture = async (
    app: INestApplication,
    email: string,
) => {
    const createJwtTokenUseCase = app.get(CreateJwtTokenUseCase);

    const jwtToken = createJwtTokenUseCase.execute(`ADMIN|${email}`);
    return jwtToken;
};

export const newJwtUserTokenFixture = async (
    app: INestApplication,
    email: string,
) => {
    const createJwtTokenUseCase = app.get(CreateJwtTokenUseCase);

    const jwtToken = createJwtTokenUseCase.execute(`USER|${email}`);
    return jwtToken;
};
