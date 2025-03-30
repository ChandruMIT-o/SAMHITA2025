CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    year_of_study SMALLINT NOT NULL CHECK (year_of_study BETWEEN 1 AND 4),
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    institute VARCHAR(255) NOT NULL,
    paid BOOLEAN DEFAULT FALSE,
    -- If a user selects a pass, its event_id (which must refer to an event of type 'Pass') is stored here.
    selected_pass_id INTEGER REFERENCES events(event_id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE events (
    event_id SERIAL PRIMARY KEY,
    event_name VARCHAR(100) NOT NULL,
    event_type VARCHAR(50) NOT NULL,  -- e.g. 'Technical', 'Non-Technical', 'Signature Event', 'Workshop', 'Pass'
    price NUMERIC(10,2) NOT NULL
);

CREATE TABLE user_event_selections (
    selection_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    event_id INTEGER NOT NULL REFERENCES events(event_id),
    UNIQUE(user_id, event_id)
);
