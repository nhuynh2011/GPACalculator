import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';

class App extends Component {
  togglePast() {
    var past = document.getElementById('past');
    var checkbox = document.getElementById('checkbox');
    checkbox.checked ? past.style.display="inherit" : past.style.display="none";
  }

  render() {
    console.log();
    return (
      <div>
        <Form />
      </div>
    )
  }
}

export default App;
