import { Injectable } from '@nestjs/common';
import { AuthConfig } from '../auth.config';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';

@Injectable()
export class VerifyJwtTokenUseCase {
    constructor(private config: AuthConfig) {}

    execute(token: string): Promise<{ email: string; role: string }> {
        try {
            const decoded = jwt.verify(token, this.config.jwtTokenSecret, {
                algorithms: ['HS256'],
            }) as { email: string; role: string };
            return Promise.resolve(decoded);
        } catch (err) {
            throw err;
        }
    }
}
