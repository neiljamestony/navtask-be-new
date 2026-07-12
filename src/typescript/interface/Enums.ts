import { task_status, subtask_status, task_priority, provider_type } from "../../generated/prisma"

export const PROVIDER_TYPE = {
    "local": provider_type.local,
    "facebook": provider_type.facebook,
    "googlefb_and_google": provider_type.googlefb_and_google
}

export const TASK_STATUS =  {
    "in-progress": task_status.in_progress,
    "not-started": task_status.not_started,
    "completed": task_status.completed,
    "cancelled": task_status.cancelled,
} as const;

export const SUBTASK_STATUS = {
    "done": subtask_status.done,
    "not-done": subtask_status.not_done
} as const;

export const REVERTED_TASK_STATUS =  {
    "in_progress": "in-progress",
    "not_started": "not-started",
    "completed": task_status.completed,
    "cancelled": task_status.cancelled,
} as const;

export const REVERTED_SUBTASK_STATUS = {
    "done": subtask_status.done,
    "not_done": "not-done"
} as const;

export const TASK_PRIORITY = {
    "low": task_priority.low,
    "high": task_priority.high,
    "critical": task_priority.critical,
} as const;