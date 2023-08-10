module.exports.home=function(req,res)
{

    return res.render('Home',{
        title: "Home"
    });
}
// module.export.actionname=function(req,res)

// module.exports.about=(req,res)=>{
//     return res.send('<h1> I am learning mern </h1>')
// }