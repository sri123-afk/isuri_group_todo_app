React Todo App
Overview
This is a React application that includes user authentication and a todo list feature. Users can register, log in, manage todos (add, edit, delete, toggle completion), and have a simple UI for interacting with these features.

Features
User Authentication:

Registration: Users can sign up with an email, password, and name.
Login: Users can log in with their email and password.
Authentication State: Managed using React Context.
Todo List:

Display Todos: Lists all todos with title, description, and completion status.
Add Todo: Users can add new todos with a title and description.
Edit Todo: Users can update the title and description of existing todos.
Delete Todo: Users can remove todos from the list.
Toggle Completion: Users can mark todos as completed or incomplete.
Setup and Running Locally
Prerequisites
Node.js (>= 14.x)
npm (>= 6.x) or yarn
Installation
Clone the Repository

bash
Copy code
git clone <repository-url>
cd <repository-directory>
Install Dependencies

Using npm:

bash
Copy code
npm install
Or using yarn:

bash
Copy code
yarn install
Start the Development Server

Using npm:

bash
Copy code
npm start
Or using yarn:

bash
Copy code
yarn start
The application will be available at http://localhost:3000.

Additional Setup
No additional setup is required beyond installing dependencies and running the development server. The application uses local state for authentication, so no backend or additional configuration is needed.

Design Decisions and Features
Authentication:

User authentication is managed using React Context to avoid the need for a backend. This includes storing user data in the local state and handling login/logout functionality.
Todo List Management:

Todos are managed through React Context to handle CRUD operations (Create, Read, Update, Delete) and toggle completion status.
Todos are stored in the local state, ensuring that data persists during the session.
Styling:

Basic styling is applied using CSS. For a more advanced UI/UX, consider integrating a UI framework like Bootstrap or Material-UI.
Validation:

Basic validation is included in the registration and login forms to ensure required fields are completed.
