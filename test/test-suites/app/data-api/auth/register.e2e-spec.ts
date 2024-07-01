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
import { OBJECT_NAME_MAX_LENGTH } from '~common/domain.constants';
import { EmailInUseUserError } from '~modules/user/user.errors';
import { API_V1 } from '~common/http/http.constant';

describe('Register endpoint (e2e)', () => {
    let app: INestApplication;
    let userRepository: IUserRepository;

    beforeAll(async () => {
        const module = await createTestingApp({
            imports: [AuthDataApiModule],
        });

        app = await startTestingApp(module);
        userRepository = app.get<IUserRepository>(USER_DB_REPOSITORY);
    });

    afterAll(async () => {
        await stopTestingApp(app);
    });

    test.each`
        caseDesc                    | payload
        ${'no payload'}             | ${{}}
        ${'firstName not string'}   | ${{ firstname: 123 }}
        ${'firstName empty'}        | ${{ firstname: '' }}
        ${'firstName more than 50'} | ${{ firstname: faker.lorem.words(OBJECT_NAME_MAX_LENGTH) }}
        ${'lastName not string'}    | ${{ firstname: 123 }}
        ${'lastName empty'}         | ${{ firstname: '' }}
        ${'lastName more than 50'}  | ${{ firstname: faker.lorem.words(OBJECT_NAME_MAX_LENGTH) }}
        ${'email not string'}       | ${{ email: 123 }}
        ${'email empty'}            | ${{ email: '' }}
        ${'password not string'}    | ${{ password: 123 }}
        ${'password empty'}         | ${{ password: '' }}
        ${'password less than 8'}   | ${{ password: 'a' }}
        ${'password not symbols'}   | ${{ password: 'ab' }}
        ${'password not lowercase'} | ${{ password: 'ABC' }}
        ${'password not uppercase'} | ${{ password: 'abc' }}
        ${'password not number'}    | ${{ password: 'abcd' }}
    `(
        'should not create user - input validation error - $caseDesc',
        async ({ caseDesc, payload }) => {
            const response = await request(app.getHttpServer())
                .post(API_V1 + '/auth/register')
                .send(payload);

            expect(response.body.details.errors).toBeDefined();

            if (caseDesc === 'no payload') {
                expect(response.body.details.errors.length).toBe(4);
            }

            expect(response.body.code).toBe(INPUT_VALIDATION_ERROR);
            expect(response.statusCode).toBe(400);
        },
    );

    it('should create a user', async () => {
        const newUser = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: 'example@gmail.com',
            password: faker.internet.password({ prefix: 'Pa1!' }),
        };

        const response = await request(app.getHttpServer())
            .post(API_V1 + '/auth/register')
            .send(newUser);

        expect(response.statusCode).toBe(204);
    });

    it('should not create user - user error - email in use', async () => {
        const newUser = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: 'example@gmail.com',
            password: faker.internet.password({ prefix: 'Pa1!' }),
        };

        const response = await request(app.getHttpServer())
            .post(API_V1 + '/auth/register')
            .send(newUser);

        expect(response.body.code).toBe(EmailInUseUserError.name);
        expect(response.statusCode).toBe(500);
    });
});
