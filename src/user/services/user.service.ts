import { Injectable } from '@nestjs/common';
import { IUserService } from '../interfaces/user.interface';
import { CreateUserParams } from '../../utils/types';

@Injectable()
export class UserService implements IUserService {
  createUser(userParams: CreateUserParams) {}
}
