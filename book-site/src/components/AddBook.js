import React, { Component } from 'react';

const ADD_BOOK_URL = "http://localhost:3001/api/add-book"

class AddBook extends Component {

  constructor(props) {
  super(props)

  this.state = { book : {} }

  }

  submitBookClick = () => {

    let book = this.state.book

    fetch(ADD_BOOK_URL,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    }).then((response) => {
      return response.json()
    }).then((json) => {
      console.log(json.message)
      this.props.history.push('/')
    })
  }

  textboxOnChange = (e) => {

    this.setState({
      book : {
        ...this.setState,
        [e.target.name] : e.target.value
      }
    })
  }

  render() {
    return (
      <div className="AddBook">
        <h1>Add a book</h1>
        <input type="text" name="title" placeholder="Enter book title" onChange={this.textboxOnChange}/>
          <button onClick={this.submitBookClick}>Add Book</button>
      </div>
    );
  }
}

export default AddBook;


// handleAddMovieButtonClick() {
//
//   let movie = this.state.movie
//
//   fetch(ADD_MOVIE_URL,{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(movie)
//   }).then((response) => {
//     return response.json()
//   }).then((json) => {
//     console.log(json)
//     this.props.history.push('/all-movies')
//   })
//
// }
