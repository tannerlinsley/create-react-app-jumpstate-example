import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
//
import App from './App'
import CounterState from './state/counter'
import './index.css'

const store = createStore(combineReducers({
  counter: CounterState
}))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
