import { User } from "@utils/typeorm";

export type Auth = {
  user: User;
  token: string;
};

export type JwtPayload = {
  userId: number;
};
