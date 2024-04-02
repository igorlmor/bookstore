const express = require('express')
const app = express()
const Database = require('better-sqlite3');
const db = new Database('bookstore.db', { verbose: console.log });
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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/books", (req, res) => {
  res.json(books)
})

app.post("/books", (req, res) => {
  const newBook = req.body
  if (!validateTitleExist(newBook)) {
    db.prepare('INSERT ')
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

/*db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});*/