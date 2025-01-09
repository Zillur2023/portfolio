import config from '@/config';
import mongoose from 'mongoose';

export async function connect() {
    try {
        // mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL!);
        mongoose.connect(config.database_url!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}