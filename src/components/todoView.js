"use strict";
import React from 'react';

const todos = (props) => {
  return props.todoData.map(t => {
    return (
      <div>
        <span onClick={() => props.clickTodo(t)}>
          {t.task} complete: {String(t.complete)}
        </span>
      </div>
    );
  });
};

export default todos;