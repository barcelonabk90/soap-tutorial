export class UserModel {
    userId: string;
    name: string;
    age: number;

    constructor(userId: string, name: string, age: number) {
        this.userId = userId;
        this.name = name;
        this.age = age;
    }
}