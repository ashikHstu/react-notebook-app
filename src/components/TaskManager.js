import React, { useState } from 'react';

const TaskManager = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim()) {
      if (isEditing) {
        // Update the task in editing mode
        const updatedTasks = [...taskList];
        updatedTasks[editIndex] = task;
        setTaskList(updatedTasks);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        // Add a new task
        setTaskList([...taskList, task]);
      }
      setTask(''); // Clear input field
    }
  };

  const editTask = (index) => {
    setTask(taskList[index]); // Set input field with task to edit
    setIsEditing(true);
    setEditIndex(index);
  };

  const removeTask = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  return (
    <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Input and Button */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a task"
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            marginRight: '10px',
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '4px',
            backgroundColor: isEditing ? '#ffc107' : '#28a745',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {isEditing ? 'Update Task' : 'Add Task'}
        </button>
      </div>

      {/* Task List */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {taskList.map((task, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#f8f9fa',
              padding: '10px',
              marginBottom: '5px',
              borderRadius: '4px',
              border: '1px solid #ddd',
            }}
          >
            <span>{task}</span>
            <div>
              <button
                onClick={() => editTask(index)}
                style={{
                  padding: '5px 10px',
                  fontSize: '14px',
                  marginRight: '10px',
                  borderRadius: '4px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Edit
              </button>
              <button
                onClick={() => removeTask(index)}
                style={{
                  padding: '5px 10px',
                  fontSize: '14px',
                  borderRadius: '4px',
                  backgroundColor: '#dc3545',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
