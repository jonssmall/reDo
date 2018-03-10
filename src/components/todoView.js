"use strict";
import React from 'react';

const todos = (props) => {
  const viewItems = props.todoData.map((t,i) => {
    const style = {
      textDecoration: t.complete ? 'line-through' : 'none'
    };
    const itemProps = {
      key: i,
      onClick: () => props.clickTodo(t),
      style
    };
    return (
      <li>
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