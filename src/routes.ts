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
try {
    routes.get('/listTask/:id',taskController.getTasks);
} catch (error) {
    console.error(error)
}
try {
    routes.get('/getDetails/:id',taskController.getDetails);
} catch (error) {
    console.error(error)
}

try {
    routes.put('/updateTask/:id',taskController.updateTask);
} catch (error) {
    console.error(error)
}
try {
    routes.delete('/deleteTask/:id',taskController.deleteTask);
} catch (error) {
    console.error(error)
}


try {
    routes.get('/allCategories',categoryController.getCategories);
} catch (error) {
    console.error(error)
}

try {
    routes.put('/updateCategory',categoryController.updateCategory);
} catch (error) {
    console.error(error)
}





export {
    routes
}