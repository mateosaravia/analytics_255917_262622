CREATE TABLE Genres (
    genre_id INT PRIMARY KEY,
    genre_name VARCHAR(100)
);

CREATE TABLE Regions (
    region_id INT PRIMARY KEY,
    region_name VARCHAR(100)
);

CREATE TABLE Users (
    user_id INT,
    name VARCHAR(255),
    email VARCHAR(255),
    registration_date TIMESTAMP,
    region_id INT
);

CREATE TABLE Games (
    game_id INT,
    name VARCHAR(255),
    genre_id INT,
    price DECIMAL(10, 2),
    release_date TIMESTAMP
);

CREATE TABLE Transactions (
    transaction_id INT,
    user_id INT,
    game_id INT,
    transaction_date TIMESTAMP,
    quantity INT
);

CREATE TABLE Browsing_History (
    history_id INT,
    user_id INT,
    page_visited VARCHAR(255),
    timestamp TIMESTAMP
);

CREATE TABLE User_Preferences (
    preference_id INT,
    user_id INT,
    category VARCHAR(100),
    value VARCHAR(255)
);

CREATE TABLE Game_Sessions (
    session_id INT,
    user_id INT,
    game_id INT,
    session_start TIMESTAMP,
    session_end TIMESTAMP
);

CREATE TABLE Social_Interactions (
    interaction_id INT,
    user_id INT,
    interaction_type VARCHAR(50),
    target_user_id INT,
    interaction_timestamp TIMESTAMP
);

CREATE TABLE Reviews (
    review_id INT,
    user_id INT,
    game_id INT,
    review_text VARCHAR(255),
    rating INT CHECK (rating >= 1 AND rating <= 5),
    review_date TIMESTAMP
);