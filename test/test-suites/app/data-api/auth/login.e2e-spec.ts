import { faker } from '@faker-js/faker';
import { INestApplication } from '@nestjs/common';
import {
    createTestingApp,
    startTestingApp,
    stopTestingApp,
} from '@test/utils/create-testing-app.utils';
import * as request from 'supertest';
import { INPUT_VALIDATION_ERROR } from '~common/error/validation.error';
import { AuthDataApiModule } from '~data-api/auth/auth.data-api.module';
import { IUserRepository } from '~modules/user/user.repository';
import { USER_DB_REPOSITORY } from '~db/db.module';
import { LoginReqDto } from '~data-api/auth/dto/login.req.dto';
import {
    newUserFixture,
    updateUserRoleFixture,
} from '@test/fixtures/user.fixture';
import { AuthController } from '~data-api/auth/auth.controller';
import {
    UnknownEmailAuthError,
    UserStatusDeniedAuthError,
    UserStatusPendingAuthError,
    WrongPasswordAuthError,
} from '~modules/auth/auth.errors';
import { UserRole } from '@prisma/client';
import { API_V1 } from '~common/http/http.constant';

describe('Login endpoint (e2e)', () => {
    let app: INestApplication;
    let userRepository: IUserRepository;
    let controller: AuthController;

    beforeAll(async () => {
        const module = await createTestingApp({
            imports: [AuthDataApiModule],
        });

        app = await startTestingApp(module);
        controller = app.get(AuthController);
        userRepository = app.get<IUserRepository>(USER_DB_REPOSITORY);
    });

    afterAll(async () => {
        await stopTestingApp(app);
    });

    //moje
    it('should be defined', async () => {
        expect(controller).toBeDefined();
    });

    test.each`
        caseDesc                 | payload
        ${'no payload'}          | ${{}}
        ${'email not string'}    | ${{ email: 123 }}
        ${'email is empty'}      | ${{ email: '' }}
        ${'password empty'}      | ${{ password: '' }}
        ${'password not string'} | ${{ password: 123 }}
    `(
        'should not login the user - invalid credentials error - $caseDesc',
        async ({ caseDesc, payload }) => {
            const response = await request(app.getHttpServer())
                .post(API_V1 + '/auth/login')
                .send(payload);

            expect(response.body.code).toBe(INPUT_VALIDATION_ERROR);
            expect(response.statusCode).toBe(400);
        },
    );

    //email not found
    it('should not login the user - email not found', async () => {
        const dto: LoginReqDto = {
            email: 'examp@mail.com',
            password: 'Password123!',
        };

        const response = await request(app.getHttpServer())
            .post(API_V1 + '/auth/login')
            .send(dto);

        expect(response.body.code).toBe(UnknownEmailAuthError.name);
        //expect(response.statusCode).toBe(401);
    });

    //wrong password
    it('should not login the user - passwords dont match', async () => {
        const password = faker.internet.password();
        const user = await newUserFixture(app, password);

        const dto: LoginReqDto = {
            email: user.email,
            password: 'Password123!!!',
        };
        const response = await request(app.getHttpServer())
            .post(API_V1 + '/auth/login')
            .send(dto);

        expect(response.body.code).toBe(WrongPasswordAuthError.name);
        //expect(response.statusCode).toBe(401);
    });

    //wrong role
    it('should not login the user - role is PENDING', async () => {
        //create a password
        const password = faker.internet.password();
        //set user
        const user = await newUserFixture(app, password);
        //send the unhashed version of password
        const dto: LoginReqDto = {
            email: user.email,
            password: password,
        };

        const response = await request(app.getHttpServer())
            .post(API_V1 + '/auth/login')
            .send(dto);

        expect(response.body.code).toBe(UserStatusPendingAuthError.name);
        //expect(response.statusCode).toBe(401);
    });

    it('should not login the user - role is DENIED', async () => {
        const password = faker.internet.password();
        let user = await newUserFixture(app, password);
        const dto: LoginReqDto = {
            email: user.email,
            password: password,
        };

        user = await updateUserRoleFixture(app, user, UserRole.DENIED);

        const response = await request(app.getHttpServer())
            .post(API_V1 + '/auth/login')
            .send(dto);

        expect(response.body.code).toBe(UserStatusDeniedAuthError.name);
        //expect(response.statusCode).toBe(401);
    });

    //success return token
    it('should login the user - return a token', async () => {
        const password = faker.internet.password();
        let user = await newUserFixture(app, password);

        user = await updateUserRoleFixture(app, user, UserRole.USER);

        const dto: LoginReqDto = {
            email: user.email,
            password: password,
        };
        const response = await request(app.getHttpServer())
            .post(API_V1 + '/auth/login')
            .send(dto);

        //expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('token');
        expect(response.body.token);
    });
});
