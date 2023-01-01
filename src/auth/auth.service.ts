import { Services } from "@utils/constants";
import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";

import { IAuthService } from "@/auth/interfaces/auth.interface";
import { IUserService } from "@/user/services/user/user.interface";

import { ValidateUserParams } from "@utils/types";
import { compareHash } from "@utils/helpers";


@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(Services.USER) private readonly userService: IUserService,
  ) {}
  async validateUser(userCredentials: ValidateUserParams) {
    const user = await this.userService.findUser({
      email: userCredentials.email,
    });

    if (!user)
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);

    const validPassword = compareHash(userCredentials.password, user.password);

    if (!validPassword) {
    }
  }
}
