const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials : true ,   
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log('The server has started on port : ${PORT}'));

app.use(express.json());

//setup monogodb
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser:true,
    useUnifiedTopology:true
    
    },(err)=>{
    
        if(err)throw err;
        console.log("MONGODB connected successfully..!");
    }
);

//setup routes
app.use("/auth",require("./routes/userRouter"));
app.use("/customer",require("./routes/customerRouter"));

