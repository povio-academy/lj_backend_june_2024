import { INestApplication } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { create } from 'domain';
import { CreateJwtTokenUseCase } from '~modules/auth/use-cases/create-jwt-token.use-case';
import { UserRole } from '~modules/user/interfaces/user.interface';

export const newJwtAdminTokenFixture = async (app: INestApplication) => {
    const createJwtTokenUseCase = app.get(CreateJwtTokenUseCase);

    const jwtToken = createJwtTokenUseCase.execute(
        `ADMIN|${encodeURIComponent('admin@mail.com')}`,
    );
    // const jwtService = app.get(JwtService);
    // //const admin = await newUserFixture(app);
    // const jwtToken = jwtService.sign({
    //     role: UserRole.ADMIN,
    //     userEmail: 'admin@mail.com',
    // });

    return jwtToken;
};

export const newJwtUserTokenFixture = async (app: INestApplication) => {
    const createJwtTokenUseCase = app.get(CreateJwtTokenUseCase);

    const jwtToken = createJwtTokenUseCase.execute(
        `USER|${encodeURIComponent('user@mail.com')}`,
    );
    // const jwtService = app.get(JwtService);
    // //const user = await newUserFixture(app);
    // const jwtToken = jwtService.sign({
    //     role: UserRole.USER,
    //     userEmail: 'user@mail.com',
    // });
    return jwtToken;
};
