const axios=require('axios')

let finddistrict=async function(req,res){
    try {
        let district=req.query.district_id
        let date=req.query.date
        var options={
            method:'get',
            url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result=await axios(options)
        let data=result.data
        res.status(200).send({msg:data})
    } catch (error) {
        res.status(500).send({msg:'Error',error:error.message})
    }
}


let weather=async function(req,res){
    try {
        let city=req.query.q
        let id=req.query.appid
        let options={
            method:'get',
            url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let m=await axios(options)
        let data=m.data
        const {main:{temp}}=data
        const {name}=data
        res.status(200).send({City:name,Temperature:temp})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
}


let meme=async function(req,res){
    try {
        let options={
            method:'post',
            url:'https://api.imgflip.com/caption_image?template_id=181913649&text0=gulambi&text1=kamli&username=chewie12345&password=meme@123'
        }
        let result=await axios(options)
        res.status(200).send({data:result.data})
    } catch (error) {
        res.status(500).send({msg:error})
    }
}



module.exports.finddistrict=finddistrict
module.exports.weather=weather
module.exports.meme=meme