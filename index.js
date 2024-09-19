const express = require('express');
const connect = require('./connection');
const student = require('./routes/student');
const app = express();
connect();
app.use(express.json());
app.use(student);


app.listen(3000,(error)=>{
    if(error){
        console.log(error," Error Occured");
    }
    else{
        console.log("Server is Running on Port 3000");
    }
})