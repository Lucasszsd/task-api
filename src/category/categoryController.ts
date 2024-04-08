import { Request, Response } from 'express'
import { CategoryService } from './categoryService'

class CategoryController {
    private categoryService: CategoryService;
    constructor() {
        this.categoryService = new CategoryService();
        this.create = this.create.bind(this);
    }
    async create(req: Request, res: Response) {
        const task = await this.categoryService.create(req.body);
        return res.json(task);
    }
}
export default new CategoryController();
