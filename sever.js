const express = require("express");
const app = express()
const books = require('./db.json')
app.get('/' ,(req , res ) => {
    res.send("Hello World")
})
app.get('/book' , (req , res) =>{
    res.json(books)
})



app.listen(3000 , () =>{
    console.log("http://localhost:3000")

})