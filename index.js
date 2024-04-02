const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({extended : true}))

function validateTitleExist(book) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === book.title) {
      return true;
    }
  }
  return false;
}

function getBookById(id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      return books[i]
    }
  }
}



let books = [ 
{
id: 1,
title: "My book",
author: "Bukowski",
genre: "Police"
},
{
  id: 2,
  title: "My book 2",
  author: "Roberio",
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
  if (!validateTitleExist(newBook)) {
    books.push(newBook)
  }
  
  res.json(books)

})

app.put("/books/:bookId", (req, res) => {
  const updatedBook = req.body
  const bookId = parseInt(req.params.bookId)
  const book = getBookById(bookId)
  

})

app.get("/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId)
  const book = getBookById(bookId)
  res.json(book)
})

app.delete("/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId) 
  const deletedBook = getBookById(bookId)
  books = books.filter((book) => book.id !== bookId)
  
  res.json(deletedBook)
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