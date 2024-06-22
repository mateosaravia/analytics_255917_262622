CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    registration_date DATE,
    region_id INT,
    FOREIGN KEY (region_id) REFERENCES Regions(region_id)
);

CREATE TABLE Games (
    game_id INT PRIMARY KEY,
    name VARCHAR(255),
    genre_id INT,
    price DECIMAL(10, 2),
    release_date DATE,
    FOREIGN KEY (genre_id) REFERENCES Genres(genre_id)
);

CREATE TABLE Genres (
    genre_id INT PRIMARY KEY,
    genre_name VARCHAR(100)
);

CREATE TABLE Regions (
    region_id INT PRIMARY KEY,
    region_name VARCHAR(100)
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

CREATE TABLE Social_Interactions (
    interaction_id INT PRIMARY KEY,
    user_id INT,
    interaction_type VARCHAR(50),
    target_user_id INT,
    interaction_timestamp TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (target_user_id) REFERENCES Users(user_id)
);

CREATE TABLE Reviews (
    review_id INT PRIMARY KEY,
    user_id INT,
    game_id INT,
    review_text VARCHAR(255),
    rating INT CHECK (rating >= 1 AND rating <= 5),
    review_date TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (game_id) REFERENCES Games(game_id)
);