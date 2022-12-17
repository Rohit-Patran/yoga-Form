import mongoose from "mongoose";

const DB_URI = process.env.MONGODB_URI;
//database connnection
const connection = async function()
{
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(String(DB_URI)).then(() => {
        console.log(`database successfully connected:${conn.connnection.host}`);
    }).catch((error)=>{
        console.log("error in database connection:" , error);
        process.exit(1);
    })
}

export default connection;
