import { Task } from '../interfaces/Task'
import taskModel from './taskSchema'

export class TaskService {
    async create(task: Task) {
        const createdTask = await taskModel.create(task)
        return createdTask
    }
}