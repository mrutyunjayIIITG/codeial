module.exports.profile=(req,res)=>{
   // res.end('<h1> user profile</h1>');
   return res.render('user_profile',{
    title: "Profile"
});



}