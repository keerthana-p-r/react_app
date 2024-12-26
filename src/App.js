import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask }]);
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Edit a task
  const editTask = (taskId, updatedText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: updatedText } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default App;

