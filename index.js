const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({extended : true}))

function validateTitleExist(book) {
  for (let i = 0; i < books.length; i++) {
    
  }
}

const books = [ 
{
id: 1,
title: "My book",
author: "Bukowski",
genre: "Police"
},
{
  id: 2,
  title: "My book 2",
  author: "Roberio Skyrabo",
  genre: "Comedy"
}
 ]
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/books", (req, res) => {
  res.json(books)
})

app.post("/books", (req, res) => {
  
  const newBook = req.body
  books.push(newBook)
  res.json(books)

})

app.put("/books/bookId", (req, res) => {
  res.send("Update the book with a specific Id")
})

app.get("/books/:bookId", (req, res) => {
  res.send("books Id")
})

app.delete("/books/:bookId", (req, res) => {
  res.send("Delete the book with a specific Id")
})

app.get("/authors", (req, res) => {
  res.send("all authors")
})

app.get("/authors/:authorsId", (req, res) => {
  res.send("authors ID's")
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})