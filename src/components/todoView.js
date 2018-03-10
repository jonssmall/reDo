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

    return (
      <li key={i}>
        <span {...itemProps}>
          {t.task}
        </span>
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