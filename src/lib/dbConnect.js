import mongoose from "mongoose";

const connection = {};

async function dbConnect(){

    if(connection.isConnected){
        return;
    }

    const db = await mongoose.connect(process.env.MONGODB_URI,{
        serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
        socketTimeoutMS: 45000, // Increase socket timeout
        // keepAlive: true, // Keep the connection alive
        // keepAliveInitialDelay: 300000, //
    });

    connection.isConnected  = db.connections[0].readyState;

}

export default dbConnect;