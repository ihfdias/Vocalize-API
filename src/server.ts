import express, { type Request, type Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import userRoutes from './routes/userRoutes'; 
import announcementRoutes from './routes/announcementRoutes';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRoutes); 
app.use('/api/announcements', announcementRoutes);

app.get('/api/status', (req: Request, res: Response) => {
    res.status(200).json({ 
        success: true, 
        message: 'Vocalize API is running perfectly!' 
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});