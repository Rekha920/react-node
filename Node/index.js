const express=require('express');
const app=express();
const {logger}=require('./utils/logger');
const router=require('./route/user');
require('dotenv').config();
const PORT=process.env.PORT;

app.use(router)

app.listen(PORT,()=>{
    logger.log('info',`Server is running on port number:- ${PORT}`)
})