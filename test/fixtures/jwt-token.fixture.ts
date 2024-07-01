import { INestApplication } from '@nestjs/common';
import { CreateJwtTokenUseCase } from '~modules/auth/use-cases/create-jwt-token.use-case';

export const newJwtAdminTokenFixture = async (
    app: INestApplication,
    email: string,
) => {
    const createJwtTokenUseCase = app.get(CreateJwtTokenUseCase);

    const jwtToken = await createJwtTokenUseCase.execute({
        email: email,
        role: 'ADMIN',
    });
    return jwtToken;
};

export const newJwtUserTokenFixture = async (
    app: INestApplication,
    email: string,
) => {
    const createJwtTokenUseCase = app.get(CreateJwtTokenUseCase);

    const jwtToken = await createJwtTokenUseCase.execute({
        email: email,
        role: 'USER',
    });
    return jwtToken;
};
