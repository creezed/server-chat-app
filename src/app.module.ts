import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AuthModule } from "@/auth/auth.module";
import { UserModule } from "@/user/user.module";

import { getTypeormConfig } from "@config/typeorm.config";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env`, isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: getTypeormConfig,
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
