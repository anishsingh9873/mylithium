const student=require('mongoose')

const data = new student.Schema({
    firstName : String,
    lastName : String,
    mobile :{
        type:Number,
        maxlength:10
    },
    emailId : String,
    password : String,
    gender : {
        type: String,
        enum: ["male", "female", "other"]
    },
	isDeleted: false, 
    age : Number,
    //posts: {type: [], deafult: []}
},{timestamps:true})

module.exports=student.model('Student',data)