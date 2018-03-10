"use strict";
import React from 'react';
import TodoView from './todoView';

export default class TodoContainer extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {task: "Write app", complete: false},
        {task: "Call mom", complete: true}
      ]
    };
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleComplete(todo) {
    const newList = [...this.state.todos];
    newList.find(t => t === todo).complete = !todo.complete;
    this.setState({
      todos: newList
    });
  }
  
  render() {
    return <TodoView todoData={this.state.todos} clickTodo={this.handleComplete} />
  }
}