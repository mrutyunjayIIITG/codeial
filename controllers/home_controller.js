module.exports.home=function(req,res)
{

    return res.end('<h1> express is up for codial </h1> ')
}
// module.export.actionname=function(req,res)

module.exports.about=(req,res)=>{
    return res.send('<h1> I am learning mern </h1>')
}