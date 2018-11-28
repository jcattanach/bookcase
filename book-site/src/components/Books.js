import React, { Component } from 'react';
const BOOKS_URL = "http://localhost:3001/api/books"

let booksList = []

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
      booksList = json
      return booksList
    })
  }

  render() {

    let bookItem = booksList.map(function(book,index){
      return <li key={index}>
        <h4>{book.title}</h4>
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
