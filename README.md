

# 📝 Task Management Backend

A powerful and scalable **backend service** for the Task Management Application, built with **Express.js**, **PostgreSQL**, and **Prisma ORM**.
This backend provides secure REST APIs for managing tasks, authentication, and user data.

---

## ⚡ Tech Stack

- **Express.js** – Fast and minimal web framework for Node.js
- **PostgreSQL** – Reliable and robust relational database
- **Prisma ORM** – Type-safe and modern ORM for database queries
- **JWT Authentication** – Secure user authentication
- **Node.js** – Server-side JavaScript runtime

---

## ✨ Features

- 🔐 User authentication (Signup & Login with JWT)
- 📌 Create, Read, Update, and Delete (CRUD) tasks
- ✅ Mark tasks as complete/incomplete
- 📂 PostgreSQL database with Prisma ORM
- 📡 RESTful API endpoints
- ⚡ Optimized for scalability and performance

---

## 📂 Project Structure

```

backend/
├── prisma/               \# Prisma schema and migrations
├── src/
│   ├── controllers/      \# Route controllers (task, user, auth)
│   ├── middleware/       \# Auth middleware (JWT verification)
│   ├── routes/           \# Express routes
│   ├── services/         \# Database services using Prisma
│   ├── utils/            \# Utility functions
│   ├── app.js            \# Express app setup
│   └── index.js          \# Entry point
├── .env                  \# Environment variables
├── package.json
└── README.md

````

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/) (>= 16.x)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Git](https://git-scm.com/)

---

### 1️⃣ Clone the Repository

```bash
git clone [https://github.com/Debasish728/To-Do-Application-Backend.git](https://github.com/Debasish728/To-Do-Application-Backend.git)
cd To-Do-Application-Backend
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root folder:

```
DATABASE_URL="postgresql://username:password@localhost:5432/taskdb?schema=public"
JWT_SECRET="your_jwt_secret"
PORT=5000
```

### 4️⃣ Setup Database with Prisma

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5️⃣ Run the Server

```bash
npm run dev
```

-----

## 🔗 API Endpoints

### Auth

  - `POST /api/auth/register` → Register new user
  - `POST /api/auth/login` → Login user & get token

### Tasks

  - `GET /api/tasks` → Get all tasks (for logged-in user)
  - `POST /api/tasks` → Create new task
  - `PATCH /api/tasks/:id` → Update task
  - `DELETE /api/tasks/:id` → Delete task

-----

## 🛠️ Available Scripts

```bash
npm run dev       # Run in development with nodemon
npm run start     # Run in production
npx prisma studio # Open Prisma Studio (DB UI)
```

-----

## 🤝 Contributing

Contributions are welcome\!

1.  Fork the repo
2.  Create a new branch (`feature/your-feature`)
3.  Commit your changes
4.  Push to your branch
5.  Open a Pull Request

-----

## 👨‍💻 Author

**Debasish Das**
