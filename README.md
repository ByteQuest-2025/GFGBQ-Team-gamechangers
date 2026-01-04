# 🚀 Project 


💻 Problem Statement : Predictive Hospital Resource & Emergency Load Intelligence System

* Hospitals often struggle to manage emergency care due to sudden surges in patient admissions caused by outbreaks, seasonal changes, accidents, and public health crises. These unpredictable spikes lead to ICU shortages, overworked staff, delayed treatment, and reduced quality of care. Most hospitals rely on reactive decision-making, responding only after resources are strained, which results in inefficiencies and staff burnout.

* This project proposes a Predictive Hospital Resource & Emergency Load Intelligence System that uses AI and Machine Learning to forecast emergency admissions, ICU demand, and staff workload in advance. By analyzing historical hospital data along with external factors such as disease trends and seasonal patterns, the system provides early warnings and actionable insights, enabling proactive resource planning, optimized staff allocation, and improved patient outcomes.

<p align="center"> <img src="https://img.shields.io/badge/status-active-success" /> <img src="https://img.shields.io/badge/made%20with-react-blue" /> <img src="https://img.shields.io/badge/license-MIT-green" /> </p>

---

## 📌 Table of Contents

* [Overview](#-overview)
* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Project Structure](#-project-structure)
* [Installation](#-installation)
* [Usage](#-usage)
* [Screenshots](#-screenshots)
* [PPT DRIVE](#-deployment)
* [Future Enhancements](#-future-enhancements)
* [Contributing](#-contributing)
* [Author](#-author)

---

## 🔍 Overview

 * Medix is a full-stack web application designed to modernize hospital administration and 
grievance redressal using AI-driven workflows and role-based access.
 The system provides:
 Admin dashboard for system-level control
 Manager dashboard for hospital operations
 User interface for grievance submission and tracking
 Dark/light mode UI with modern healthcare-themed design
 Scalable backend ready for ML integration
 The platform focuses on efficiency, transparency, and user experience in healthcare 
management.

---

## ✨ Features

* ⚡ Fast and responsive UI
* 🧩 Component-based architecture
* 📁 Clean and organized folder structure
* 🌐 Ready for deployment
* 🔒 Environment-based configuration

---

## 🛠 Tech Stack

<p align="left"> <img src="https://skillicons.dev/icons?i=react,js,html,css,nodejs,npm,mysql,express,git,github" /> </p>

| Technology        | Usage                 |
| ----------------- | --------------------- |
| React.js          | Frontend framework    |
| JavaScript (ES6+) | Logic & functionality |
| HTML5             | Markup                |
| CSS3              | Styling               |
| Node.js           | Runtime environment   |
| npm               | Package management    |

---

## 📂 Project Structure

```bash
project-root/
│
├── frontend
│ │
│ ├── public
│ │ ├── index.html
│ │ ├── favicon.ico
│ │ └── assets
│ │ ├── images
│ │ └── icons
│ │
│ ├── src
│ │ ├── components
│ │ │ ├── Navbar.jsx
│ │ │ ├── Footer.jsx
│ │ │ ├── Loader.jsx
│ │ │ └── ProtectedRoute.jsx
│ │ │
│ │ ├── pages
│ │ │ ├── Home.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ └── NotFound.jsx
│ │ │
│ │ ├── services
│ │ │ ├── api.js
│ │ │ └── authService.js
│ │ │
│ │ ├── styles
│ │ │ ├── main.css
│ │ │ └── animations.css
│ │ │
│ │ ├── context
│ │ │ └── AuthContext.jsx
│ │ │
│ │ ├── utils
│ │ │ └── helpers.js
│ │ │
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── routes.jsx
│ │
│ ├── .env
│ ├── package.json
│ └── vite.config.js
│
├── backend
│ │
│ ├── src
│ │ │
│ │ ├── config
│ │ │ ├── db.js
│ │ │ └── env.js
│ │ │
│ │ ├── controllers
│ │ │ ├── authController.js
│ │ │ ├── userController.js
│ │ │ ├── hospitalController.js
│ │ │ └── predictionController.js
│ │ │
│ │ ├── routes
│ │ │ ├── authRoutes.js
│ │ │ ├── userRoutes.js
│ │ │ ├── hospitalRoutes.js
│ │ │ └── predictionRoutes.js
│ │ │
│ │ ├── middlewares
│ │ │ ├── authMiddleware.js
│ │ │ └── errorMiddleware.js
│ │ │
│ │ ├── models
│ │ │ ├── User.js
│ │ │ ├── Hospital.js
│ │ │ └── Admission.js
│ │ │
│ │ ├── services
│ │ │ └── predictionService.js
│ │ │
│ │ ├── utils
│ │ │ └── tokenUtils.js
│ │ │
│ │ ├── app.js
│ │ └── server.js
│ │
│ ├── .env
│ ├── package.json
│ └── nodemon.json
│
├── .gitignore
├── README.md
└── package.json
```

---

## ⚙️ Installation

Follow the steps below to run the project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/project-name.git

# Navigate to project directory
cd project-name

# Install dependencies
npm install
```

---

## ▶️ Usage

```bash
# Start development server
npm start
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 📷 Screenshots

 
* Relevant Screenshots
 Add screenshots here to help reviewers understand the project
 (Example sections below)
 Homepage
 Admin Dashboard
 Manager Dashboard
 Login / Register Page
 Dark Mode UI

<img width="1918" height="891" alt="Screenshot 2026-01-04 122444" src="https://github.com/user-attachments/assets/7f557630-4c90-42b3-87d5-6adf5e4a5c82" />

<img width="1919" height="890" alt="Screenshot 2026-01-04 122535" src="https://github.com/user-attachments/assets/19c8ebe2-245f-42bd-9369-13e5ba9d2e68" />

<img width="1917" height="889" alt="Screenshot 2026-01-04 122556" src="https://github.com/user-attachments/assets/bb5552d2-dc77-48d2-aaf3-04e2520522c2" />

![Admin Dashboard](https://github.com/user-attachments/assets/ce1801ef-bc9c-41aa-8b92-e3d69d568130)

![Manager Dashboard](https://github.com/user-attachments/assets/f6e8f49a-1835-430e-b180-8909374f092d)

<img width="1919" height="883" alt="Screenshot 2026-01-04 122452" src="https://github.com/user-attachments/assets/48234ff2-ef4f-4311-b181-8afcfd6d0144" />


---

## 🚀 PPT DRIVE

[https://drive.google.com/file/d/1W8XOFvY2QDq7qJ8FsicAdQkXNsspDTZe/view?usp=sharing]

---

## 🔮 Future Enhancements

* 🔐 AI chatbot for hospital assistance
* 📊 Dashboard & analytics
* 🌙 Priority prediction
* 📱 Machine Learning-based grievance classification

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`feature/new-feature`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 👤 Author


* GitHub: [@Utkarsh-Kashid](https://github.com/UtkarshKashid)
* LinkedIn: [https://www.linkedin.com/in/utkarsh-kashid-44843132b]

* GitHub: [@Atharva-Khabale](https://github.com/atharva-7504)
* LinkedIn: [https://www.linkedin.com/in/atharva-khabale/)

* GitHub: [@Vinit-Khedkar](https://github.com/your-username)
* LinkedIn: [https://www.linkedin.com/in/vinit-khedkar-15906032b/]

---

⭐ If you like this project, don't forget to star the repository!



    MADE WITH ❤️ BY TEAM GAMECHANGERS
