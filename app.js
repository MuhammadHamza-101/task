const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const routes = require('./routes/router')
 const PORT = 6000;

 
// router
 app.use('/user',routes);

 //  bodyPareser
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json())
//  bodyPareser end

// database connection

const mongoose = require('mongoose');
const connectDataBase = async()=>{
    const URI="mongodb+srv://Hamza:admin123@contactmanager.j3kjt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    try{
        await mongoose.connect(URI,{
            useUnifiedTopology: true
        })
        console.log("mongoose is connect");

    }catch(err){
        console.error(err.message);
    }
};
connectDataBase()
// database connection end


//create api
 app.get('/',(req,res)=>{
     res.json('successful')
 });


//create port
 app.listen(PORT,()=>{
     console.log(`server is running port:${PORT}`);
 })

