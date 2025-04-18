import mongoose from "mongoose"

const dbSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    priorty:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
}, { timestamps: true });


const dbmodel = mongoose.model("dbmodel",dbSchema);

export default dbmodel;