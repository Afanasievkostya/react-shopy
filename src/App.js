import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h1>Hello word</h1>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
