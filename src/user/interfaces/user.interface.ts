import { CreateUserParams } from '../../utils/types';

export interface IUserService {
  createUser(userParams: CreateUserParams);
}
