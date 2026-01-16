from enum import Enum

class PriorityEnum(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"

class StatusEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"
  