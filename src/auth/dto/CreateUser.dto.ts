import { ApiProperty } from "@nestjs/swagger";

import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ name: "email", nullable: false })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ name: "firstName", nullable: false })
  @IsNotEmpty()
  @MaxLength(8)
  @MinLength(4)
  firstName: string;

  @ApiProperty({ name: "lastName", nullable: false })
  @IsNotEmpty()
  @MaxLength(12)
  @MinLength(4)
  lastName: string;

  @ApiProperty({ name: "password", nullable: false })
  @IsNotEmpty()
  @MaxLength(14)
  @MinLength(6)
  password: string;
}
