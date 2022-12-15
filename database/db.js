import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//database connnection
const connection = async function()
{
    mongoose.set('strictQuery' , false);
    await mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("database successfully connected");
    }).catch(()=>{
        console.log("error in database connection")
    })
}

export default connection;
