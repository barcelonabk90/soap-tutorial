// routes/route.ts

import express from 'express'
import { UserController } from '../controllers/UserController';
import { UserService } from '../services/UserService';
import { UserRepository } from '../repositories/UserRepository'

export class Routes {
    private userController: UserController;

    constructor() {
        const userRepository = new UserRepository();
        const userService = new UserService(userRepository);
        this.userController = new UserController(userService);
    }

    public configureRoutes(): express.Router {
        const router = express.Router();
        router.use('/users', this.userController.router);
        // Thêm các routes khác ở đây nếu cần
        return router;
    }
}


