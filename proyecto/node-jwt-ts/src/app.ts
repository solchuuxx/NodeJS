import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import authRoutes from "./routes/authRoutes";

const app = express();

//midleware
app.use(express.json());

//Routes
app.use('/auth', authRoutes)
//autenticacion


console.log("Esto esta siendo ejecutado")

export default app