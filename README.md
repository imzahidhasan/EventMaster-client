# 🎉 EventMaster — Event Management Web App (Client Side)

**EventMaster** is a full-featured event management web application where users can create, browse, and join events easily. This is the **frontend (client)** built with **React**, **Vite**, and **Tailwind CSS**.

---

## 🔗 Live Demo

[🔗 View Live](https://event-master-101.netlify.app)

---

## ⚙️ Tech Stack

- ⚛️ **React** (via Vite)
- 🎨 **Tailwind CSS**
- 🍪 **Axios with HTTP-only Cookie Auth**
- 🌐 **React Router DOM**
- 💾 **Context API** for Auth Management
- 🔒 Private Routes & Protected Pages

---

## ✨ Features

- 🔐 **Custom Authentication** (Login/Register)
- 🧠 **Context-based Auth State** with React Context API
- 📅 **Add, View & Join Events**
- 🔍 **Search & Filter Events** (by title, today, week, month, etc.)
- 🙋 **Join Event Once Only**
- 🧾 **My Events Page** (edit/delete own events)
- 🎯 **Fully Responsive UI**

---

## 📁 Folder Structure
```
src/
│
├── assets/       # Images, logo, etc.
├── components/   # Reusable components (Navbar, EventCard, etc.)
├── context/      # AuthContext (global user state)
├── pages/        # Route-level pages (Login, Register, Events, etc.)
├── App.jsx       # Main routing setup
├── main.jsx      # Entry point
└── index.css     # Tailwind + Google Fonts
```

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js (v18+ recommended)
- Backend API must be running (e.g., on `http://localhost:5000`)

---

### 📦 Install Dependencies

```bash
npm install
```

### 🚀 Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`
