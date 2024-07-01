import { INestApplication } from '@nestjs/common';
import { TestingModule } from '@nestjs/testing';
import {
    createTestingApp,
    startTestingApp,
    stopTestingApp,
} from '@test/utils/create-testing-app.utils';
import * as request from 'supertest';
import { API_V1_ADMIN_PATH } from '~common/http/http.constant';
import { UsersAdminController } from '~data-api/users/admin/users.admin.controller';
import {
    DbModule,
    INVITE_DB_REPOSITORY,
    USER_DB_REPOSITORY,
} from '~db/db.module';
import { IInviteRepository } from '~modules/invite/invite.repository';
import { EmailService } from '~modules/notification/email/email.service';
import { EMAIL_PROVIDER_SERVICE } from '~modules/notification/email/interface/email-provider.interface';
import { NotificationModule } from '~modules/notification/notification.module';
import { InviteUserUseCase } from '~modules/user/use-cases/invite-user.use-case';
import { IUserRepository } from '~modules/user/user.repository';

describe('AppInviteController (e2e)', () => {
    let testingApp: INestApplication;
    let userRepository: IUserRepository;
    let inviteRepository: IInviteRepository;
    let emailService: EmailService;
    const accessToken: string = 'Bearer ' + 'fake-access-token';

    beforeAll(async () => {
        const module = await createTestingApp({
            imports: [NotificationModule, DbModule],
            controllers: [UsersAdminController],
            providers: [InviteUserUseCase],
        });

        testingApp = await startTestingApp(module);
        userRepository = testingApp.get<IUserRepository>(USER_DB_REPOSITORY);
        inviteRepository =
            testingApp.get<IInviteRepository>(INVITE_DB_REPOSITORY);
        emailService = testingApp.get<EmailService>(EMAIL_PROVIDER_SERVICE);
    });

    afterAll(async () => {
        await stopTestingApp(testingApp);
    });

    it('should not invite a user - invalid auth', async () => {
        const response = await request(testingApp.getHttpServer())
            .post('/' + API_V1_ADMIN_PATH + '/users/invite')
            .send({
                email: 'john.doe@mail.com',
            });
        expect(response.statusCode).toBe(401);
    });

    test.each`
        caseDesc           | payload
        ${'missing email'} | ${{}}
        ${'empty email'}   | ${{ email: '' }}
        ${'invalid email'} | ${{ email: 'invalid-email' }}
    `('should not invite a user - $caseDesc', async ({ payload }) => {
        const response = await request(testingApp.getHttpServer())
            .post('/' + API_V1_ADMIN_PATH + 'users/invite')
            .send(payload)
            .set('Authorization', accessToken);
        expect(response.body).toBeDefined();
    });
});
