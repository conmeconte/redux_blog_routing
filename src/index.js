import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import PostIndex from './components/posts_index';
import promise from 'redux-promise';
import Postnew from './components/post_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/posts/new' component={Postnew} />
          <Route path='/' component={PostIndex}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
