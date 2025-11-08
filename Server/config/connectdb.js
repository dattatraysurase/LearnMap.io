import mongoose from "mongoose";

const connectDb = async ()=>{
    try {
           let connection = await mongoose.connect(process.env.MONGO_URL)

           if(connection){
              console.log(`database connected`)
           }
           else{
              console.log(`database not connected`)
           }
    } catch (error) {
        console.log(`error in database connection :${error.message}`)
    
    }
}

export default connectDb;