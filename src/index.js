require('dotenv').config({path:'./.env'})
import mongoose  from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";



connectDB()


/*
import express from "express"
const app=express()
(async()=> {
    try {
       await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error",()=>{
        console.log("error",error);
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`server is running at https/localhost/${process.env.PORT}`)
       })
    } catch (error) {
        console.error("error",error)
        throw err
    }
} )()

THIS APPROACH IS ALSO OKY TO CONNECT DATABASE BUT IN THIS WE POLLUTED SO MUCH 
 */
