// services/userService.ts

import { UserRepository } from '../repositories/UserRepository';

export class UserService {

    constructor(private userRepository: UserRepository) {}

    async fetchUsers() {
        return this.userRepository.getUsers();
    }
}
