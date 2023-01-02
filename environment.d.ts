declare namespace NodeJS {
    export interface ProcessEnv {
        PORT: number;
        HOST: string;
        POSTGRES_HOST: string;
        POSTGRES_PASSWORD: string;
        POSTGRES_USER: string;
        POSTGRES_NAME: string;
        POSTGRES_PORT: number;
        COOKIE_SECRET: string;
        JWT_SECRET: string;
    }
}
