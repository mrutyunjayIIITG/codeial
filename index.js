const express=require('express');
const app=express();
const port = 9000;











app.listen(port,(err)=>{
    if(err){
        console.log(`error in running the server :${err}`)
    }
    console.log(`server running succesfully at ${port}`)
})








