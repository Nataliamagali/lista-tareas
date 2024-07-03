import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleTodo}
      />
      <button onClick={deleteTodo}>Eliminar</button>
    </li>
  );
};

export default TodoItem;
