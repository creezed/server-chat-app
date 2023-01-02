import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { CreateUserDto } from "@/auth/dto/CreateUser.dto";
import { LoginUserDto } from "@/auth/dto/LoginUser.dto";
import { IAuthService } from "@/auth/interfaces/auth.interface";
import { Auth, JwtPayload } from "@/auth/types";
import { IUserService } from "@/user/services/user/user.interface";

import { Services } from "@utils/constants";
import { compareHash } from "@utils/helpers";
import { ValidateUserParams } from "@utils/types";

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(Services.USER) private readonly userService: IUserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(userCredentials: ValidateUserParams) {
    const user = await this.userService.findUser({
      email: userCredentials.email,
    });

    if (!user) throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);

    const validPassword = await compareHash(userCredentials.password, user.password);

    if (!validPassword) throw new UnauthorizedException("Invalid password");

    return user;
  }

  async registration(dto: CreateUserDto): Promise<Auth> {
    const isUserExist = await this.userService.findUser({ email: dto.email });

    if (isUserExist) throw new BadRequestException("User already exist");

    const user = await this.userService.createUser(dto);
    const token = await this.generateToken({ userId: user.id });

    return {
      user: user,
      token: token,
    };
  }

  async login(dto: LoginUserDto): Promise<Auth> {
    const user = await this.validateUser(dto);

    if (!user) throw new BadRequestException("User does not exist");

    const token = await this.generateToken({ userId: user.id });

    return {
      user: user,
      token: token,
    };
  }

  async generateToken(jwtPayload: JwtPayload): Promise<string> {
    const data = {
      id: jwtPayload.userId,
    };

    return await this.jwtService.signAsync(data, { expiresIn: "31d" });
  }
}
