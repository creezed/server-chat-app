import { Injectable } from "@nestjs/common";
import { IAuthService } from "./auth.type";

@Injectable()
export class AuthService implements IAuthService {
    validateUser() {
    }
}
