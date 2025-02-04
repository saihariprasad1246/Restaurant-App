import mongoose from "mongoose";


async function connectDB(url){
    try{
       const response = await  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
       console.log("Connected to MongoDB");
       return response
    }catch(err){
        console.log("Error connecting to MongoDB");
        return False
    }
}

export default connectDB