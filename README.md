# A Simple API
## Introduction
This is a simple api app for Bug tracking using sqlite db with FASTAPI as backend and React as frontend. As this is a simple api so we can only CRUD operation for a bug incident such as Create, Edit and Delete. The Frontend app has a dashboard for bugs incident and also to create/edit/delete bugs incident. The backend app is a api. we can test the api's via `http://localhost:8000/docs/`.

## Installation
### Frontend (React)
Install node.js to run the project locally.

```bash
$cd frontend
$npm install
$npm run dev
```
#### **Usage**

|  Frontend | Url |
| -- | -- |
| Run the app |  http://localhost:5173/ |


### Backend (FastAPI)
Install python to run the project locally. This project uses `uv` for dependency management.

```bash
$cd backend

#Install the project dependencies:
$uv sync

#Switch to the virtual environment in Windows (This step for venv activation may not be needed but still included):
$.venv\Scripts\activate

#To run the project
$uv run main.py
```

#### **Usage**

| Backend | Url |
| -- | -- |
| Run the API app | http://localhost:8000/ |
| Swagger openapi | http://localhost:8000/docs/ |


#### Database (sqlite)
This file db i.e. `backend\api_app_db.db` has some 50 sample records. No need for any installation for sqlite.