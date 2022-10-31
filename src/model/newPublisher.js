const publisher=require('mongoose')

const newPublisher = new publisher.Schema({
    name:String,
    headQuarter:String

},{timestamps:true});

module.exports=publisher.model('Publisher',newPublisher)