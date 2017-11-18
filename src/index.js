import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import ReduxPromise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App.js';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(allReducers)} >
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
