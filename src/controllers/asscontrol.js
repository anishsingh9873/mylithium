const bk=require('../assignment/todaybook')

const abk=async function(req,res){
    a=req.body
    b=await bk.create(a)
    res.send({Book:b})
}

const c=async function(req,res){
    //d=await bk.find().select({bookName:1,authorName:2,_id:0})
    //d=await bk.find({publishedYear:{$in:[1943,1936,1966]}}).sort({publishedYear:1})
    //d=await bk.find({price:{$in:[1650,1050,1250]}})
    //d=await bk.find({page:{$gt:500}})
    d=await bk.find({bookName:/^Go/})
    res.send({AllBook:d})
}

module.exports.allbook=abk
module.exports.getbook=c