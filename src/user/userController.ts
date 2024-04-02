import { Request, Response } from 'express'
import { UserService } from './userService'

class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
        this.create = this.create.bind(this);
    }
    async create(req: Request, res: Response) {
        const user = await this.userService.create(req.body);
        return res.json(user);
    }
}
export default new UserController();
