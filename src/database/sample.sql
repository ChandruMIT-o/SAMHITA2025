-- Users table: stores basic user details.
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,           -- Display name (may be non-unique)
    email VARCHAR(100) NOT NULL UNIQUE,         -- Unique email
    full_name VARCHAR(150) NOT NULL,            -- Full name
    year_of_study SMALLINT NOT NULL CHECK (year_of_study BETWEEN 1 AND 4),
    phone VARCHAR(20) NOT NULL,
    institute VARCHAR(255) NOT NULL,
    paid BOOLEAN DEFAULT FALSE,
    -- Stores the event_id of the selected pass (must reference an event with event_type = 'Pass')
    selected_pass_id INTEGER REFERENCES events(event_id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Events table: stores all events including passes.
CREATE TABLE events (
    event_id SERIAL PRIMARY KEY,
    event_name VARCHAR(100) NOT NULL,
    event_type VARCHAR(50) NOT NULL,  -- E.g., 'Technical', 'Non-Technical', 'Signature Event', 'Pass'
    price NUMERIC(10,2) NOT NULL
);

-- Join table for additional (individual) event selections (excluding the pass).
CREATE TABLE user_event_selections (
    selection_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    event_id INTEGER NOT NULL REFERENCES events(event_id),
    UNIQUE(user_id, event_id)
);

-- Workshops table: stores individual workshops.
CREATE TABLE workshops (
    workshop_id SERIAL PRIMARY KEY,
    workshop_name VARCHAR(100) NOT NULL,
    price NUMERIC(10,2) NOT NULL
);

-- Workshop combo table: defines a combo ticket (a bundle of workshops).
CREATE TABLE workshop_combos (
    combo_id SERIAL PRIMARY KEY,
    combo_name VARCHAR(100) NOT NULL,
    price NUMERIC(10,2) NOT NULL
);

-- Mapping table: which workshops are included in a combo.
CREATE TABLE workshop_combo_items (
    combo_id INTEGER NOT NULL REFERENCES workshop_combos(combo_id) ON DELETE CASCADE,
    workshop_id INTEGER NOT NULL REFERENCES workshops(workshop_id) ON DELETE CASCADE,
    PRIMARY KEY (combo_id, workshop_id)
);

-- For individual workshop selections.
CREATE TABLE user_workshop_individual (
    selection_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    workshop_id INTEGER NOT NULL REFERENCES workshops(workshop_id),
    UNIQUE(user_id, workshop_id)
);

-- For workshop combo purchases.
CREATE TABLE user_workshop_combos (
    purchase_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    combo_id INTEGER NOT NULL REFERENCES workshop_combos(combo_id),
    UNIQUE(user_id, combo_id)
);
