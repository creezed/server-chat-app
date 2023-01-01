import { Strategy } from "passport-local";
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Services } from "@utils/constants";
import { IAuthService } from "@/auth/interfaces/auth.interface";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(Services.AUTH) private readonly authServices: IAuthService,
  ) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    const user = await this.authServices.validateUser({ email, password });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
