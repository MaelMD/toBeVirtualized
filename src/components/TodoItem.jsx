import React, { useState } from "react";

const TodoItem = ({ todo, deleteTodo, toggleCompleted, incrementClicks, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateTodo(todo.id, editedTask);
    setIsEditing(false);
  };

  return (
    <li onClick={() => incrementClicks(todo.id)}>
      <label className="container">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
            e.stopPropagation();
            toggleCompleted(todo.id);
          }}
        />
        <div className="checkmark"></div>
      </label>
      {isEditing ? (
        <form onSubmit={handleSave}>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            onBlur={handleSave}
          />
        </form>
      ) : (
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.task}
        </span>
      )}
      <div>
        {todo.clicks > 0 && (
          <span
            style={{
              display: "inline-block",
              padding: "6px 10px",
              margin: "0 10px",
              color: "#05668d",
              fontFamily: "Montserrat",
              borderRadius: "3px",
              cursor: "default",
            }}
          >
            {todo.clicks}
          </span>
        )}
        <button className="edit-btn" onClick={(e) => { e.stopPropagation(); handleEdit(); }} style={{marginRight: "5px"}}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="delete-btn" onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;