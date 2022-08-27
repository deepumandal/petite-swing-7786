const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());



app.listen(port,async()=>{
    await mongoose.connect('');
    console.log('sever running on port '+ port);
})