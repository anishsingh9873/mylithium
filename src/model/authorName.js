const author=require('mongoose')

const name=new author.Schema({
    authorName:String,
    age:Number,
    add:String
},{timestamps:true})

module.exports=author.model('Author',name)