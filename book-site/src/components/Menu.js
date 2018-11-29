import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <h1>BookCase</h1>
        <ul>
          <li><Link to = "/">My Books</Link></li>
          <li><Link to = "/add-book">Add Books</Link></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
