const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dashboardSlice = require('./routes/dashboard.route');

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use('/dashboard',dashboardSlice);


app.listen(port,async()=>{
    await mongoose.connect('mongodb+srv://sharang:sharang123@cluster0.savsuxp.mongodb.net/?retryWrites=true&w=majority');
    console.log('sever running on port '+ port);
})