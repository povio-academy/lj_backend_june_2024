import { INestApplication, Inject } from '@nestjs/common';
import * as request from 'supertest';
import {
    createTestingApp,
    startTestingApp,
    stopTestingApp,
} from '../../utils/create-testing-app.utils';
import { INPUT_VALIDATION_ERROR } from '~common/error/validation.error';
import { AuthDataApiModule } from '~data-api/auth/auth.data-api.module';
import { AuthController } from '~data-api/auth/auth.controller';
import { LoginReqDto } from '~data-api/auth/dto/login.req.dto';

describe('AuthController (e2e)', () => {
    let app: INestApplication;
    let controller: AuthController;

    beforeAll(async () => {
        const module = await createTestingApp({
            imports: [AuthDataApiModule],
        });

        app = await startTestingApp(module);
        controller = app.get(AuthController);
    });

    afterAll(async () => {
        await stopTestingApp(app);
    });

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
                .post('/auth/login')
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
            .post('/auth/login')
            .send(dto);

        expect(response.body.message).toBe(
            'Invalid credentials: invalid email',
        );
        expect(response.statusCode).toBe(401);
    });

    //wrong password
    it('should not login the user - passwords dont match', async () => {
        const dto: LoginReqDto = {
            email: 'example@mail.com',
            password: 'Password123',
        };

        const response = await request(app.getHttpServer())
            .post('/auth/login')
            .send(dto);

        expect(response.body.message).toBe(
            'Invalid credentials: invalid password',
        );
        expect(response.statusCode).toBe(401);
    });

    //wrong role
    it('should not login the user - role is PENDING', async () => {
        const dto: LoginReqDto = {
            email: 'pendingtest@mail.com',
            password: 'Password123!',
        };

        const response = await request(app.getHttpServer())
            .post('/auth/login')
            .send(dto);

        expect(response.body.message).toBe(
            'Invalid role of a user, status: PENDING',
        );
        expect(response.statusCode).toBe(401);
    });

    it('should not login the user - role is DENIED', async () => {
        const dto: LoginReqDto = {
            email: 'deniedtest@mail.com',
            password: 'Password123!',
        };

        const response = await request(app.getHttpServer())
            .post('/auth/login')
            .send(dto);

        expect(response.body.message).toBe(
            'Invalid role of a user, status: DENIED',
        );
        expect(response.statusCode).toBe(401);
    });

    //success return token
    it('should login the user - return a token', async () => {
        const dto: LoginReqDto = {
            email: 'example@mail.com',
            password: 'Password123!',
        };

        const response = await request(app.getHttpServer())
            .post('/auth/login')
            .send(dto);

        //token time

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('token');
        expect(response.body.token);
    });
});
