import React, { Component } from 'react'
// import './App.css';
import Total from './components/total/total'
import AutoScroll from './components/autoScroll/autoScroll'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    
  }
  render() {
    return (
      <div className="App">
        <Total/>
        {/* <AutoScroll/> */}
      </div>
    )
  }
}

export default App;