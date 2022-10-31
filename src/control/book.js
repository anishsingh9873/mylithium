const newBook=require('../model/bookName')

const bookdata=async function(req,res){
    const a=req.body
    const b=await newBook.create(a)
    res.send(b)

}

const findbook=async function(req,res){
    const c=await newBook.find({bookName:"Hi"}).populate('author').populate('publisher')
    
    if (c.length>0) res.send(c)
    else res.send("Not Found")
}


module.exports.createBook=bookdata
module.exports.book=findbook
