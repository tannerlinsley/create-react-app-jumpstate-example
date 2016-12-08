import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { CreateJumpstateMiddleware } from 'jumpstate'
//
import App from './App'
import CounterState from './state/counter'
import './index.css'

const states = {
  counter: CounterState
}

const store = createStore(
  combineReducers(states),
  applyMiddleware(
    CreateJumpstateMiddleware()
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
