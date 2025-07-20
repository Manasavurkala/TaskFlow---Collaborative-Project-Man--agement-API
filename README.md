README.md Content Sample
# TaskFlow - Collaborative Project Management API

## 🚀 Overview
Backend API system to manage multiple development teams, projects, tasks, collaboration, and analytics.
# TaskFlow - Collaborative Project Management API

TaskFlow is a robust backend API system designed for startups and organizations to manage multiple development teams working on various projects simultaneously. It supports project hierarchies, task dependencies, real-time collaboration, and analytics.

---

## 🚀 Features

### 1. Project & Team Management
- Multi-level project creation with parent-child relationships
- Role-based team formation (e.g., Manager, Developer)
- Timeline and milestone tracking
- Resource allocation and capacity planning

### 2. Task Management
- Task creation with priorities and categories
- Assign tasks to multiple team members
- Manage task dependencies
- Status tracking with customizable workflow states

### 3. Collaboration Features
- Threaded comment system
- File attachment support
- Activity feed (project timeline)
- Notification system (email/WebSocket integration)

### 4. Analytics & Reporting
- Project progress visualization
- Burndown charts and productivity metrics
- Time tracking and estimation
- Custom report generation with filters

---

## 🧱 Folder Structure
## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Manasavurkala/TaskFlow---Collaborative-Project-Man--agement-API.git
cd TaskFlow---Collaborative-Project-Man--agement-API
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure Environment Variables
Create a .env file:

env
Copy
Edit
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=taskflow_db
JWT_SECRET=your_jwt_secret
4. Setup Database
Run the setup.sql script in MySQL:

bash
Copy
Edit
mysql -u root -p < setup.sql
Or connect in terminal:

bash
Copy
Edit
mysql -u root -p
USE taskflow_db;
5. Run the Server
bash
Copy
Edit
npm run dev
Server should start on:

arduino

http://localhost:5000
📬 API Documentation
✅ Swagger UI
Once server is running:

bash

http://localhost:5000/api-docs
Interactive documentation powered by Swagger.

✅ Postman Collection
Import the file:
taskflow.postman_collection.json

Includes:

Auth (Register/Login)

Projects

Tasks

Teams

Comments

Reports

🧪 Technologies Used
Node.js + Express

MySQL + Sequelize ORM

JWT Authentication

Swagger/OpenAPI

Postman

Socket.io (for real-time collaboration)

Bcrypt.js,dotenv



## 🛠 Tech Stack
- Node.js, Express.js
- MySQL (3NF normalized)
- JWT Authentication
- Swagger API Docs
- Postman Testing

## 🗃 Folder Structure
- `/controllers` - Business logic
- `/routes` - API routing
- `/models` - DB interactions
- `/db` - SQL scripts
- `/postman` - Postman test collection

## ⚙️ Setup Instructions
1. Clone the repo:
   ```bash
   git clone https://github.com/Manasavurkala/TaskFlow---Collaborative-Project-Man--agement-API.git
2.Install dependencies:
npm install
3.Configure .env:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=taskflow
JWT_SECRET=your_secret
Import setup.sql in MySQL to create DB

4.Run server:
npm run dev
🧪 API Testing
5.Use Postman. Import this:
/postman/TaskFlow.postman_collection.json
## 🗄️ Database Schema

### Users Table
| Column     | Type         | Description            |
|------------|--------------|------------------------|
| id         | INT (PK)     | Auto-incremented ID    |
| name       | VARCHAR(100) | User full name         |
| email      | VARCHAR(100) | Unique email           |
| password   | VARCHAR(255) | Hashed password        |
| role       | ENUM         | 'admin', 'member'      |

### Projects Table
| Column     | Type         | Description            |
|------------|--------------|------------------------|
| id         | INT (PK)     | Project ID             |
| name       | VARCHAR(100) | Project name           |
| owner_id   | INT (FK)     | Refers `users(id)`     |
| ...        | ...          | ...                    |

📝 Full table creation and data can be found in [`db/setup.sql`](db/setup.sql)
