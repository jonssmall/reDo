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
    return (
      <li key={i}>
        <span {...itemProps}>
          {t.task}
        </span>
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