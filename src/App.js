import React, { Component } from 'react'
// import './App.css';
import Total from './components/total/total'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <Total/>
      </div>
    )
  }
}

export default App;