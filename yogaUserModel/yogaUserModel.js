import mongoose  from "mongoose";

const yogaUserSCHEMA = new mongoose.Schema({
    fullname : {type:String , required:true},
    age:{type:Number,required:true},
    date:{type:Date, required:true},
    amount:{type:Number , required:true},
    batch:{type:String , required:true}
},{versionKey : false} , {timestamps : false});

const USER = mongoose.model("yogaUsers" , yogaUserSCHEMA);
export { USER as default }