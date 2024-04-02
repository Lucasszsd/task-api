import { User } from "./User";

export interface Task{
    id : Number,
    title : String,
    description : String,
    createdAt  : Date,
    concludedAt : Date,
    type :  String,
    status : String,
    user : {type : User},
}