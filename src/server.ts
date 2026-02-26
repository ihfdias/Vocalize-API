import express, { type Request, type Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database';

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/status', (req: Request, res: Response) => {
    res.status(200).json({ 
        success: true, 
        message: 'Vocalize API is running perfectly!' 
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});