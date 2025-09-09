# 📌 Portfolio

A personal portfolio project built with:

Backend → Python, FastAPI, Uvicorn

Frontend → React, TailwindCSS, CRACO

Package Manager → Yarn

Styling & Animations → TailwindCSS, Tailwind Animate, Framer Motion

UI Components → Radix UI, ShadCN

# 📂 Project Structure
porfolio/
│── backend/                 # FastAPI backend
│   ├── server.py            # FastAPI app entry
│   ├── requirements.txt     # Backend dependencies
│   ├── venv/                # Python virtual environment
│
│── frontend/                # React frontend (CRACO + TailwindCSS)
│   ├── src/                 # React source code
│   │   ├── components/      # UI components
│   │   ├── hooks/           # Custom hooks
│   │   ├── App.js           # Root component
│   │   ├── index.js         # Entry point
│   ├── public/              # Static files
│   ├── tailwind.config.js   # Tailwind configuration
│   ├── postcss.config.js    # PostCSS configuration
│   ├── package.json
│   └── yarn.lock
│
│── tests/                   # Unit tests
│   ├── __init__.py
│   └── test.result.md
│
│── .gitignore
│── LICENSE
│── package.json             # Root package.json (concurrently setup)
│── README.md

# ⚙️ Setup & Run
🔧 Backend (FastAPI)
cd backend
python -m venv venv
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows
pip install -r requirements.txt
uvicorn server:app --reload --host 0.0.0.0 --port 8000


Backend runs at 👉 http://localhost:8000

🎨 Frontend (React + CRACO + TailwindCSS)
cd frontend
yarn install
yarn start


Frontend runs at 👉 http://localhost:3000

🚀 Run Both Together

At the project root:

yarn dev


This runs:

Backend → http://localhost:8000

Frontend → http://localhost:3000

# 🌐 Environment Variables

Create a .env file inside frontend/:

REACT_APP_BACKEND_URL=http://localhost:8000
WDS_SOCKET_PORT=3000

# 🧪 Tests

Tests live inside the tests/ folder.
Run backend tests with:

pytest

# 📦 Build for Production

Frontend:

cd frontend
yarn build


Backend can be deployed with Uvicorn/Gunicorn or Docker.

# 📜 License

Licensed under the MIT License.