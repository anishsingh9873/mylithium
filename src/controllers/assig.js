const studentData=require('../models/assigusermodel')
const jwtoken=require('jsonwebtoken')

const student=async function(req,res){
    const a=req.body
    const b=await studentData.create(a)
    res.send({Data:b})
}

const studentlogin=async function(req,res){
    let username=req.body.emailId
    let password=req.body.password

    let user=await studentData.findOne({email:username,password:password})
    if(!user){
        return res.send({
            Status:false,msg:'Its not a present'
        })
    }
    let studenttoken = jwtoken.sign(
        {
          studentId: user._id.toString(),
        },
        "anish"
      );
      res.setHeader("x-auth-token", jwtoken);
      res.send({ status: true, token: studenttoken })
}

const getstudent=async function(req,res){
    let studenttoken=req.headers['x-auth-token']
    if(!studenttoken) studenttoken=req.headers['x-auth-token']
    if(!studenttoken){
        return res.send({Status:false,msg:'Token is not present'})
    }
    let encrypt=jwtoken.verify(studenttoken,"anish")
    if(!encrypt){
        return res.send({Status:false,msg:"Token is invalid"})

    }
    let studentId=req.params.studentId
    let studentde=await studentData.findById(studentId)
    if(!studentde){
        return res.send({Status:false,msg:'No any student'})
    }
    res.send({Status:true,Data:studentde})
}

const update=async function(req,res){
    let delstu=req.params.studentId
    let del=await studentData.updateOne(
        {email:delstu},
        {$set:{isDeleted:true}},
        {new:true}
    )
    if(!del){
        return res.send({Status:false,msg:"not a delet"})
    }
    return res.send({Status:true,msg:del})
}




module.exports.create=student
module.exports.login=studentlogin
module.exports.getstudent=getstudent
module.exports.delet=update