const studentData = require('../models/assigusermodel')
const jwtoken = require('jsonwebtoken')

const student = async function (req, res) {
    try {
        const a = req.body
        if (Object.keys(a).length != 0) {
            const b = await studentData.create(a)
            res.status(201).send({ Data: b })
        }

        else {
            res.status(411).send({ msg: "Please insert a data" })
        }
    }
    catch (error) {
        res.status(400).send({ msg: "Its a error", error: error.message})
    }

}

const studentlogin = async function (req, res) {
    let username = req.body.emailId
    let password = req.body.password

    let user = await studentData.findOne({ email: username, password: password })
    if (!user) {
        return res.send({
            Status: false, msg: 'Its not a present'
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

const getstudent = async function (req, res) {
    let studenttoken = req.headers['x-auth-token']
    if (!studenttoken) studenttoken = req.headers['x-auth-token']
    if (!studenttoken) {
        return res.send({ Status: false, msg: 'Token is not present' })
    }
    let encrypt = jwtoken.verify(studenttoken, "anish")
    if (!encrypt) {
        return res.send({ Status: false, msg: "Token is invalid" })

    }
    let studentId = req.params.studentId
    let studentde = await studentData.findById(studentId)
    if (!studentde) {
        return res.send({ Status: false, msg: 'No any student' })
    }
    res.send({ Status: true, Data: studentde })
}

const update = async function (req, res) {
    let delstu = req.params.studentId
    let del = await studentData.updateOne(
        { email: delstu },
        { $set: { isDeleted: true } },
        { new: true }
    )
    if (!del) {
        return res.send({ Status: false, msg: "not a delet" })
    }
    return res.send({ Status: true, msg: del })
}

const postMessage = async function (req, res) {
    let message = req.body.message
    let token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "token must be present in the request header" })
    let decodedToken = jwtoken.verify(token, 'anish')

    if (!decodedToken) return res.send({ status: false, msg: "token is not valid" })

    let studentToBeModified = req.params.userId
    let studentLoggedIn = decodedToken.userId

    if (studentToBeModified != studentLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

    let student = await studentData.findById(req.params.userId)
    if (!student) return res.send({ status: false, msg: 'No such user exists' })

    let updatedPosts = student.posts
    updatedPosts.push(message)
    let updatedUser = await studentData.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

    return res.send({ status: true, data: updatedUser })
}



module.exports.create = student
module.exports.login = studentlogin
module.exports.getstudent = getstudent
module.exports.delet = update
module.exports.post = postMessage