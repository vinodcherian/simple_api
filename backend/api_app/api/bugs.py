from typing import List
from fastapi import FastAPI, HTTPException, Depends, APIRouter
from api_app.schemas.bugs import BugCreate, BugResponse, BugUpdate
from api_app.core.db import Session, get_db
from api_app.models.bugs import Bug
import datetime

router = APIRouter(prefix="/api/bug", tags=["bugs"],)

# API Endpoints (CRUD Operations)
@router.get("/", response_model=List[BugResponse])
def get_bugs(db: Session = Depends(get_db)):
    """Get all bugs"""
    return db.query(Bug).all()


@router.get("/{bug_id}", response_model=BugResponse)
def get_bug(bug_id: int, db: Session = Depends(get_db)):
    """Get one bug by ID"""
    bug = db.query(Bug).filter(Bug.id == bug_id).first()
    if not bug:
        raise HTTPException(status_code=404, detail="Bug not found")
    return bug


@router.post("/", response_model=BugResponse)
def create_bug(bug: BugCreate, db: Session = Depends(get_db)):
    """Create a new bug"""
    db_bug = Bug(**bug.dict())
    db.add(db_bug)
    db.commit()
    db.refresh(db_bug)
    return db_bug


@router.put("/{bug_id}", response_model=BugResponse)
def update_bug(bug_id: int, bug: BugUpdate, db: Session = Depends(get_db)):
    """Update a bug"""
    db_bug = db.query(Bug).filter(Bug.id == bug_id).first()
    if not db_bug:
        raise HTTPException(status_code=404, detail="Bug not found")

    # Update fields from the request body
    for field, value in bug.dict().items():
        setattr(db_bug, field, value)

    db.commit()
    db.refresh(db_bug)
    return db_bug


@router.delete("/{bug_id}")
def delete_bug(bug_id: int, db: Session = Depends(get_db)):
    """Delete a bug"""
    bug = db.query(Bug).filter(Bug.id == bug_id).first()
    if not bug:
        raise HTTPException(status_code=404, detail="Bug not found")
    
    db.delete(bug)
    db.commit()
    return {"message": "Bug deleted"}

