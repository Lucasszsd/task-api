import { Task } from '../interfaces/Task'
import taskModel from './taskSchema'

export class TaskService {
    async create(task: Task) {
        const createdTask = await taskModel.create(task)
        return createdTask
    }

    async list(user : any){
        const taskList = await taskModel.findById(user)
        return taskList;
    }

    async detail(taskId : any){
        const task = await taskModel.findById(taskId)
        return task;
    }

    async updateTask(taskId : any, taskUpdated : Task){
        const task = await taskModel.findOneAndUpdate(taskId, taskUpdated)
        return task;
    }

    
    async deleteTask(taskId : any){
        const deletedTask = await taskModel.findOneAndDelete(taskId)
        return deletedTask;
    }
    

}