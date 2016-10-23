import React, { Component } from 'react'
import { connect } from 'react-redux'
//
import CounterState from './state/counter'
//
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <h1>{ this.props.counter.count }</h1>
          <button onClick={ () => CounterState.decrement() }>Decrement</button>
          <button onClick={ () => CounterState.increment() }>Increment</button>
        </p>
      </div>
    );
  }
}

export default connect(state => {
  return {
    counter: state.counter
  }
})(App)
