import React, { Component } from 'react';

class FormField extends Component {

  render() {
    if (this.props.past) {
      return (
        <div id="past" style={{ display:'none' }}>
          <input placeholder="Past Credits" type="text"/>
          <input placeholder="Past GPA" type="text"/>
        </div>
      )
    } else return (
      <div>
        <input placeholder="Class Name" type="text"/>
        <input placeholder="Credits" type="text" id="credits"/>
        <select name="grade" id="grade">
          <option value="A">A</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="B-">B-</option>
          <option value="C+">C+</option>
          <option value="C">C</option>
          <option value="C-">C-</option>
          <option value="D+">D+</option>
          <option value="D">D</option>
          <option value="D-">D-</option>
          <option value="F">F</option>
          <option value="WF">WF</option>
          <option value="P">P</option>
          <option value="NP">NP</option>
          <option value="I/W">I/W</option>
        </select>
      </div>
    )
  };
}

export default FormField;
