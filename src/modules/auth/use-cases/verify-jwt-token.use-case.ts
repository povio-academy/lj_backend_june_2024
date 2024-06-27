import { Injectable } from '@nestjs/common';
import { AuthConfig } from '../auth.config';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';

@Injectable()
export class VerifyJwtTokenService {
    constructor(private config: AuthConfig) {}

    execute(token: string): Promise<JwtPayload> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.config.jwtTokenSecret, (err, decoded) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(decoded as JwtPayload);
                }
            });
        });
    }
}
