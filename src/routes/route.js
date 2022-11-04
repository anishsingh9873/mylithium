const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

const data=require('../controllers/assig')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)

//Assignment
router.post('/create',data.create)
router.post('/studentlogin',data.login)

router.get('/student/:studentId',data.getstudent)
router.get('/del/:studentId',data.delet)



module.exports = router;