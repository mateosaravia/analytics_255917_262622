const verticaClient = require('../config/verticaConfig');

async function getAllUserBehavior() {
  try {
    await verticaClient.connect();

    const query = `
      SELECT user_id, hours_played, favorite_genre
      FROM user_behavior
      ORDER BY user_id;
    `;

    const result = await verticaClient.query(query);
    return result.rows;

  } catch (err) {
    console.error('Error fetching user behavior:', err);
    throw new Error('Database query error');
  } finally {
    await verticaClient.end();
  }
}

async function getUserBehaviorById(userId) {
  try {
    await verticaClient.connect();

    const query = `
      SELECT user_id, hours_played, favorite_genre
      FROM user_behavior
      WHERE user_id = $1;
    `;

    const result = await verticaClient.query(query, [userId]);
    return result.rows[0];

  } catch (err) {
    console.error(`Error fetching user behavior for user ID ${userId}:`, err);
    throw new Error('Database query error');
  } finally {
    await verticaClient.end();
  }
}

async function createUserBehavior(userData) {
  const { user_id, hours_played, favorite_genre } = userData;

  try {
    await verticaClient.connect();

    const query = `
      INSERT INTO user_behavior (user_id, hours_played, favorite_genre)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const result = await verticaClient.query(query, [user_id, hours_played, favorite_genre]);
    return result.rows[0];

  } catch (err) {
    console.error('Error creating user behavior:', err);
    throw new Error('Database query error');
  } finally {
    await verticaClient.end();
  }
}

module.exports = {
  getAllUserBehavior,
  getUserBehaviorById,
  createUserBehavior,
};
