import { Category } from '../interfaces/Category'
import categoryModel from './categorySchema'

export class CategoryService {
    async create(task: Category) {
        const createdTask = await categoryModel.create(task)
        return createdTask
    }

    async getCategories() {
        const categories = await categoryModel.find()
        return categories
    }
    async getCategoriesDetail(id : any) {
        const categories = await categoryModel.findById(id)
        return categories
    }

    async updateCategory(id : any, category:Category) {
        const updatedCategory = await categoryModel.findOneAndUpdate(id,category)
        return updatedCategory
    }
}