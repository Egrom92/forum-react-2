import React from 'react';
import {render} from 'react-dom';
import App from './App';
import store from "./store";
import {Provider} from 'react-redux';
import "bootstrap-icons/font/bootstrap-icons.css";

render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
