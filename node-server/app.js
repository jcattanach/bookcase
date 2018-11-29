const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const models = require('./models')

let books = []

addNewBook = (bookObject) => {
  console.log(bookObject)
  let bookAddition = models.Book.build(
    bookObject
  )
  bookAddition.save()
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())

app.get('/api/books', (req,res) => {
  res.send(JSON.stringify(books))
})

app.post('/api/add-book',(req,res) => {

  let bookTitle = req.body.title
  let bookAuthor = req.body.author
  let bookYear = req.body.year
  let bookGenre = req.body.genre
  let bookImgUrl = req.body.imageUrl

  let bookObject = { title: bookTitle, author: bookAuthor, year: bookYear, genre: bookGenre, imgUrl: bookImgUrl}
  books.push(bookObject)

  addNewBook(bookObject)

  res.send(JSON.stringify({message: 'Book Added'}));
})

app.listen(3001,() => console.log('Server is running...'))
