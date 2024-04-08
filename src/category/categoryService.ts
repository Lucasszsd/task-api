import { Category } from '../interfaces/Category'
import categoryModel from './categorySchema'

export class CategoryService {
    async create(task: Category) {
        const createdTask = await categoryModel.create(task)
        return createdTask
    }
}