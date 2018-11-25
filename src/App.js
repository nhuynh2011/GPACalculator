import React, { Component } from 'react';
import FormField from './components/FormField'
import './App.css';

// Support calculating current GPA along with cumalative

class App extends Component {
  togglePast() {
    var past = document.getElementById('past');
    var checkbox = document.getElementById('checkbox');
    checkbox.checked ? past.style.display="inherit" : past.style.display="none";
    //if (checkbox.checked == true) past.style.display="inherit";
    //else past.style.display="none";
  }

  addAnotherClass(element) {
    console.log(element.previousSibling);
  }

  render() {
    return (
      <div>
        <form id="form" name="form">
          <label onChange={ () => this.togglePast() }>
            <input type="checkbox" id="checkbox" /> Calculate Cumaltive GPA? <br />
          </label>
          <FormField past />
          <FormField />
          <FormField />
          <FormField />
          <FormField />
          <FormField />
          <FormField />
          <FormField />
          <button id="addAnotherClass" onClick={ (element) => this.addAnotherClass(element.target) } type="button">Add another class</button>
          <button type="button">Calculate GPA</button>
        </form>
      </div>
    );
  }
}

export default App;
