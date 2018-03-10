"use strict";
import React from 'react';
import TodoView from './todoView';
import TodoAddForm from './todoAddForm';

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
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleComplete(todo) {
    const newList = [...this.state.todos];
    newList.find(t => t === todo).complete = !todo.complete;
    this.setState({
      todos: newList
    });
  }

  handleCreate(newTodo) {
    const newList = [...this.state.todos, newTodo];
    this.setState({
      todos: newList
    });
  }

  handleDelete(todo) {
    const newList = this.state.todos.filter(t => t !== todo);
    this.setState({
      todos: newList
    });
  }

  handleEdit(todo, newText) {
    const newList = [...this.state.todos];
    newList.find(t => t === todo).task = newText;
    this.setState({
      todos: newList
    });
  }
  
  render() {
    return (
      <div>
        <TodoAddForm submitForm={this.handleCreate} />
        <TodoView 
          todoData={this.state.todos} 
          clickTodo={this.handleComplete} 
          deleteTodo={this.handleDelete} 
          editTodo={this.handleEdit}
        />
      </div>
    )
  }
}