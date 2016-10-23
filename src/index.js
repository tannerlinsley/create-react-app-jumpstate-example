import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { attachDispatcher } from 'jumpstate'
//
import App from './App'
import CounterState from './state/counter'
import './index.css'

const states = {
  counter: CounterState
}
const rootReducer = combineReducers(states)
const store = createStore(rootReducer)
attachDispatcher(store, states)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
