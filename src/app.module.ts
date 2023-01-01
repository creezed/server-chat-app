import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "@/auth/auth.module";
import { UserModule } from "@/user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getTypeormConfig } from "@config/typeorm.config";
import { PassportModule } from "@nestjs/passport";


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    TypeOrmModule.forRootAsync({
      useFactory: getTypeormConfig,
    }),
    PassportModule.register({ session: true }),
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
