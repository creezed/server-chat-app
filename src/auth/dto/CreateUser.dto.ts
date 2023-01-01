import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MaxLength(8)
  @MinLength(4)
  firstName: string;

  @IsNotEmpty()
  @MaxLength(12)
  @MinLength(4)
  lastName: string;

  @IsNotEmpty()
  @MaxLength(14)
  @MinLength(6)
  password: string;
}
