import mongoose from "mongoose";

const connectToMongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to MonogoDB");
    } catch(error){
        console.log("Error connecting to MonogoDB" , error.message);
    }
}

export default connectToMongoDB;