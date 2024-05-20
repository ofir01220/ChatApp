import express from "express";
import dotenv from "dotenv"; 
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "../db/connectToMongoDB.js";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) =>{
    res.send("server is ready");
})

app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server running on ${PORT}`);
})
