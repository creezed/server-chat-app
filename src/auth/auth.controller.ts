import { Body, Controller, Inject, Post } from "@nestjs/common";

import { instanceToPlain } from "class-transformer";

import { CreateUserDto } from "@/auth/dto/CreateUser.dto";
import { LoginUserDto } from "@/auth/dto/LoginUser.dto";
import { IAuthService } from "@/auth/interfaces/auth.interface";
import { IUserService } from "@/user/services/user/user.interface";

import { Routes, Services } from "@utils/constants";

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private authService: IAuthService,
    @Inject(Services.USER) private userService: IUserService,
  ) {}

  @Post("register")
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return instanceToPlain(await this.authService.registration(createUserDto));
  }

  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto) {
    return instanceToPlain(await this.authService.login(loginUserDto));
  }
}
