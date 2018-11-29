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
      this.props.history.push('/')
    })
  }

  textboxOnChange = (e) => {

    this.setState({
      book : {
        ...this.state.book,
        [e.target.name] : e.target.value
      }
    })
  }

  render() {
    return (
      <div className="AddBook">
        <h1>Add a book</h1>
        <input type="text" name="title" placeholder="Enter book title" onChange={this.textboxOnChange}/>
        <input type="text" name="author" placeholder="Enter book author" onChange={this.textboxOnChange}/>
        <input type="text" name="year" placeholder="Enter book year" onChange={this.textboxOnChange}/>
        <input type="text" name="genre" placeholder="Enter book genre" onChange={this.textboxOnChange}/>
        <input type="text" name="imageUrl" placeholder="Enter image URL" onChange={this.textboxOnChange}/>
          <button onClick={this.submitBookClick}>Add Book</button>
      </div>
    );
  }
}

export default AddBook;
