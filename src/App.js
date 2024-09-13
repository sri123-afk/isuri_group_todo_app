// src/App.js
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { TodoProvider } from './context/TodoContext';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import TodoList from './components/Todo/TodoList';
import AddTodo from './components/Todo/AddTodo';
import Header from './components/Header';
// src/App.js
import './styles/App.css';


function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <Header />
        <main>
          <Register />
          <Login />
          <AddTodo />
          <TodoList />
        </main>
      </TodoProvider>
    </AuthProvider>
  );
}

export default App;
