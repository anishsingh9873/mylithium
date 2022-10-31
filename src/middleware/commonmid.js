const router = require("../routes/route")

const mid1=function(req,res,next){
    console.log('Hello World')
    //logic
    let log=true
    if (log==true){
        next() //this is a callback function a middleware
    }
    else{
        res.send('Please log in')
    }
}


const mid2=function(req,res,next){
    console.log('Middleware')
    next()
}

const mid3=function(req,res,next){
    console.log('Mid3')
    
    next()
}

module.exports.mid1=mid1
module.exports.mid2=mid2
module.exports.mid3=mid3