const createAuthor=require('../model/newPublisher')

const publishers=async function(req,res){
    const a=req.body
    const b=await createAuthor.create(a)
    res.send(b)

}

module.exports.newpublisher=publishers