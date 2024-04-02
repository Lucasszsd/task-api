import { Schema, model } from 'mongoose'


const taskSchema = new Schema({
    id : Number,
    title : String,
    description : String,
    createdAt  : Date,
    concludedAt : Date,
    type :  String,
    status : String,
    user : { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true
})
export default model('Tasks', taskSchema)