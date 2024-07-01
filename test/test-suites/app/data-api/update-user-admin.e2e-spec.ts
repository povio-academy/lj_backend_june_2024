import { INestApplication, UnauthorizedException } from '@nestjs/common';
import { newUserFixture } from '@test/fixtures/user.fixture';
import {
    createTestingApp,
    startTestingApp,
    stopTestingApp,
} from '@test/utils/create-testing-app.utils';
import * as request from 'supertest';
import { API_V1_ADMIN_PATH } from '~common/http/http.constant';
import { UserRole } from '~modules/user/interfaces/user.interface';
import { UserModule } from '~modules/user/user.module';
import {
    newJwtAdminTokenFixture,
    newJwtUserTokenFixture,
} from '@test/fixtures/jwt-token.fixture';
import { AuthModule } from '~modules/auth/auth.module';
import { CreateJwtTokenUseCase } from '~modules/auth/use-cases/create-jwt-token.use-case';
import { after, before } from 'node:test';
import { UsersAdminModule } from '~data-api/users/admin/users.admin.module';

describe('update user - admin (e2e)', () => {
    let app: INestApplication;
    let adminAccessToken: string;
    let userAccessToken: string;

    beforeAll(async () => {
        const module = await createTestingApp({
            imports: [UsersAdminModule],
        });

        app = await startTestingApp(module);
    });
    afterAll(async () => {});

    // beforeAll(async () => {
    //     const module = await createTestingApp({
    //         imports: [UserModule, AuthModule],
    //     });

    //     app = await startTestingApp(module);
    //     const createJwtTokenUseCase = app.get(CreateJwtTokenUseCase);
    //     adminAccessToken = await newJwtAdminTokenFixture(app);
    //     userAccessToken = await newJwtUserTokenFixture(app);
    // });

    // afterAll(async () => {
    //     await stopTestingApp(app);
    // });

    it('should not create user - JWT token not valid', async () => {
        const exsistingUser = await newUserFixture(app);
        exsistingUser.role = UserRole.USER;

        const response = await request(app.getHttpServer())
            .patch(`/${API_V1_ADMIN_PATH}/users/${exsistingUser.id}`)
            .set('Authorization', 'Bearer invalid-token');

        expect(response).toBe(UnauthorizedException);
    });

    // it('should not create user - user not authorized as admin, just as user', async () => {
    //     const exsistingUser = await newUserFixture(app);
    //     exsistingUser.role = UserRole.USER;

    //     const response = await request(app.getHttpServer()).patch(
    //         `/${API_V1_ADMIN_PATH}/users/${exsistingUser.id}`,
    //     );

    //     expect(response).toBe(ForbiddenException);
    // });

    // test.each`
    //     caseDesc        | payload
    //     ${'no payload'} | ${{}}
    // `;
});
