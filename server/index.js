import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";


const app = express();

app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose 
    .connect(MONGOURL)
    .then(() => {
        console.log("DB connectedsuccessfully");
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });
    })
    .catch((error) => console.log(error));

app.get("/", (req, res)=>{
    res.send("Hello World");
})
app.post("/notes", (req, res) =>{
    console.log(req.body);
    
    
})