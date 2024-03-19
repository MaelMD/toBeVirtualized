import React, { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TaskSummary from './components/TaskSummary';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false, clicks: 0 };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, newTask) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: newTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const incrementClicks = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, clicks: todo.clicks + 1 } : todo));
  };

  return (
    <div className="app">
      {todos.length > 0 && todos.filter(todo => todo.completed).length > 0 ? <TaskSummary todos={todos}></TaskSummary> : ""}
      <h1>Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} incrementClicks={incrementClicks} updateTodo={updateTodo}/>
    </div>
  );
};

export default App;
