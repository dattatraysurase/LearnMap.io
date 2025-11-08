import express from "express"
import { config } from "dotenv"
config();

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));




// DB connection function
import connectDb from "./config/connectdb.js";
import responder from "./utils/responder.js";

// controllers
import { postSignup } from "./controller/auth.controller.js";

app.post("/signup",postSignup);




app.get("/health",(req,res)=>{
    return res.status(200).json({data:null,message:"server is healthy"})
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
    connectDb();
})