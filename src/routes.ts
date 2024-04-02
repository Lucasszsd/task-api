import { Router } from 'express'
import taskController from './task/taskController'
import userController from './user/userController'


const routes = Router()

try {
    routes.post('/task', taskController.create);
} catch (error) {
    console.error(error)
}

try {
    routes.post('/user', userController.create);
} catch (error) {
    console.error(error)
}

export {
    routes
}