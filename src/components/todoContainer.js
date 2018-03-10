"use strict";
import React from 'react';

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
  }
  
  render() {
    const todoViews = this.state.todos.map(t =>{
      return (
        <div>
          <span>
            {t.task} complete: {String(t.complete)}
          </span>
        </div>
      )
    });
    return todoViews;
  }
}