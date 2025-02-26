import dotenv from 'dotenv';
dotenv.config()
import express from 'express';

const app = express();

//midleware
app.use(express.json());

//Routes
//autenticacion


console.log("Esto esta siendo ejecutado")

export default app