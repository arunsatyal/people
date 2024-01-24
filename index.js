import express  from "express";
import { dbConnect } from "./src/config/dbConfig.js";

const app = express();
const PORT = 8000;

dbConnect();


app.listen(PORT, (error)=>{
  error
  ? console.log("Error: ", error) : console.log("Connected to port: " + PORT)
});