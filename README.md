
# To-Do App

A simple To-Do application built with Node.js that allows users to manage their daily tasks. This app supports basic CRUD operations - Create, Read, Update, and Delete - for managing tasks, with a RESTful API backend.

## Features

- Add tasks to your to-do list.
- View all tasks.
- Update the status or details of existing tasks.
- Delete tasks when completed.

## Built With

- **Node.js** - Backend framework for creating server and APIs.
- **Express.js** - Web framework for building REST APIs.
- **MongoDB** - Database for storing tasks data.
- **Mongoose** - ODM library for MongoDB and Node.js.
- **Body-parser** - Middleware for parsing incoming request bodies.

## Prerequisites

To run this app locally, ensure you have the following installed:

- **Node.js** - [Download Node.js](https://nodejs.org/)
- **MongoDB** - [Download MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the root of the project with the following content:

   ```plaintext
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/todoDB
   ```

5. Start the application:

   ```bash
   npm start
   ```

6. Open the application in your browser or API client at:

   ```
   http://localhost:3000
   ```

## API Endpoints

| Method | Endpoint           | Description                |
|--------|---------------------|----------------------------|
| GET    | `/api/tasks`       | Retrieve all tasks         |
| POST   | `/api/tasks`       | Add a new task             |
| PUT    | `/api/tasks/:id`   | Update an existing task    |
| DELETE | `/api/tasks/:id`   | Delete a specific task     |

### Request Examples

#### Add a New Task

- **Endpoint**: `POST /api/tasks`
- **Body**:

  ```json
  {
    "title": "Buy groceries",
    "description": "Milk, Bread, Cheese, Eggs",
    "status": "pending"
  }
  ```

#### Update a Task

- **Endpoint**: `PUT /api/tasks/:id`
- **Body**:

  ```json
  {
    "status": "completed"
  }
  ```

## Folder Structure

```
todo-app/
│
├── config/
│   └── db.js          # Database configuration
│
├── controllers/
│   └── taskController.js # Task-related logic
│
├── models/
│   └── task.js        # Task model schema
│
├── routes/
│   └── taskRoutes.js  # Task API routes
│
├── .env               # Environment variables
├── app.js             # Main app setup
└── server.js          # Server startup file
```

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Framework for handling HTTP requests
- **MongoDB** - Database for storing tasks
- **Mongoose** - MongoDB ODM for schema modeling

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

