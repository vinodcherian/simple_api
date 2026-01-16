from fastapi import FastAPI
from api_app.api import users, bugs, dashboard
from api_app.core.db import init_db  # Import the database initialization function
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Bug tracking system API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173", "http://0.0.0.0:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#app.include_router(users.router)
app.include_router(bugs.router)
app.include_router(dashboard.router)
# @app.get("/")
# async def root():
#     return {"message": "Hello World"}

@app.on_event("startup")
def on_startup():
    init_db()  # Initialize the database tables on app startup


