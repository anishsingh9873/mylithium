const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

/*router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName/:batchName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName + ' its a ' + myParams.batchName + ' student.')
})*/

// Example 2 for path params
/*router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})*/


//Question 1
/*router.get('/movies',function(req,res){
    const movie=['RRR','KGF 2','PS 1']
    res.send(movie)
})*/

//Question 4
/*router.get('/films',function(req,res){
    const film=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       res.send(film)
})*/


//Question 5
router.get('/films/:filmId',function(req,res){
    const film=req.params
    console.log(film)
    let myFilm=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
    if (film.index>myFilm.length) {
        res.send('Its a :')
    }
res.send(myFilm[film.index])
})

//Question 2
/*router.get('/movies/:index',function(req,res){
    const inParama=req.params
    console.log(inParama)
    const movie=['KGF','KGF2','PUSHPA','PS1','RRR']
    if (inParama.index>movie.length) {
        res.send('Its a : ')
    }
    res.send(movie[inParama.index])
})*/

//Question 3
/*router.get('/movies/:index',function(req,res){
    const inParama=req.params
    console.log(inParama)
    const movie=['KGF','KGF2','PUSHPA','PS1','RRR']
    if (inParama.index>movie.length) {
        res.send('Not valid')
    }
    res.send(movie[inParama.index])
})*/


module.exports = router;