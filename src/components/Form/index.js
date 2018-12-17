import React, { Component } from 'react';
import FormField from '../FormField';

var id = 0;
var LetterGradeGPA = {
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'C-': 1.7,
  'D+': 1.3,
  'D': 1.0,
  'D-': .7,
  'WF': 0.0,
  'F': 0.0
}

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: [
        {
          'id': id++
        }, {
          'id': id++
        }, {
          'id': id++
        }, {
          'id': id++
        }, {
          'id': id++
        }, {
          'id': id++
        },
      ]
    };
  }

  addAnotherClass() {
    this.setState(() => {
      return {
        fields: this.state.fields.concat([
          {
            'id': id++
          }
        ])
      }
    });
  }

  removeClass() {
    id--;
    this.state.fields.pop();
    this.setState(() => {
      return {
        fields: this.state.fields
      }
    });
  }

  togglePast() {
    let x = document.getElementById('past');
    x.style.display === 'none' ? x.style.display = 'block' : x.style.display = 'none';
  }

  calculateGPA() {
    let credits = document.getElementsByName('credits'), grades = document.getElementsByName('grades');
    let total_grade_points = 0, total_credits = 0;

    if (document.getElementById('cum_gpa').checked) {
      let past_credits = document.getElementById('past-credits').value, past_gpa = document.getElementById('past-gpa').value;
      if (past_credits && !isNaN(past_credits) && past_gpa && !isNaN(past_gpa)) {
        total_grade_points = parseFloat(past_credits) * parseFloat(past_gpa);
        total_credits = parseFloat(past_credits);
      }
    }

    let length = credits.length, i = 0;
    for (; i < length; i++) {
      if (credits[i].value != '' && !isNaN(credits[i].value)) {
        if (grades[i].value === "select") {
          alert("Please select a grade for each class");
          return;
        } else if (grades[i].value === "P" || grades[i].value === "NP" || grades[i].value === "I/W") {
          continue;
        } else {
          total_credits += parseFloat(credits[i].value);
          total_grade_points += (parseFloat(credits[i].value) * LetterGradeGPA[grades[i].value]);
        }
      }
    }

    alert('Your GPA is: ' + (total_grade_points/total_credits).toFixed(2));
  }

  render() {
    return (
      <div>
        <form id="form" name="form">
          <label onChange={ () => this.togglePast() }>
            <input type="checkbox" id="cum_gpa" /> Calculate Cumulative GPA? <br />
          </label>
          <FormField past />
          {
            this.state.fields.map((obj) => {
              return (
              <FormField key={ obj.id } />
            )})
          }
        </form>
        <button onClick={ () => this.addAnotherClass() } type="button">Add another class</button>
        <button onClick={ () => this.removeClass() } type="button">Remove a class</button><br />
        <button onClick={ () => this.calculateGPA() } type="button">Calculate GPA</button>
      </div>
    )
  }
}

export default Form
