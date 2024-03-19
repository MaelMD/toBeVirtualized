import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, toggleCompleted, incrementClicks, updateTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} incrementClicks={incrementClicks} updateTodo={updateTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
