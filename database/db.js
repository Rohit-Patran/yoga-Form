import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURL = process.env.MONGODB_URL;
//database connnection
const connection = async function()
{
    mongoose.set('strictQuery' , false);
    await mongoose.connect(dbURL).then(() => {
        console.log("database successfully connected");
    }).catch(()=>{
        console.log("error in database connection")
    })
}

export default connection;
