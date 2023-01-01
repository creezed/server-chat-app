import { ValidationPipe, VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import * as session from "express-session";
import * as passport from "passport";
import "reflect-metadata";

import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const { PORT, COOKIE_SECRET } = process.env;
    app.setGlobalPrefix("api");
    app.enableVersioning({
        type: VersioningType.URI,
        defaultVersion: "1"
    });
    app.useGlobalPipes(new ValidationPipe());

    app.use(
        session({
            secret: COOKIE_SECRET,
            saveUninitialized: true,
            resave: true,
            cookie: {
                maxAge: 3600000 * 24 // 1 day
            }
        })
    );

    app.use(passport.initialize());
    app.use(passport.session());

    try {
        await app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
}
bootstrap();
