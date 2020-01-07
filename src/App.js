import React, { Component } from 'react';
import Decrement from './Decrement'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Decrement number={0}/>
       </div>
    );
  }
}

export default App;
