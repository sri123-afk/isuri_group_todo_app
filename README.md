# React Todo App
## Overview

This is a React application that includes user authentication and a todo list feature. Users can register, log in, manage todos (add, edit, delete, toggle completion), and have a simple UI for interacting with these features.

### Features
User Authentication
Registration
Login
Authentication State
Todo List

Display Todos
Add Todo
Edit Todo
Delete Todo
Toggle Completion

# Setup and Running Locally

## Prerequisites

Node.js (>= 14.x)
npm (>= 6.x) or yarn
Installation
Clone the Repository


git clone <repository-url>
cd <repository-directory>
Install Dependencies

Using npm:

npm install
Or using yarn:

yarn install
Start the Development Server

Using npm:


npm start
Or using yarn:

yarn start

The application will be available at http://localhost:3000.



# Design Decisions and Features

## Authentication:

User authentication is managed using React Context to avoid the need for a backend. This includes storing user data in the local state and handling login/logout functionality.
Todo List Management:

Todos are managed through React Context to handle CRUD operations (Create, Read, Update, Delete) and toggle completion status.
Todos are stored in the local state, ensuring that data persists during the session.
Styling:

Basic styling is applied using CSS. For a more advanced UI/UX, consider integrating a UI framework like Bootstrap or Material-UI.
Validation:

Basic validation is included in the registration and login forms to ensure required fields are completed.
