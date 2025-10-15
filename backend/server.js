import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = 4000;

app.use(cors())

// CONNECT TO MONGODB
connectDB();

// MIDDLEWARE
app.use(express.json())

app.use('/api/auth', userRoutes)

//ROUTER

app.get('/', (req, res) => {
    res.send('APP WORKING')
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})