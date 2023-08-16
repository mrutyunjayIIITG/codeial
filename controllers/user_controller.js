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

module.exports.create =function(req,res){
    //todo later 
}
//signfor  in create a session 
module.exports.createSession=function(req,res)
{
    //todo later
}