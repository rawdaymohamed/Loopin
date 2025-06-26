import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan from 'morgan';
import userRoutes from './routes/users.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/posts.route.js';
dotenv.config();
const port = 8800;
const app = express();
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});
// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.get('/', (req, res) => {
    res.send('Welcome to Loopin');
}); 
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});