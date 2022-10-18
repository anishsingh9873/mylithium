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
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})


//Question 1
router.get('/movies',function(req,res){
    const movie=['RRR','KGF 2','PS 1']
    res.send(movie)
})

//Question 4
router.get('/films',function(req,res){
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
})


//Question 5
/*let myFilm=[ {
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
router.get('/films/:filmId',function(req,res){
    const film=req.params.filmId
    const m=myFilm.find(filmId=>filmId==film)
    if(m){
        res.send(m)
    }
    else{
        res.send('No any movie')
    }
})

//Question 2
const moviem=['KGF','KGF2','PUSHPA','PS1','RRR']
router.get('/movies/:indexNumber',function(req,res){
    const index=req.params.indexNumber
    
    res.send(moviem[index])
})

//Question 3
const movie = ['KGF', 'KGF2', 'PUSHPA', 'PS1', 'RRR']
router.get('/movies/:indexNumber', function (req, res) {
    const inParama = req.params.indexNumber

    if (inParama > (movie.length - 1)) {
        res.send('Not valid')
    }
    else {
        res.send(movie[inParama])
    }
})*/
router.get('/shoes',function(req,res){
    let queryParams=req.query
    let brand=queryParams.brand
    let discount=queryParams.discount
    let color=queryParams.color
    console.log('This brand selected is ', brand)
    console.log('This selected discount is ', discount)
    console.log('This color selected is ', color)
    res.send('Dummy')

})



module.exports = router;