README.md Content Sample
# TaskFlow - Collaborative Project Management API

## 🚀 Overview
Backend API system to manage multiple development teams, projects, tasks, collaboration, and analytics.

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
