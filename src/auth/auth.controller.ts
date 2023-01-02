import { Body, Controller, HttpCode, HttpStatus, Inject, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { instanceToPlain } from "class-transformer";

import { CreateUserDto } from "@/auth/dto/CreateUser.dto";
import { LoginUserDto } from "@/auth/dto/LoginUser.dto";
import { IAuthService } from "@/auth/interfaces/auth.interface";
import { IUserService } from "@/user/services/user/user.interface";

import { Routes, Services } from "@utils/constants";

@ApiTags(Routes.AUTH)
@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private authService: IAuthService,
    @Inject(Services.USER) private userService: IUserService,
  ) {}

  @ApiOperation({ summary: "Registration user" })
  @ApiResponse({ status: HttpStatus.CREATED, description: "Success registration" })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @Post("register")
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return instanceToPlain(await this.authService.registration(createUserDto));
  }

  @ApiOperation({ summary: "Login user" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success" })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: "Unauthorized" })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @HttpCode(200)
  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto) {
    return instanceToPlain(await this.authService.login(loginUserDto));
  }
}
