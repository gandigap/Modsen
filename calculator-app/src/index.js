import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
console.log(store.getState(), 'store');
ReactDOM.render(
  <Provider store={store}>
    hi
    <App />
  </Provider>,
  document.getElementById('root'),
);
