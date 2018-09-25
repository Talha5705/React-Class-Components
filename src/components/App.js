import React, { Component } from 'react';
import './App.css';
import First from './First/First'

class App extends Component {
  render() {
    return (
      <div className="App">
          <First/>  {/*calling the Component */}
      </div>
    );
  }
}

export default App;
