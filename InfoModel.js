import { Schema ,model } from "mongoose";


const infoModel = new Schema(
    {
        email:{
            type:String,
            required:true,
            trim:true
        },
        name:{
            type:String,
            required:true,
            trim:true

        },
        message:{
            type:String,
            required:true,
            trim:true
        },
        
    }, {
         versionKey: false,
         timestamps:true
    } 
)

export default model('infoModel',infoModel)