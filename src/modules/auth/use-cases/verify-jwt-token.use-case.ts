import { Injectable } from '@nestjs/common';
import { AuthConfig } from '../auth.config';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';

@Injectable()
export class VerifyJwtTokenService {
    constructor(private config: AuthConfig) {}

    execute(token: string): Promise<JwtPayload> {
        try {
            const decoded = jwt.verify(
                token,
                this.config.jwtTokenSecret,
            ) as JwtPayload;
            return Promise.resolve(decoded);
        } catch (err) {
            throw err;
        }
    }
}
