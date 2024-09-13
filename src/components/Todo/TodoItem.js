// src/components/Todo/TodoItem.js
import React, { useState, useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

function TodoItem({ todo }) {
  const { editTodo, deleteTodo, toggleCompletion } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleSave = () => {
    editTodo(todo.id, { title, description });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button onClick={() => toggleCompletion(todo.id)}>
            {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
