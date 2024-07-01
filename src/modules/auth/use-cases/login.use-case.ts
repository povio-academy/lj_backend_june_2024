import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginReqDto } from '~data-api/auth/dto/login.req.dto';
import { USER_DB_REPOSITORY } from '~db/db.module';
import { IUserRepository } from '~modules/user/user.repository';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthConfig } from '../auth.config';
import { UserRole } from '~common/enums';
import {
    UnknownEmailAuthError,
    UserStatusDeniedAuthError,
    UserStatusPendingAuthError,
    WrongPasswordAuthError,
} from '../auth.errors';

@Injectable()
export class LoginUseCase {
    constructor(
        @Inject(USER_DB_REPOSITORY) private userRepository: IUserRepository,
        private jwtService: JwtService,
        private authConfig: AuthConfig,
    ) {}

    async execute({ email, password }: LoginReqDto): Promise<string> {
        const user = await this.userRepository.getByEmail(email);

        if (!user) {
            throw new UnknownEmailAuthError();
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new WrongPasswordAuthError();
        }

        if (user.role == UserRole.PENDING) {
            throw new UserStatusPendingAuthError();
        }

        if (user.role == UserRole.DENIED) {
            throw new UserStatusDeniedAuthError();
        }
        const payload = {
            userId: user.id,
            role: user.role,
        };

        const token = await this.jwtService.signAsync(payload, {
            secret: this.authConfig.jwtTokenSecret,
        });

        return token;
    }
}
