import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoApp = () => {
  // se inicia el estado con las tareas guardadas en localStorage, si existen
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');

  // se guardan  las tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // se agrega una nueva tarea a la lista
  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  //  se elimina una tarea de la lista
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // se alterna  la propiedad completado de una tarea
  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button onClick={addTodo}>Agregar</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            toggleTodo={() => toggleTodo(index)}
            deleteTodo={() => deleteTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
