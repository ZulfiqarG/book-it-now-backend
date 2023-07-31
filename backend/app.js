const express = require("express"); //imported express 
const mongoose = require("mongoose"); //imported mongoose
mongoose.set('strictQuery', false); //set mongoose strictQuery to false
const router = require("./routes/routes"); //imported routes 
const cors = require("cors");//importes CORS for cross origin resource sharing
const app = express(); //initialised the express app

const port = process.env.PORT || 8080; 

const connectionString = "mongodb+srv://zulfiqar:zulfiqar123@cluster0.wjzckpk.mongodb.net/?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());
app.use("/api",router)

//connected to the database using mongoose.connect and started the server at PORT
mongoose.connect(connectionString).then(()=>console.log("db connected"))
.then(()=>app.listen(port,()=>{console.log(`Listening on Port ${port}!`)}))
.catch((err)=>console.log(err));