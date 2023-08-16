
const User= require('../models/user');


module.exports.profile=(req,res)=>{
   // res.end('<h1> user profile</h1>');
   return res.render('user_profile',{
    title: "Profile"
});


}

// action  for  sign up

module.exports.signup= (req,res)=>{
    return res.render('user_signup',{
        title: "Codeial | Sign up"
    })
}
// render sign up page
module.exports.signin=(req,res)=>{
    return res.render('user_signin',{
        title: "COdeial | sign up"
    })
}

//get the sign up data


    


module.exports.create = async function (req, res) {
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }

    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            const newUser = await User.create(req.body);
            return res.redirect('/users/sign-in');
        } else {
            return res.redirect('back');
        }
    } catch (err) {
        console.log('Error in finding/creating user:', err);
        return res.redirect('back');
    }
}
//signfor  in create a session 
module.exports.createSession=function(req,res)
{
    //todo later
}