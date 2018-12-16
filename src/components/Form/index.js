import React, { Component } from 'react';
import FormField from '../FormField';

var id = 0;

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

  render() {
    return (
      <div>
        <form id="form" name="form">
          <label onChange={ () => this.togglePast() }>
            <input type="checkbox" id="checkbox" /> Calculate Cumulative GPA? <br />
          </label>
          <table>
            <tr>

            </tr>
            <FormField past />
            {
              this.state.fields.map((obj) => {
                return (
                <FormField key={ obj.id } />
              )})
            }
          </table>
        </form>
        <button onClick={ () => this.addAnotherClass() } type="button">Add another class</button>
        <button onClick={ () => this.removeClass() } type="button">Remove a class</button>
      </div>
    )
  }
}

export default Form
