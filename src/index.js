import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import { composeWithDevTools } from 'redux-devtools-extension';

import fetchingData from './reducers/fetchingData';
import watchSend from './sagas/fetchingData';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  fetchingData,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(watchSend);

console.log(store.getState())

ReactDOM.render(
  <Provider store = {store}><App/></Provider>
, document.getElementById('root'));

serviceWorker.unregister();
