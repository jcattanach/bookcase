import React, { Component } from 'react';
import './Books.css'
const BOOKS_URL = "http://localhost:3001/api/books"

class Books extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount() {

    fetch(BOOKS_URL).then((data) => {
      return data.json()
    }).then((json) => {
      this.setState({ books: json})
    })
  }

  buttonRemoveBook = (e) => {
    console.log(e)
  }

  render() {

    let bookItem = this.state.books.map(function(book,index){
      return <li key={index}>
        <img className="bookImg" src={book.imgURL}/>
        <h4>{book.title}</h4>
        <label>{book.author}</label>
        <p>{book.year}</p>
        <p>{book.genre}</p>
      </li>
    })

    return (
      <div className="Books">
        <h1>My books</h1>
        <ul>
          {bookItem}
        </ul>
      </div>
    );
  }
}

export default Books;
