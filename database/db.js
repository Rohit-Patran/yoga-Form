import mongoose from "mongoose";

const DB_URI = process.env.MONGODB_URI;
//database connnection
const connection = async function()
{
    mongoose.set('strictQuery', false);
    await mongoose.connect(String(DB_URI)).then((res) => {
        console.log(`database successfully connected:${res}`);
    }).catch((error)=>{
        console.log("error in database connection:" , error);
        process.exit(1);
    })
}

export default connection;
