import React, { Component } from 'react';
import FormField from './components/FormField'
import './App.css';

// Support calculating current GPA along with cumalative

class App extends Component {
  togglePast() {
    var past = document.getElementById('past');
    var checkbox = document.getElementById('checkbox');
    console.log(checkbox.checked);
    //element.checked ? element.display="none" : element.display="inherit";
    if (checkbox.checked == true) past.style.display="inherit";
    else past.style.display="none";
  }

  render() {
    return (
      <div>
        <form id="form" name="form">
          <label onClick={ () => this.togglePast() }>
            <input type="checkbox" id="checkbox" /> Calculate Cumaltive GPA? <br />
          </label>
          <FormField past />
          <FormField />
          <FormField />
          <FormField />
          <FormField />
          <FormField />
          <button type="button">Calculate GPA</button>
        </form>
      </div>
    );
  }
}

export default App;
