const verticaClient = require('../config/verticaConfig');

async function getTotalSessionsDuration() {
  try {
    await verticaClient.connect();

    const query = `
      SELECT SUM(duration) AS total_sessions_duration
      FROM user_sessions;
    `;

    const result = await verticaClient.query(query);
    return result.rows[0];

  } catch (err) {
    console.error('Error fetching total sessions duration:', err);
    throw new Error('Database query error');
  } finally {
    await verticaClient.end();
  }
};

async function getAverageSessionsDuration() {
  try {
    await verticaClient.connect();

    const query = `
      SELECT AVG(duration) AS average_sessions_duration
      FROM user_sessions;
    `;

    const result = await verticaClient.query(query);
    return result.rows[0];

  } catch (err) {
    console.error('Error fetching average sessions duration:', err);
    throw new Error('Database query error');
  } finally {
    await verticaClient.end();
  }
};

async function getAllSocialInteractions() {
  try {
    await verticaClient.connect();

    const query = `
      SELECT COUNT(*) AS social_interactions
      FROM user_social_interactions;
    `;

    const result = await verticaClient.query(query);
    return result.rows[0];

  } catch (err) {
    console.error('Error fetching social interactions:', err);
    throw new Error('Database query error');
  } finally {
    await verticaClient.end();
  }
};

async function getAverageSocialInteractions() {
  try {
    await verticaClient.connect();

    const query = `
      SELECT AVG(interactions_count) AS average_social_interactions
      FROM user_social_interactions;
    `;

    const result = await verticaClient.query(query);
    return result.rows[0];

  } catch (err) {
    console.error('Error fetching average social interactions:', err);
    throw new Error('Database query error');
  } finally {
    await verticaClient.end();
  }
};

module.exports = {
  getTotalSessionsDuration,
  getAverageSessionsDuration,
  getAllSocialInteractions,
  getAverageSocialInteractions,
};
