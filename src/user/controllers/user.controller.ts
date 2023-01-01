import { Controller, Inject } from '@nestjs/common';
import { Routes, Services } from '../../utils/constants';
import { IUserService } from '../interfaces/user.interface';

@Controller(Routes.USER)
export class UserController {
  constructor(@Inject(Services.USER) private userService: IUserService) {}
}
