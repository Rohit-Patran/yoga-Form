import express from "express";
import register from "../controllers/register.js";
const ROUTER = express.Router();

ROUTER.post('/api/register-user' , register);

export { ROUTER as default };