import { Body, Controller, Get, Inject, Post } from "@nestjs/common";

import { Routes, Services } from "@utils/constants";

import { instanceToPlain } from "class-transformer";
import { IUserService } from "@/user/services/user/user.interface";
import { IAuthService } from "@/auth/interfaces/auth.interface";
import { CreateUserDto } from "@/auth/dto/CreateUser.dto";
import { LoginUserDto } from "@/auth/dto/LoginUser.dto";


@Controller(Routes.AUTH)

export class AuthController {
  constructor(
    @Inject(Services.AUTH) private authService: IAuthService,
    @Inject(Services.USER) private userService: IUserService,
  ) {}

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return instanceToPlain(await this.userService.createUser(createUserDto));
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {}

  @Get('status')
  status() {}

  @Get('logout')
  logout() {}
}
