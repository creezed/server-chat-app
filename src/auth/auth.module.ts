import { Module } from "@nestjs/common";

import { Services } from "@utils/constants";
import { LocalStrategy } from "@/auth/utils/LocalStrategy";
import { AuthService } from "@/auth/auth.service";
import { UserModule } from "@/user/user.module";
import { AuthController } from "@/auth/auth.controller";

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    {
      provide: Services.AUTH,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
