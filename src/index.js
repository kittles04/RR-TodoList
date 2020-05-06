import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { createStore } from 'redux';
import todoApp from './reducer';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions';

const store = createStore(todoApp);

store.dispatch(addTodo('Learn about actions'));

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
