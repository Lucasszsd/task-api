import { Schema, model } from 'mongoose';
import { User } from '../interfaces/User';

const userSchema = new Schema<User>({
    id : Number,
    name : String,
    weight : Number,
    password : String,
    email : String
}, {
    timestamps: true
});

export default model('User', userSchema);