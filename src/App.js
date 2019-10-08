import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      cont:0
    } 
  }
  counter = (event) => {
    this.setState({cont:event.target.value.length});
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.counter}></textarea>
        <div className="counter">{this.state.cont}</div>
      </div>
    );
  }
}

export default App;
