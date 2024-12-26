import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      ) : (
        <p>No tasks available. Add one!</p>
      )}
    </div>
  );
};

export default TaskList;
