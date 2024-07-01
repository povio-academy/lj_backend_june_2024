import { INestApplication, UnauthorizedException } from '@nestjs/common';
import {
    newUserFixture,
    newUserFixturePassword,
    updateUserFixture,
    updateUserRoleFixture,
} from '@test/fixtures/user.fixture';
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
import e from 'express';

describe('update user - admin (e2e)', () => {
    let app: INestApplication;
    let adminAccessToken: string;
    let userAccessToken: string;

    beforeAll(async () => {
        const module = await createTestingApp({
            imports: [UserModule, AuthModule],
        });

        app = await startTestingApp(module);
        adminAccessToken = await newJwtAdminTokenFixture(app);
        userAccessToken = await newJwtUserTokenFixture(app);
    });

    afterAll(async () => {
        await stopTestingApp(app);
    });

    it('should not create user - JWT token not valid', async () => {
        const exsistingUser = await newUserFixture(app);

        const updatedUser = await updateUserRoleFixture(
            app,
            exsistingUser,
            UserRole.ADMIN,
        );

        console.log('/' + API_V1_ADMIN_PATH + '/users/' + updatedUser.id);
        console.log(exsistingUser);
        console.log(updatedUser);
        const response = await request(app.getHttpServer())
            .patch('/' + API_V1_ADMIN_PATH + '/users/' + updatedUser.id)
            .set('Authorization', 'Bearer invalid-token');

        expect(response.body.message).toBe('Unauthorized');
        expect(response.statusCode).toBe(401);
    });

    it('should not create user - user not authorized as admin, just as user', async () => {
        const exsistingUser = await newUserFixture(app);
        const updatedUser = await updateUserRoleFixture(
            app,
            exsistingUser,
            UserRole.USER,
        );

        const response = await request(app.getHttpServer())
            .patch('/' + API_V1_ADMIN_PATH + '/users/' + updatedUser.id + '/')
            .set('Authorization', 'Bearer "' + userAccessToken + '"');

        expect(response.statusCode).toBe(401);
    });

    // test.each`
    //     caseDesc        | payload
    //     ${'no payload'} | ${{}}
    // `;
});
