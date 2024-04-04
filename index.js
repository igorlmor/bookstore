const express = require('express')
const app = express()
const Database = require('better-sqlite3');
const db = new Database('bookstore.db', { verbose: console.log });
const port = 3000
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/books", (req, res) => {
  try {
  const books = db.prepare('SELECT * FROM books').all()
  res.status(200).json(books)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)    
  }
})

app.get("/books/:bookId", (req, res) => {
  try {
    const bookId = parseInt(req.params.bookId)
    const book = db.prepare('SELECT * FROM books WHERE id = ?').get(bookId)
    res.status(200).json(book)
  } catch (error) {
    console.log(error)
    res.sendStatus(404)
  }
})

app.post("/books", (req, res) => {
  try {
    const newBook = req.body
    const stmt = db.prepare('INSERT INTO books (author_id, title, genre) VALUES (?, ?, ?)')
    const info = stmt.run(newBook.authorId, newBook.title, newBook.genre)
    res.status(200).json(newBook)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

app.put("/books/:bookId", (req, res) => {
  try {
    const updatedBook = req.body
    const bookId = parseInt(req.params.bookId)
    const stmt = db.prepare("UPDATE books SET title = ?, genre = ? WHERE id = ?")
    const info = stmt.run(updatedBook.title, updatedBook.genre, bookId)
    res.sendStatus(200) 

  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }

})

app.delete("/books/:bookId", (req, res) => {
  try {
  const bookId = parseInt(req.params.bookId)
  const stmt = db.prepare('DELETE FROM books WHERE id = ?').run(bookId)
  res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

app.get("/authors", (req, res) => {
  const authors = db.prepare('SELECT * FROM authors').all()
     
  res.json(authors)
})

app.get("/authors/:authorsId", (req, res) => {
  const authorId = parseInt(req.params.authorsId)
  const author = db.prepare(' SELECT * FROM authors WHERE id = ? ').get(authorId)
  res.json(author)
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