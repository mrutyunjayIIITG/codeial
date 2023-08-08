const express=require('express');
const router = require('./routes');
const app=express();
const port = 9000;

// use express router 
app.use('/',require('./routes'));



router.get('/')



 




app.listen(port,(err)=>{
    if(err){
        console.log(`error in running the server :${err}`)
    }
    console.log(`server running succesfully at ${port}`)
})








