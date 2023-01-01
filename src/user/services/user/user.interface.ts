import { CreateUserParams, FindUserParams } from "@/user/types";

import { User } from "@utils/typeorm";

export interface IUserService {
    createUser(userParams: CreateUserParams): Promise<User>;
    findUser(findUserParams: FindUserParams): Promise<User>;
}
