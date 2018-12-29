//   /lib/models/crmModel.ts
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    userName: {
        type: String,
        required: 'Enter a user name',
        unique:true     
    },
    email: {
        type: String,
        required: 'Enter a email',
        unique:true     
    },
    password: {
        type: String,  
        required: 'Enter a password',
      
    },
    role:{
        type:Number,
        default:0
    },
    created_date: {
        type: Date,
        default: Date.now
    },

    latest_date: {
        type: Date,
    }
});