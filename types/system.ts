export interface Redis {
    emulate: boolean;
    host: string;
    port: number;
    namespace: string;
}

export interface Db {
    redis: Redis;
}

export interface Cli {
    url: string;
}

export interface Crypto {
    cipherKey: string;
    algorithm: string;
    saltRounds: number;
}

export interface Session {
    secret: string;
    resave: boolean;
    saveUninitialized: boolean;
}

export interface AccessTokens {
    timeToExpiry: number;
}

export interface RefreshTokens {
    timeToExpiry: number;
}

export interface AuthorizationCodes {
    timeToExpiry: number;
}

export interface EGMSettings {
    gatewayId: string;
    egmHost: string;
    apiKey?: string;
}

export interface Plugins {
    [key: string]: { package: string; } | EGMSettings
}

export interface SystemConfig {
    db: Db;
    cli: Cli;
    crypto: Crypto;
    session: Session;
    accessTokens: AccessTokens;
    refreshTokens: RefreshTokens;
    authorizationCodes: AuthorizationCodes;
    plugins: Plugins;
}