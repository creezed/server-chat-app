import { Inject, Injectable } from '@nestjs/common';
import { IAuthService } from './auth.type';
import { Services } from '../utils/constants';
import { IUserService } from '../user/interfaces/user.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(@Inject(Services.USER) private userService: IUserService) {}
  validateUser() {}
}
