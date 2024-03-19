import React from 'react'

const TaskSummary = ({todos}) => {
    const completedTasksCount = todos.filter(todo => todo.completed).length;
    const totalTasksCount = todos.length;
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h2 style={{color: '#030027'}}>{completedTasksCount} / {totalTasksCount} tasks done</h2>
      <p style={{ fontSize: '48px', fontWeight: 'bold' , color: '#05668d'}}>JUST DO IT</p>
    </div>
  )
}

export default TaskSummary
