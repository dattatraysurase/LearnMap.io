import express from "express"
import { config } from "dotenv"
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
config();

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors({
     origin:"*",
     credentials:true,
}))
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(cookieParser());


 app.use(session({
    secret:process.env.SESSION_SECREAT,
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        maxAge: 1000 * 60 * 60 * 24 * 7,// 7 days
    }
 }))



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