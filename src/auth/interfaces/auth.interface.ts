import { CreateUserDto } from "@/auth/dto/CreateUser.dto";
import { LoginUserDto } from "@/auth/dto/LoginUser.dto";
import { Auth, JwtPayload } from "@/auth/types";

import { ValidateUserParams } from "@utils/types";

export interface IAuthService {
  validateUser(userCredentials: ValidateUserParams);
  login(dto: LoginUserDto): Promise<Auth>;
  registration(dto: CreateUserDto): Promise<Auth>;
  generateToken(jwtPayload: JwtPayload): Promise<string>;
}
