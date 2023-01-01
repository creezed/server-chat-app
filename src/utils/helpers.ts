import * as bcrypt from "bcrypt";

export async function hashPassword(password: string) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
}

export async function compareHash(password: string, hashPassword: string) {
    return bcrypt.compare(password, hashPassword);
}
