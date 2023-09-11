// controllers/userController.ts

import express, { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { convertUsersToSOAPMessage } from '../helpers/UserHelper';

export class UserController {
    private userService: UserService;
    public router = express.Router();

    constructor(userService: UserService) {
        this.userService = userService;
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.getUsers.bind(this));  // Chỉ cần '/' vì khi sử dụng trong routes, chúng ta đã định nghĩa '/users' rồi.
    }

    private async getUsers(req: Request, res: Response) {
        try {
            const users = await this.userService.fetchUsers();
            const soapMessage = convertUsersToSOAPMessage(users);
            res.set('Content-Type', 'text/xml');
            res.send(soapMessage);
        } catch (error) {
            res.status(500).send('Internal server error');
        }
    }
}
