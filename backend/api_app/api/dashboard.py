from fastapi import APIRouter, HTTPException, Depends
from api_app.schemas.dashboard import DashboardStats
from api_app.models.bugs import Bug  # Assuming Bug is the ORM model for the bugs table
#from sqlalchemy.orm import Session
from api_app.core.db import get_db
from api_app.core.db import Session, get_db
from api_app.enums import PriorityEnum, StatusEnum

router = APIRouter(prefix="/api/dashboard", tags=["dashboard"],)

@router.get("/", response_model=DashboardStats)
def get_dashboard_data(db: Session = Depends(get_db)):
    try:
        # Fetch data from the bugs table
        #bugs_this_month = db.query(Bug).filter(Bug.created_at.month == 1).count()  # Example for January
        bugs_closed = db.query(Bug).filter(Bug.status == StatusEnum.CLOSED).count()
        bugs_open = db.query(Bug).filter(Bug.status == StatusEnum.OPEN).count()
        high_priority = db.query(Bug).filter(Bug.priority == PriorityEnum.HIGH).count()
        medium_priority = db.query(Bug).filter(Bug.priority == PriorityEnum.MEDIUM).count()
        low_priority = db.query(Bug).filter(Bug.priority == PriorityEnum.LOW).count()

        # Return the dashboard stats
        return DashboardStats(
            #bugs_this_month=bugs_this_month,
            bugs_closed=bugs_closed,
            bugs_open=bugs_open,
            high_priority=high_priority,
            medium_priority=medium_priority,
            low_priority=low_priority,
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))