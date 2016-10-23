import React, { Component } from 'react'
import { connect } from 'react-redux'
//
import CounterState from './state/counter'
//
import logo from './logo.svg'
import './App.css'

console.log(CounterState.increment())

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Adp-intro">
          <h1>{ this.props.counter.count }</h1>
          <button onClick={ () => {
            this.props.dispatch(CounterState.decrement())
          } }>
            Decrement
          </button>
          <button onClick={ () => {
            this.props.dispatch(CounterState.increment())
          } }>
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    counter: state.counter
  }
})(App)
