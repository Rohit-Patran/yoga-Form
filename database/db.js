import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURL = process.env.mongoDB_URL;
//database connnection
const connection = function()
{
    mongoose.set('strictQuery' , false);
    mongoose.connect(dbURL).then(() => {
        console.log("database successfully connected");
    }).catch(()=>{
        console.log("error in database connection")
    })
}

export default connection;