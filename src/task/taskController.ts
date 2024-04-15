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

    async getTasks(req : Request, res: Response){
        const taskList = await this.taskService.list(req.params)
        return taskList
    }

    async getDetails(req : Request, res: Response){
        const taskDetail = await this.taskService.detail(req.params)
        return res.json(taskDetail)
    }
    
    async updateTask(req: Request, res: Response) {
        const taskUpdated = await this.taskService.updateTask(req.params, req.body);
        return res.json(taskUpdated)
    }

    async deleteTask(req: Request, res: Response) {
        const taskDeleted = await this.taskService.deleteTask(req.params);
        return res.json(taskDeleted)
    }
}
export default new TaskController();
