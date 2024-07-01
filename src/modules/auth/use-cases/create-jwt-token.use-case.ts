import { Injectable } from '@nestjs/common';
import { AuthConfig } from '../auth.config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class CreateJwtTokenUseCase {
    constructor(private config: AuthConfig) {}

    private readonly secret = this.config.jwtTokenSecret;
    private readonly jwtTokenExpiresIn = this.config.jwtTokenExpiresIn;

    async execute(payload: string): Promise<string> {
        try {
            const tokenPayload = {
                data: payload,
                exp: Math.floor(Date.now() / 1000) + this.jwtTokenExpiresIn,
            };

            const token = jwt.sign(payload, this.secret);

            return token;
        } catch (error) {
            throw new Error('Error creating access token', { cause: error });
        }
    }
}
