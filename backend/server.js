import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';

import path from 'path';
import {fileURLToPath} from 'url';
import resumeRoutes from './routes/resumeRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;

app.use(cors())

// CONNECT TO MONGODB
connectDB();

// MIDDLEWARE
app.use(express.json())

app.use('/api/auth', userRoutes)
app.use('/api/resumes', resumeRoutes)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
setheaders: (res, _path) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:5173')
}

//ROUTER

app.get('/', (req, res) => {
    res.send('APP WORKING')
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})