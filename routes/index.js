const express=require('express');
const router=express.Router();

const homeController= require('../controllers/home_controller')

console.log("router loaded");


router.get('/',homeController.home);

// router.get('/about',homeController.about)

router.use('/users',require('./users'));

//for any routes,access from here 
// router.use('/routeName',require('./routerfile'))

module.exports= router;
