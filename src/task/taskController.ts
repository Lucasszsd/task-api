import { Request, Response } from 'express'
import { TaskService } from './taskService'

class TaskController {
    private taskService: TaskService;
    constructor() {
        this.taskService = new TaskService();
        this.create = this.create.bind(this);
    }
    async create(req: Request, res: Response) {
        const task = await this.taskService.create(req.body);
        return res.json(task);
    }
}
export default new TaskController();
