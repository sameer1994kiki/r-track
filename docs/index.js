import React from 'react';
import ReactDOM from 'react-dom';
// import store from "./store";
import store from "./store-mobx";
import { Provider } from 'mobx-react';
// import App from './App';
import App from './App-mobx';

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <App store={store}/>,
//   document.getElementById('root')
// );
