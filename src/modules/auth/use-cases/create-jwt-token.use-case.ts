import { Injectable } from '@nestjs/common';
import { AuthConfig } from '../auth.config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class CreateJwtTokenUseCase {
    constructor(private config: AuthConfig) {}

    private readonly secret = this.config.jwtTokenSecret;
    private readonly jwtTokenExpiresIn = this.config.jwtTokenExpiresIn;

    async execute(payload: { email: string; role: string }): Promise<string> {
        try {
            const token = jwt.sign(payload, this.secret, {
                expiresIn: this.jwtTokenExpiresIn,
                algorithm: 'HS256',
            });
            return token;
        } catch (error) {
            throw new Error('Error creating access token', { cause: error });
        }
    }
}
