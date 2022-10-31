const express = require('express');
const router = express.Router();

const nameAuthor=require('../control/author')
const public=require('../control/publisher')
const databook=require('../control/book')

const user=require('../control/author')
const midall=require('../middleware/commonmid')
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post('/author',nameAuthor.authorName)


//router.post('/publisher',public.newpublisher)

/*
router.post('/books',databook.createBook)
router.get('/books',databook.book)
*/





router.get('/basic',midall.mid1,midall.mid2,midall.mid3,user.basic)
module.exports = router;