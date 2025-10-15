import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://dnd28062002_db_user:Duonghandsome2861412@cluster0.f2kkxwc.mongodb.net/RESUME');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}