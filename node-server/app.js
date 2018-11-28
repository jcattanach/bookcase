const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let books = []

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


  let bookObject = { title: bookTitle}
  books.push(bookObject)


  console.log(books)

  res.send(JSON.stringify({message: 'Book Added'}));
})

app.listen(3001,() => console.log('Server is running...'))
