const express=require('express');
const app=express();
const cors=require('cors');
const {logger}=require('./utils/logger');
const mongoose=require('mongoose');
const router=require('./route/user');
const bodyParser=require('body-parser');
require('dotenv').config();
const PORT=process.env.PORT;
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    logger.info('DataBase Connected')
})
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router)

app.listen(PORT,()=>{
    logger.log('info',`Server is running on port number:- ${PORT}`)
})