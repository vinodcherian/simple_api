# | Field      | Type     | Description             |
# | ---------- | -------- | ----------------------- |
# | id         | integer  | Unique identifier       |
# | title      | string   | Short bug description   |
# | status     | enum     | `open` or `closed`      |
# | priority   | enum     | `low`, `medium`, `high` |
# | created_at | datetime | Bug creation time       |

from sqlalchemy import Column, Integer, String, DateTime
import datetime
from sqlalchemy import Enum as SQLAlchemyEnum

from api_app.core.db import Base
from api_app.enums import PriorityEnum, StatusEnum

class Bug(Base):
    __tablename__ = "bugs"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    status = Column(SQLAlchemyEnum(StatusEnum), nullable=False, default=StatusEnum.OPEN)
    priority = Column(SQLAlchemyEnum(PriorityEnum), nullable=False)
    updated_at = Column(DateTime, nullable=False, default=datetime.datetime.now, onupdate=datetime.datetime.now)
    created_at = Column(DateTime, nullable=False, default=datetime.datetime.now)