import { ApiProperty } from "@nestjs/swagger";

import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class LoginUserDto {
  @ApiProperty({ name: "email", nullable: false })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ name: "password", nullable: false })
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(14)
  password: string;
}
