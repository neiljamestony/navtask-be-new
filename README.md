NavTask Backend API

A RESTful backend API for NavTask, a task management application that allows users to securely manage tasks, subtasks, and file attachments.

Built with Node.js, Express.js, PostgreSQL, Prisma ORM, and JWT Authentication.

⸻

🚀 Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Prisma ORM
* JSON Web Token (JWT)
* RESTful API
* Multer (File Uploads)
* TypeScript

⸻

✨ Features

Authentication

* User registration
* User login
* User logout
* JWT authentication
* Token expiration
* Protected routes

Task Management

* Create task
* Retrieve all tasks
* Retrieve a single task
* Update task
* Delete one or multiple tasks

Subtask Management

* Create subtasks
* Update subtasks
* Delete subtasks

Attachment Management

* Upload multiple attachments
* Remove attachments
* Associate attachments with tasks

⸻

📁 Project Structure

src/
├── controllers/
├── middleware/
├── routes/
├── services/
├── lib/
├── generated/
│   └── prisma/
├── utils/
├── uploads/
└── server.ts
prisma/
├── schema.prisma
└── migrations/

⸻

⚙️ Installation

1. Clone the repository

git clone <repository-url>
cd navtask-be-new

2. Install dependencies

npm install

3. Create an environment file

Create a .env file in the project root.

DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=todo_app
DATABASE_URL="postgresql://username:password@localhost:5432/todo_app?schema=NAVTASK"
JWT_ACCESS_SECRET=your_secret_key

⸻

4. Generate the Prisma Client

npx prisma generate

If using an existing database:

npx prisma db pull

If using Prisma Migrations:

npx prisma migrate dev

⸻

5. Run the application

Development

npm run dev

Production

npm start

⸻

🔐 Authentication

Protected endpoints require a valid JWT Access Token.

Example:

Authorization: Bearer <access_token>

⸻

📌 API Endpoints

Authentication

Method	Endpoint	Auth	Description
POST	/auth/register	❌	Register a new user
POST	/auth/login	❌	Authenticate a user
POST	/auth/logout	✅	Logout the current user
GET	/auth/hasAccess	✅	Validate the current access token
GET	/auth/getUserData	✅	Retrieve the authenticated user’s information

⸻

Tasks

Method	Endpoint	Auth	Description
POST	/task/create	✅	Create a task with optional attachments
POST	/task/update	✅	Update an existing task
POST	/task/getOne	✅	Retrieve a specific task
POST	/task/getAll	✅	Retrieve all tasks
POST	/task/remove	✅	Delete one or more tasks

⸻

File Upload

The following endpoints support file uploads using multipart/form-data.

Endpoint	Field Name	Maximum Files
/task/create	attachments	5
/task/update	attachments	5

⸻

📦 Example Requests

Login

POST /auth/login
Content-Type: application/json
{
  "username": "john_doe",
  "password": "password123"
}

⸻

Create Task

POST /task/create
Content-Type: multipart/form-data
Authorization: Bearer <access_token>

Field	Type	Required
title	String	✅
description	String	❌
due_date	String (MM/DD/YYYY)	❌
priority	String	✅
status	String	✅
attachments	File[]	❌ (Maximum of 5 files)

⸻

Update Task

Supports:

* Updating task information
* Uploading additional attachments
* Removing existing attachments
* Creating new subtasks
* Updating subtasks
* Removing subtasks

⸻

🗄 Database

This project uses PostgreSQL with Prisma ORM.

Main entities:

* Users
* Tasks
* Subtasks
* Attachments

Relationships:

User
 └── Tasks
      ├── Subtasks
      └── Attachments

⸻

🛡 Security

* JWT Authentication
* Protected Routes
* Password Hashing
* Prisma ORM (Type-safe queries)
* Parameterized database queries
* Token expiration

⸻

📖 Useful Prisma Commands

Generate Prisma Client

npx prisma generate

Pull schema from an existing database

npx prisma db pull

Create a new migration

npx prisma migrate dev

Open Prisma Studio

npx prisma studio

⸻

📌 Future Improvements

* Refresh Token authentication
* Email verification
* Password reset
* Pagination
* Search & filtering
* Task sorting
* Swagger/OpenAPI documentation
* Unit and integration testing
* Docker support
* CI/CD pipeline

⸻

👨‍💻 Author

Developed by Neil James Tony Valerio

⸻

📄 License

This project is intended for educational, learning, and portfolio purposes.
