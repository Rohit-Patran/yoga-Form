import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
cont DB_URI = process.env.MONGODB_URI;
//database connnection
const connection = async function()
{
    await mongoose.connect(DB_URI).then(() => {
        console.log("database successfully connected");
    }).catch((error)=>{
        console.log("error in database connection:" , error);
    })
}

export default connection;
