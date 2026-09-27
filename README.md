<div align="center">

# 🎓 SkillBridge Student Wallet

### Your academic identity, skills and Stellar testnet wallet in one place.

A student portfolio dashboard for managing a profile, skills, certificates and a browser-connected Stellar wallet. SkillBridge combines a Vue 3 interface with an Express and MongoDB authentication API.

[![Vue 3](https://img.shields.io/badge/Vue-3-42b883?logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)](https://vite.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47a248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Stellar](https://img.shields.io/badge/Stellar-Testnet-7d00ff?logo=stellar&logoColor=white)](https://stellar.org/)

</div>

---

## ✨ About

SkillBridge Student Wallet is a student-focused dashboard for presenting academic and career information alongside a digital wallet. It offers profile and activity views, editable skill and certificate lists, an assistant-style career guidance screen, and an optional Freighter connection to the Stellar **testnet**.

The app is split into two independently deployable parts:

- **Frontend:** Vue 3 single-page application built with Vite.
- **Backend:** Express REST API with MongoDB persistence for registration and login.

> **Data behavior:** The current dashboard’s profile, skill, certificate, activity and theme data are saved in the browser's local storage. The Express API currently handles account registration and login; it does not persist those dashboard edits. The career assistant uses local preset replies, and the sample dashboard credentials are demonstration content rather than independently verified records.

## 🌐 Live Demo

- **Frontend:** _Add the Vercel production URL after deployment._
- **Backend API:** _Add the Render service URL after deployment._
- **Health check:** `<RENDER_SERVICE_URL>/` returns a JSON message when the API and database have started.

## 🚀 Features

- **Student dashboard** with profile details, identity score, skills, certificates and recent activity.
- **Skills matrix** to search, add and remove skills and set proficiency levels.
- **Credential list** to add, inspect and remove certificate entries.
- **Stellar wallet view** with optional Freighter browser wallet connection and testnet XLM balance lookup.
- **AI career assistant UI** with locally generated sample replies based on the prompt.
- **Profile and theme preferences** saved in browser local storage.
- **Account API** with registration and login, password hashing via bcrypt, and signed JWTs.
- Responsive Vue Router pages for Dashboard, Wallet, Skills, Certificates, AI Assistant and Settings.

## 🧰 Technology

| Area | Technologies |
| --- | --- |
| Frontend | Vue 3, Vue Router, Vite |
| Wallet | Stellar SDK, Freighter API, Stellar Horizon testnet |
| Backend | Node.js, Express 5 |
| Database | MongoDB, Mongoose |
| Authentication | bcryptjs, JSON Web Tokens |
| Hosting | Vercel (frontend), Render (backend) |

## 🗂️ Repository Layout

```text
.
├── backend/
│   ├── controllers/authController.js
│   ├── models/user.js
│   ├── routes/authRoutes.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── router/
│   │   ├── store/
│   │   ├── views/
│   │   └── wallet/
│   ├── index.html
│   └── package.json
├── package.json
└── README.md
```

## 🖥️ Run Locally

### Requirements

- Node.js 20 or later and npm.
- A MongoDB connection string to run the account API.
- Optional: the Freighter browser extension for wallet connection.

### 1. Get the source and install dependencies

```bash
git clone https://github.com/mehulikhanra904-prog/SkillBridge-Student-Wallet-new.git
cd SkillBridge-Student-Wallet-new
npm install
npm --prefix frontend install
npm --prefix backend install
```

### 2. Configure the backend

Create `backend/.env` locally (never commit it):

```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<database>?retryWrites=true&w=majority
JWT_SECRET=replace-with-a-long-random-secret
```

Start the API:

```bash
npm --prefix backend start
```

The API starts at `http://localhost:5000` after MongoDB connects. Check `http://localhost:5000/` for the status response.

### 3. Run the frontend

In another terminal:

```bash
npm --prefix frontend run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

The frontend's Stellar Horizon endpoint defaults to `https://horizon-testnet.stellar.org`. To override it, set `VITE_HORIZON_URL` in the frontend environment before building.

## 🔌 API

Base path: `/api/auth`

| Method | Endpoint | Description | Body |
| --- | --- | --- | --- |
| `POST` | `/register` | Create an account; returns a JWT and public user profile | `{ "name": "Ada", "email": "ada@example.com", "password": "at-least-6-chars" }` |
| `POST` | `/login` | Verify credentials; returns a JWT and public user profile | `{ "email": "ada@example.com", "password": "your-password" }` |

The API root `GET /` is a basic health response. Passwords are hashed before storage. Keep `JWT_SECRET` private; tokens expire after seven days.

Example registration request:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Ada","email":"ada@example.com","password":"change-me"}'
```

## ☁️ Deployment

### Frontend — Vercel

1. Import this GitHub repository into Vercel.
2. Set the **Root Directory** to `frontend`.
3. Use the Vite preset. Build command: `npm run build`; output directory: `dist`.
4. Deploy. The included `frontend/vercel.json` serves Vue Router paths through the SPA entry point.
5. If you use a non-default Stellar Horizon server, add `VITE_HORIZON_URL` as a Vercel environment variable and redeploy.

### Backend — Render

1. Create a **Web Service** from this repository.
2. Set **Root Directory** to `backend`, **Build Command** to `npm install`, and **Start Command** to `npm start`.
3. Add these Render environment variables:
   - `MONGODB_URI`: your MongoDB Atlas (or other MongoDB) connection string.
   - `JWT_SECRET`: a long, randomly generated private signing key.
4. Render supplies `PORT` automatically. The service only begins listening after it connects to MongoDB.
5. Check the service root URL for the JSON health response.

Never put database credentials or signing keys in frontend variables, source files, commits, screenshots or issue reports. If a secret was ever committed, deleting the file does not remove it from Git history: **rotate the credential at its provider**.

## 🔐 Security & Privacy Notes

- Use HTTPS and secure production secrets.
- Configure MongoDB Atlas network access for the Render service and restrict database users to the permissions the app needs.
- The current API enables CORS for all origins; restrict CORS to the deployed frontend domain before using the API with sensitive production data.
- This is a learning/demo project. Do not use it to store real financial credentials or sensitive identity documents.
- Stellar wallet support defaults to **testnet**. Never enter a seed phrase into this app.

## 🧭 Current Scope

The app demonstrates a student portfolio and testnet wallet experience. The listed sample skills, certificates, USD estimate and assistant responses are demo UI data. Certificate labels in the UI are not cryptographic verification, and profile/skills/certificates are not currently synchronized to the API or blockchain.

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-change`.
3. Commit your changes: `git commit -m "Add your change"`.
4. Push the branch and open a pull request.

## 📄 License

No license file is currently included. All rights remain with the repository owner unless a license is added.
