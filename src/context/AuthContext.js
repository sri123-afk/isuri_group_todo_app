// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const login = (userData) => setUser(userData);

  const logout = () => setUser(null);

  const register = (userData) => {
    setRegisteredUsers([...registeredUsers, userData]);
    login(userData);  // Automatically log in the user after registration
  };

  const isRegistered = (email) => registeredUsers.some(user => user.email === email);

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isRegistered }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
