const express = require('express');
const { route } = require('.');
const router=express.Router();

const usersController=require('../controllers/user_controller')

router.get('/profile',usersController.profile);


router.get('/sign-up',usersController.signup);
router.get('/sign-in',usersController.signin);

router.post('/create',usersController.create);



module.exports=router;