const express = require('express')
const cors= require('cors')
require('dotenv').config();

const port=process.env.PORT || 8080;
const mailRoutes=require('./router/mail')

const app=express();

app.use(express.json({ limit: '50mb' }))
app.use(cors())
app.use('/mail',mailRoutes)

app.listen(8080,()=>{console.log("server started")})

app.get('/',(req,res)=>{
    
    res.send("hello world");
}) 