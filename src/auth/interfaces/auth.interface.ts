import { ValidateUserParams } from "@utils/types";

export interface IAuthService {
    validateUser(userCredentials: ValidateUserParams);
}
