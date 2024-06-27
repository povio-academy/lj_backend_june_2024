import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { InitUserFromJwtService } from '~modules/auth/use-cases/init-user-from-jwt.use-case';
import { VerifyJwtTokenService } from '~modules/auth/use-cases/verify-jwt-token.use-case';

@Injectable()
export class JwtGuard implements CanActivate {
    constructor(
        private verifyJwtTokenService: VerifyJwtTokenService,
        private initUserFromJwtService: InitUserFromJwtService,
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

        const decoded = await this.verifyJwtTokenService
            .execute(token)
            .catch((err) => {
                throw new UnauthorizedException('Invalid token', {
                    cause: err,
                });
            });

        const currentUser = await this.initUserFromJwtService.execute(
            decoded.email,
        );
        if (!currentUser) {
            throw new UnauthorizedException('User not found');
        }

        return true;
    }
}
