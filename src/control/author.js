const createAuthor=require('../model/authorName')

const creat=async function(req,res){
    const a=req.body
    const b=await createAuthor.create(a)
    res.send(b)
}


const basic=async function(req,res){
    res.send({msg:'This is a controller'})
}


module.exports.authorName=creat
module.exports.basic=basic