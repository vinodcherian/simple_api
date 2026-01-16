import uvicorn

if __name__ == "__main__":
    # uvicorn.run("api_app.app:app", host="0.0.0.0", port=8000, reload=True)
    uvicorn.run("api_app.app:app", host="0.0.0.0", port=8000)
