CREATE TABLE Genres (
    genre_id INT PRIMARY KEY NOT NULL,
    genre_name VARCHAR(100) NOT NULL
);

CREATE TABLE Regions (
    region_id INT PRIMARY KEY NOT NULL,
    region_name VARCHAR(100) NOT NULL
);

CREATE TABLE Users (
    user_id INT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    registration_date TIMESTAMP NOT NULL,
    region_id INT NOT NULL,
    FOREIGN KEY (region_id) REFERENCES Regions(region_id)
);

CREATE TABLE Games (
    game_id INT PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    genre_id INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    release_date TIMESTAMP NOT NULL,
    FOREIGN KEY (genre_id) REFERENCES Genres(genre_id)
);

CREATE TABLE Transactions (
    transaction_id INT PRIMARY KEY NOT NULL,
    user_id INT NOT NULL,
    game_id INT NOT NULL,
    transaction_date TIMESTAMP NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (game_id) REFERENCES Games(game_id)
);

CREATE TABLE Browsing_History (
    history_id INT PRIMARY KEY NOT NULL,
    user_id INT NOT NULL,
    page_visited VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE User_Preferences (
    preference_id INT PRIMARY KEY NOT NULL,
    user_id INT NOT NULL,
    category VARCHAR(100) NOT NULL,
    value VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Game_Sessions (
    session_id INT PRIMARY KEY NOT NULL,
    user_id INT NOT NULL,
    game_id INT NOT NULL,
    session_start TIMESTAMP NOT NULL,
    session_end TIMESTAMP NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (game_id) REFERENCES Games(game_id)
);

CREATE TABLE Social_Interactions (
    interaction_id INT PRIMARY KEY NOT NULL,
    user_id INT NOT NULL,
    interaction_type VARCHAR(50) NOT NULL,
    target_user_id INT NOT NULL,
    interaction_timestamp TIMESTAMP NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (target_user_id) REFERENCES Users(user_id)
);

CREATE TABLE Reviews (
    review_id INT PRIMARY KEY NOT NULL,
    user_id INT NOT NULL,
    game_id INT NOT NULL,
    review_text VARCHAR(255) NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5) NOT NULL,
    review_date TIMESTAMP NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (game_id) REFERENCES Games(game_id)
);