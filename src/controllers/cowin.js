const axios= require("axios")

let getstates=async function(req,res){
    try{
    let option={
        method:'get',
        url:'https://cdn-api.co-vin.in/api/v2/admin/location/states'}
    let result=await axios(option)
    let data=result.data
    res.status(200).send({msg:data})
}
catch(error){
    res.status(500).send({msg:'Error',error:error.message})
}
}


let district=async function(req,res){
    try{
    let id=req.params.stateId
    let option={
        method:'get',
        url:`https://cdn-api.co-vin.in/api/v2/admin/location/districts/&{id}`
    }
    let result=await axios(option)
    let data=result.data
    res.status(200).send({msg:data})
}
catch(error){
    res.status(500).send({msg:'Error',error:error.message})
}
}

const otp=async function(req,res){
    try {
        
    } catch (error) {
        res.status(500).send({msg:'Error',error:error.message})

    }
}

module.exports.getstates=getstates
module.exports.district=district
