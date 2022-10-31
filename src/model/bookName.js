const book=require('mongoose')
const ObjectId = book.Schema.Types.ObjectId

const newBook=new book.Schema({
    bookName:{
        type:String,
    },
	author:{
        type:ObjectId,
        ref:"Author",
        required:true
    },
	price:{
        type:Number,
        default:550
    },
		ratings:{
            type:Number,
            default:10
        },
		publisher:{
            type:ObjectId,
            ref:"Publisher",
            required:true
        } 
},{timestamps:true})

module.exports=book.model("Books",newBook)