const express=require('express');
const router = require('./routes');
const path = require('path');
const cookieParser = require('cookie-parser');
const app=express();
const port = 9000;
const bodyParser = require('body-parser');

//ejs layout calling 
const expressLayouts=require('express-ejs-layouts');

app.use(expressLayouts);

//access stataic file 
app.use(express.static('./assets'));


app.use(bodyParser.urlencoded({ extended: true }));
// database connect
const connectDB = require('./config/mongoose');
connectDB();
// use express router 
app.use('/',require('./routes')); //use for any request


app.use(express.urlencoded);
// for cookies
app.use(cookieParser());

//






//router.get('/')

app.set('view engine','ejs');
//app.set('views','./views'); //position of view ,path join can be used
app.set('views', path.join(__dirname, 'views'));
 




app.listen(port,(err)=>{
    if(err){
        // interpolation :embeded of varible can be done inside a string:
        console.log(`error in running the server :${err}`)
    }
    console.log(`server running succesfully at ${port}`)
})








