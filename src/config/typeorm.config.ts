import { TypeOrmModuleOptions } from "@nestjs/typeorm";

import entities from "@utils/typeorm/index";

export const getTypeormConfig = async (): Promise<TypeOrmModuleOptions> => ({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_NAME,
    synchronize: true,
    entities: entities
});
