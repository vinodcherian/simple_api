import datetime
from pydantic import BaseModel
from api_app.enums import PriorityEnum, StatusEnum

# API Models 
class BugCreate(BaseModel):
    title: str
    priority: PriorityEnum

class BugUpdate(BaseModel):
    title: str
    priority: PriorityEnum
    status: StatusEnum

class BugResponse(BaseModel):
    id: int
    title: str
    status: StatusEnum
    priority: PriorityEnum
    updated_at: datetime.datetime
    created_at: datetime.datetime
    
    class Config:
        from_attributes = True