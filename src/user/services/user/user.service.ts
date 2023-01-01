import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import { InjectRepository } from "@nestjs/typeorm";
import { User } from "@utils/typeorm";
import { Repository } from "typeorm";
import { hashPassword } from "@utils/helpers";
import { CreateUserParams, FindUserParams } from "@/user/types";
import { IUserService } from "@/user/services/user/user.interface";


@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async createUser(userParams: CreateUserParams) {
    const findUser = await this.userRepository.findOneBy({
      email: userParams.email,
    });

    console.log({ ...userParams });

    if (findUser)
      throw new HttpException('User already exists', HttpStatus.CONFLICT);

    const hashedPassword = await hashPassword(userParams.password);
    const newUser = this.userRepository.create({
      ...userParams,
      password: hashedPassword,
    });
    return this.userRepository.save(newUser);
  }

  async findUser(findUserParams: FindUserParams): Promise<User> {
    return this.userRepository.findOneBy(findUserParams);
  }
}
