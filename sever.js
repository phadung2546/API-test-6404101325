const express = require("express");
const app = express()
const books = require('./db.json')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/' ,(req , res ) => {
    res.send("Hello World")
})
app.get('/book' , (req , res) =>{
    res.json(books)
})
app.get('/book/:id' , (req,res) => { 
    res.json(books.find(book => book.id === req.params.id))
})





app.listen(3000 , () =>{
    console.log("http://localhost:3000")

})