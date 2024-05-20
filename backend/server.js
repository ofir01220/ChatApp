import express from "express";
import dotenv from "dotenv"; 

import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "../db/connectToMongoDB.js";


const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();

app.use(express.json()); //to parse the incoming requests with JSON

app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server running on ${PORT}`);
})
