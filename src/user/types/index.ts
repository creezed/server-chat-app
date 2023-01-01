export type CreateUserParams = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
};

export type FindUserParams = Partial<{
    id: number;
    email: string;
}>;
