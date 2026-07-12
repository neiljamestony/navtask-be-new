CREATE SCHEMA IF NOT EXISTS "NAVTASK";

-- ENUM TYPES

CREATE TYPE provider_type as ENUM (
    'local',
    'facebook',
    'google'
    'fb_and_google'
)

-- USERS TABLE
CREATE TABLE IF NOT EXISTS "NAVTASK".users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(150) NOT NULL,
    provider provider_type DEFAULT 'local',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ENUM TYPES
CREATE TYPE task_status AS ENUM (
    'not-started',
    'in-progress',
    'completed',
    'cancelled'
);

CREATE TYPE task_priority AS ENUM (
    'low',
    'high',
    'critical'
);

CREATE TYPE subtask_status AS ENUM (
    'done',
    'not-done'
);

-- TASK TABLE
CREATE TABLE IF NOT EXISTS "NAVTASK".task (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE,
    completed_date DATE,
    priority task_priority DEFAULT 'low',
    status task_status DEFAULT 'not-started',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES "NAVTASK".users(id)
        ON DELETE CASCADE
);

-- SUBTASK TABLE
CREATE TABLE IF NOT EXISTS "NAVTASK".subtask (
    id SERIAL PRIMARY KEY,
    task_id UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status subtask_status DEFAULT 'not-done',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_task
        FOREIGN KEY (task_id)
        REFERENCES "NAVTASK".task(id)
        ON DELETE CASCADE
);

-- ATTACHMENTS TABLE

CREATE TABLE if not exists "NAVTASK".attachments (
    id SERIAL PRIMARY KEY,
    task_id UUID NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    original_name VARCHAR(255) NOT NULL,
    file_path TEXT NOT NULL,
    mime_type VARCHAR(100),
    file_size BIGINT,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_task
        FOREIGN KEY (task_id)
        REFERENCES "NAVTASK".task(id)
        ON DELETE CASCADE
);