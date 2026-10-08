# TaskFlow – Full Stack Task Management System

TaskFlow is a full-stack task management application built using React.js, Node.js, Express.js and PostgreSQL.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- View total, pending and completed tasks
- Store tasks in PostgreSQL
- REST API integration

## Tech Stack

- React.js
- JavaScript
- Node.js
- Express.js
- PostgreSQL
- Git & GitHub

## Project Structure

TaskFlow/
├── frontend/
├── backend/
├── README.md
└── .gitignore

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Add a task |
| PATCH | /api/tasks/:id | Complete/uncomplete task |
| DELETE | /api/tasks/:id | Delete a task |

## How It Works

React frontend sends requests to the Express.js backend.
The backend processes the request and communicates with PostgreSQL.
The response is then displayed in the React interface.

## Author

Suprava Khuntia