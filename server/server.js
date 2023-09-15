import express from 'express';
import dotenv from 'dotenv'
const app = express();
const port  = 8800 || process.env.PORT;

// Database connection 
import connectDB from './config/db.js';
dotenv.config({path: './config/.env'});
connectDB();

// File configuration //Custom path
import {resolve} from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Import env file 
dotenv.config({path: resolve(__dirname, './config/.env')})

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.listen(port, () => console.log(`Server is running on port ${port}`));