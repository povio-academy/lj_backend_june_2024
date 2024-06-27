import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { AuthAsyncCtx } from '~modules/auth/auth-async-ctx';
import { GetUserFromDbService } from '~modules/auth/use-cases/get-user-from-db.user-case';
import { VerifyJwtTokenService } from '~modules/auth/use-cases/verify-jwt-token.use-case';

@Injectable()
export class JwtGuard implements CanActivate {
    constructor(
        private verifyJwtTokenService: VerifyJwtTokenService,
        private getUserFromDbService: GetUserFromDbService,
        private authCtx: AuthAsyncCtx,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new UnauthorizedException('Token not provided');
        }
        const [type, token] = authHeader.split(' ') ?? [];
        if (type !== 'Bearer') {
            throw new UnauthorizedException('Invalid token type');
        }
        if (!token) {
            throw new UnauthorizedException('Token not provided');
        }

        try {
            const decoded = await this.verifyJwtTokenService.execute(token);

            try {
                const currentUser = await this.getUserFromDbService.execute(
                    decoded.email,
                );
                this.authCtx.setCurrentUser(currentUser);
            } catch (err) {
                throw new UnauthorizedException('User not found', {
                    cause: err,
                });
            }
        } catch (err) {
            throw new UnauthorizedException('Invalid token', {
                cause: err,
            });
        }

        return true;
    }
}
