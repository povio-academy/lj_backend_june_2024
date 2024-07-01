import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthAsyncCtx } from '~modules/auth/auth-async-ctx';
import { VerifyJwtTokenUseCase } from '~modules/auth/use-cases/verify-jwt-token.use-case';
import { GetUserUseCase } from '~modules/user/use-cases/get-user.use-case';

@Injectable()
export class JwtGuard implements CanActivate {
    constructor(
        private verifyJwtTokenUseCase: VerifyJwtTokenUseCase,
        private getUserUseCase: GetUserUseCase,
        private authCtx: AuthAsyncCtx,
        private readonly reflector: Reflector,
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
            const decoded = await this.verifyJwtTokenUseCase.execute(token);

            try {
                const currentUser = await this.getUserUseCase.execute(
                    decoded.email,
                );
                this.authCtx.setCurrentUser(currentUser);

                const requiredRoles = this.reflector.get<string[]>(
                    'roles',
                    context.getHandler(),
                );

                if (
                    requiredRoles &&
                    !requiredRoles.includes(currentUser.role)
                ) {
                    throw new ForbiddenException('Access denied');
                }
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
