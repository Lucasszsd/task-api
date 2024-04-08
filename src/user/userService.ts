import { User } from '../interfaces/User'
import userModel from './userSchema'

export class UserService {
    async create(user  : User) {
        const createdUser = await userModel.create(user)
        return createdUser
    }

    async userLogin(id : any){
        const userCredentialsOk = await userModel.findById(id);
        return  userCredentialsOk;
    }
}