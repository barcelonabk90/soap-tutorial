import { UserModel } from "../models/UserModel";

export class UserRepository {

    async getUsers(): Promise<Array<UserModel>> {
        const users = [
            new UserModel('user01', 'ABC', 20),
            new UserModel('user02', 'DEF', 20),
            new UserModel('user03', 'AAAA', 20),
        ];

        return users;
    }
}