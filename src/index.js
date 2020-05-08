import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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
store.dispatch(toggleTodo(0));
console.log(store.getState());
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
