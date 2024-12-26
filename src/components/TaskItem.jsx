import React, { useState } from "react";

const TaskItem = ({ task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      editTask(task.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <p>{task.text}</p>
      )}
      <div>
      <button className="edit-save-btn" onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
