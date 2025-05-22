# Task Management Application

A simple Task Management Application built with Node.js, Express.js, MongoDB. This application allows users to manage tasks with prioritization, user authentication, and email notifications.

## Features

### User Management
- User registration and login with JWT authentication.

### Task Management
- CRUD operations for tasks (Create, Read, Update, Delete).
- Task prioritization (Low, Medium, High).
- Task status management (Pending, Completed).

### Notifications
- Email notifications using Nodemailer for important events.

### Testing
- Fully testable using Postman.

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JWT (JSON Web Tokens)
- **Email Service**: Nodemailer

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (version 14 or later)
- MongoDB (running locally or remotely)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Fahimul-06/task-management-app.git
   cd task-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the MongoDB server (if running locally):
   ```bash
   mongod
   ```

4. Start the application:
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:4000`.

## API Endpoints

### User Routes

#### Register User
- **URL**: `POST /api/users/register`
- **Body**:
  ```json
  {
    "name": "Your Name",
    "email": "yourmail@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully!"
  }
  ```

#### Login User
- **URL**: `POST /api/users/login`
- **Body**:
  ```json
  {
    "email": "yourmail@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "<JWT_TOKEN>"
  }
  ```

### Task Routes

#### Create Task
- **URL**: `POST /api/tasks`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <JWT_TOKEN>"
  }
  ```
- **Body**:
  ```json
  {
    "title": "Complete project",
    "description": "Finish the Task Management project",
    "priority": "High"
  }
  ```
- **Response**:
  ```json
  {
    "_id": "<task_id>",
    "title": "Complete project",
    "description": "Finish the Task Management project",
    "priority": "High",
    "status": "Pending",
    "user": "<user_id>"
  }
  ```

#### Get All Tasks
- **URL**: `GET /api/tasks`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <JWT_TOKEN>"
  }
  ```
- **Response**:
  ```json
  [
    {
      "_id": "<task_id>",
      "title": "Complete project",
      "description": "Finish the Task Management project",
      "priority": "High",
      "status": "Pending",
      "user": "<user_id>"
    }
  ]
  ```

#### Update Task
- **URL**: `PUT /api/tasks/:id`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <JWT_TOKEN>"
  }
  ```
- **Body**:
  ```json
  {
    "status": "Completed"
  }
  ```
- **Response**:
  ```json
  {
    "_id": "<task_id>",
    "title": "Complete project",
    "description": "Finish the Task Management project",
    "priority": "High",
    "status": "Completed",
    "user": "<user_id>"
  }
  ```

#### Delete Task
- **URL**: `DELETE /api/tasks/:id`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <JWT_TOKEN>"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Task deleted successfully!"
  }
  ```

## Testing

1. Use [Postman](https://www.postman.com/) to test the API endpoints.
2. Ensure to include the JWT token in the `Authorization` header for protected routes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

