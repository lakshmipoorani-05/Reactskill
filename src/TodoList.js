import { useState } from "react";
import "./App.css";

export default function TodoList() {
  const [tasks, setTasks] = useState(["Buy milk", "Study React", "Exercise"]);
  const [newTask, setNewTask] = useState("");

  // Add task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask(""); // clear input
    }
  };

  // Delete task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2>🌟 My Tasks 🌟</h2>

      {/* Input + Button */}
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={addTask}>➕ Add</button>
      </div>

      {/* Conditional rendering */}
      {tasks.length === 0 ? (
        <p className="empty">🎉 No tasks for today 🎉</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
