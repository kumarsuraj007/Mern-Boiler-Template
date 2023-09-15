import mongoose from "mongoose";
import asyncHandler from 'express-async-handler';

const connectDB = asyncHandler(async (err) => {
    const conn = await mongoose.connect(process.env.MONGOURI);
    console.log(`mongodb connected: ${conn.connection.host}`);
    if (err) {
        console.log(`message: ${err.message}`);
        process.exit(1)
    }
});

export default connectDB;