import mongoose from "mongoose";

const dbName = "people-db"
const db_uri = "mongodb://localhost:27017/" + dbName;

export const dbConnect = ()=>{
  try {
    const connect = mongoose.connect(db_uri);
    if (connect) {
      console.log("Connected to Database: " + dbName);
    }
  } catch (error) {
    console.log("Error:", error);
  }
}
