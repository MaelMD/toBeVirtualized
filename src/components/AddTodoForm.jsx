import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        style={{ fontFamily: "Montserrat", flex: 1, marginRight: "0", borderRight: "none" }}
      />
      <button
        className="add-btn"
        type="submit"
        style={{ fontFamily: "Montserrat", marginLeft: "0" }}
      >
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default AddTodoForm;
