from pydantic import BaseModel

class DashboardStats(BaseModel):
    #bugs_this_month: int
    bugs_closed: int
    bugs_open: int
    high_priority: int
    medium_priority: int
    low_priority: int