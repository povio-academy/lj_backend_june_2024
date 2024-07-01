import { INestApplication } from '@nestjs/common';
import {
    newUserFixture,
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
import { UsersAdminModule } from '~data-api/users/admin/users.admin.module';
import { UsersAdminController } from '~data-api/users/admin/users.admin.controller';

describe('update user - admin (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const module = await createTestingApp({
            controllers: [UsersAdminController],
            imports: [UsersAdminModule, UserModule, AuthModule],
        });

        app = await startTestingApp(module);
    });

    afterAll(async () => {
        await stopTestingApp(app);
    });

    //create admin that can access this
    it('should not update user - JWT token not valid', async () => {
        const exsistingUser = await newUserFixture(app);

        const response = await request(app.getHttpServer())
            .patch('/' + API_V1_ADMIN_PATH + '/users/' + exsistingUser.id)
            .set('Authorization', `Bearer invalid-token`)
            .send({ firstName: 'newName' });

        expect(response.body.message).toBe('Invalid token');
        expect(response.statusCode).toBe(401);
    });

    it('should not create user - user not authorized as admin, just as user', async () => {
        let user = await newUserFixture(app);
        user = await updateUserRoleFixture(app, user, UserRole.USER);
        const userAccessToken = await newJwtUserTokenFixture(app, user.email);

        const exsistingUser = await newUserFixture(app);
        const updatedUser = await updateUserRoleFixture(
            app,
            exsistingUser,
            UserRole.USER,
        );

        const response = await request(app.getHttpServer())
            .patch('/' + API_V1_ADMIN_PATH + '/users/' + updatedUser.id + '/')
            .set('Authorization', 'Bearer ' + userAccessToken)
            .send({ firstName: 'newName' });

        expect(response.statusCode).toBe(403);
        expect(response.body.message).toBe('Access denied');
    });
});
