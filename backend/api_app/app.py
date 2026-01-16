from fastapi import FastAPI
from api_app.api import users, bugs, dashboard
from api_app.core.db import init_db  # Import the database initialization function
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum  # Import Mangum for AWS Lambda compatibility

app = FastAPI(title="Bug tracking system API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://simple-api-frontend-bice.vercel.app", "http://localhost:5173", "http://127.0.0.1:5173", "http://0.0.0.0:5173"],
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

# Add the Mangum handler for Vercel compatibility
handler = Mangum(app)

