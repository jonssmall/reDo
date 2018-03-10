"use strict";
import React from 'react';

const todos = (props) => {
  const viewItems = props.todoData.map((t,i) => {
    const style = {
      textDecoration: t.complete ? 'line-through' : 'none'
    };
    const itemProps = {
      onClick: () => props.clickTodo(t),
      style
    };

    function confirmDelete (todo) {
      if (confirm("Are you sure you want to delete this task?")) props.deleteTodo(todo);
    }

    function editTask (todo) {
      const newText = prompt("Rewrite new task text");
      if (newText) {
        props.editTodo(todo, newText);
      }
    }

    return (
      <li key={i}>
        <span {...itemProps}>
          {t.task}
        </span>
        <button onClick={() => editTask(t)}>Edit</button>
        <button onClick={() => confirmDelete(t)}>Delete</button>
      </li>
    );
  });
  return (
    <ul>
      {viewItems}
    </ul>
  )
};

export default todos;