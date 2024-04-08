import { Router } from 'express'
import taskController from './task/taskController'
import userController from './user/userController'
import categoryController from './category/categoryController';


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


try {
    routes.post('/category', categoryController.create);
} catch (error) {
    console.error(error)
}

try {
    routes.get('/user/:id',userController.userLogin);
} catch (error) {
    console.error(error)
}

export {
    routes
}