"use strict";
import React from 'react';

export default class TodoAddForm extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      newTask: ''
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  addTodo() {
    this.props.submitForm({
      task: this.state.newTask,
      complete: false
    });
    this.setState({
      newTask: ''
    });
  }

  handleInput(e) {
    this.setState({newTask: e.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInput} value={this.state.newTask} />
        <button onClick={this.addTodo}>Add</button>
      </div>
    );
  }
}