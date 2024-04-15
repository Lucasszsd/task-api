import { Request, Response } from 'express'
import { CategoryService } from './categoryService'

class CategoryController {
    private categoryService: CategoryService;
    constructor() {
        this.categoryService = new CategoryService();
        this.create = this.create.bind(this);
    }
    async create(req: Request, res: Response) {
        const category = await this.categoryService.create(req.body);
        return res.json(category);
    }
    async getCategories(res: Response) {
        const categories = await this.categoryService.getCategories();
        return res.json(categories);
    }
    async getCategoriesDetails(req:Request,res: Response) {
        const categoriesDetail = await this.categoryService.getCategoriesDetail(req.params);
        return res.json(categoriesDetail);
    }
    async updateCategory(req:Request,res: Response) {
        const updatedCategory = await this.categoryService.updateCategory(req.params, req.body);
        return res.json(updatedCategory);
    }
}
export default new CategoryController();
