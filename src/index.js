import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import './index.css';

const root = document.querySelector('#root');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);

registerServiceWorker();

if(module.hot) {
  module.hot.accept();
}
