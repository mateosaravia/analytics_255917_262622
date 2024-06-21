CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    registration_date DATE,
    region VARCHAR(100)
);

CREATE TABLE Games (
    game_id INT PRIMARY KEY,
    name VARCHAR(255),
    genre VARCHAR(100),
    price DECIMAL(10, 2),
    release_date DATE
);

CREATE TABLE Transactions (
    transaction_id INT PRIMARY KEY,
    user_id INT,
    game_id INT,
    transaction_date TIMESTAMP,
    quantity INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (game_id) REFERENCES Games(game_id)
);

CREATE TABLE Browsing_History (
    history_id INT PRIMARY KEY,
    user_id INT,
    page_visited VARCHAR(255),
    timestamp TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Game_Interactions (
    interaction_id INT PRIMARY KEY,
    user_id INT,
    game_id INT,
    action VARCHAR(100),
    timestamp TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (game_id) REFERENCES Games(game_id)
);

CREATE TABLE User_Preferences (
    preference_id INT PRIMARY KEY,
    user_id INT,
    category VARCHAR(100),
    value VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Game_Sessions (
    session_id INT PRIMARY KEY,
    user_id INT,
    game_id INT,
    session_start TIMESTAMP,
    session_end TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (game_id) REFERENCES Games(game_id)
);
