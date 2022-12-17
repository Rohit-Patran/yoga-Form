// import important packages
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connection from './database/db.js';
import ROUTER from "./routes/routes.js";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//environment variables setup
dotenv.config();
const PORT = process.env.PORT || 5000;

//express App setup
const APP = express();

//setup middlewares
APP.use(cors());
APP.use(express.json());
APP.use(ROUTER);

//url routing for serving frontend part
APP.use(express.static(path.join(__dirname , "./client/build")));
APP.get('*' , (request , response) => {
    response.sendFile(path.join(__dirname , "./client/build/index.html") , (error) => {
        response.status(500).send(error);
    });
});

//database connection
connection().then(() => {
    //listening to port after connection
    APP.listen(PORT,() => {
        console.log(`backend successfully running at ${PORT}`);
    });
});
