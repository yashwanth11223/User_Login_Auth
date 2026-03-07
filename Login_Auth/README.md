# User Authentication System (Next.js + NextAuth + MongoDB)

A secure **User Authentication System** built with **Next.js**, **NextAuth.js**, and **MongoDB**.  
This project demonstrates a full authentication workflow including **user registration, login, protected routes, password reset via email, and session management**.

It is designed as a **learning project and starter template** for developers who want to implement authentication in modern **Next.js App Router applications**.

---

# 🚀 Features

- User Registration API
- Secure Login using NextAuth Credentials Provider
- Password Hashing using bcrypt
- MongoDB Database Integration
- Email-based Password Reset
- Session-based Authentication
- Protected Routes using Middleware
- Blog and Dashboard Example Pages
- Dynamic Routes (`blogpost/[slugs]`)
- Reusable React Components
- Environment-based Configuration

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js (App Router) | Fullstack React Framework |
| NextAuth.js | Authentication & Session Handling |
| MongoDB | Database |
| bcryptjs | Password Hashing |
| Nodemailer | Email Service for Password Reset |
| CSS | Styling |
| Middleware | Route Protection |

---

# 📂 Project Structure
```
userauth/
│
├── .next/
│
├── app/
│   │
│   ├── api/
│   │   ├── register/
│   │   │   └── route.js
│   │   │
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.js
│   │
│   ├── blogs/
│   │   └── page.js
│   │
│   ├── blogpost/
│   │   └── [slugs]/
│   │       └── page.js
│   │
│   ├── dashboard/
│   │   └── page.js
│   │
│   ├── login/
│   │   └── page.js
│   │
│   ├── register/
│   │
│   ├── reset-password/
│   │   └── page.js
│   │
│   ├── service/
│   │   └── page.js
│   │
│   ├── secret/
│   │   └── route.js
│   │
│   ├── components/
│   │   └── Sign.js
│   │
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── lib/
│   ├── mongodb.js
│   └── sendEmail.js
│
├── models/
│   └── User.js
│
├── node_modules/
│
├── public/
│
├── .env.local
├── .gitignore
├── jsconfig.json
├── LICENSE
├── middleware.js
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── README.md
```


---

# 📁 Folder Explanation

### app/
Contains all pages and API routes using **Next.js App Router**.

### app/api/
Backend API routes.

- **register/** – API for creating new users  
- **auth/[...nextauth]/** – NextAuth authentication configuration  

### blogs/
Example blog listing page.

### blogpost/[slugs]/
Dynamic blog post pages.

### dashboard/
Protected user dashboard after login.

### login/
Login page UI.

### register/
User registration page.

### reset-password/
Allows users to reset their password through email.

### service/
Example service page.

### secret/
Example protected API route.

### components/
Reusable React components.

### lib/
Helper utilities.

- **mongodb.js** – MongoDB connection  
- **sendEmail.js** – Email sending logic  

### models/
Database models.

- **User.js** – MongoDB user schema  

### middleware.js
Protects routes and handles authentication checks.

---

# 🔐 Authentication Flow

1. User registers using email and password.
2. Password is hashed using **bcrypt** before storing in MongoDB.
3. User logs in using credentials.
4. **NextAuth Credentials Provider** verifies user data.
5. If valid, a session is created.
6. Middleware protects private routes like `/dashboard`.
7. Password reset emails are sent using Nodemailer.

---

# ⚙️ Installation

## 1️⃣ Clone the Repository
```
git clone https://github.com/yashwanth11223/User_Login_Auth.git
```
---

## 2️⃣ Navigate to Project Folder
```
cd User_Login_Auth
```
---

## 3️⃣ Install Dependencies
```
npm install
```
---

## 4️⃣ Setup Environment Variables

Create a file named **.env.local**
```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```
---

## 5️⃣ Run the Development Server
```
npm run dev
```
---
Open the browser:
```
http://localhost:3000
```
---

# 🔒 Protected Routes

Middleware protects routes such as:
```
/dashboard
/secret
```
Only authenticated users can access them.

---

# ✉️ Password Reset System

The project includes an **email-based password reset feature**.

Flow:

1. User requests password reset  
2. System sends reset link via email  
3. User clicks link  
4. Password is updated securely  

Email sending is implemented using **Nodemailer**.

---


# 📌 Future Improvements

- Google OAuth Login
- GitHub OAuth Login
- Email Verification
- Rate Limiting for Login
- User Profile Page
- Admin Dashboard
- Role-based Access Control

---

# 👨‍💻 Author

**Yashwanth**

GitHub  
https://github.com/yashwanth11223

---

# 📜 License

This project is licensed under the **MIT License**.

---

# ⭐ Support

If you found this project helpful, please consider **starring the repository** ⭐
