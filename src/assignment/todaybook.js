const allbook=require('mongoose')

const thebook=new allbook.Schema({
    bookName:String,
    authorName:String,
    publishedYear:Number,
    price:Number,
    page:Number
})

module.exports=allbook.model('MyallBooks',thebook)