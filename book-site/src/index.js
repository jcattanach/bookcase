import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseLayout from './BaseLayout';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Books from './components/Books'
import AddBook from './components/AddBook'

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>

      <Route exact path="/" component={Books} />
      <Route path="/add-book" component={AddBook} />

    </Switch>
  </BaseLayout>
  </BrowserRouter>
  ,document.getElementById('root'));


serviceWorker.unregister();
