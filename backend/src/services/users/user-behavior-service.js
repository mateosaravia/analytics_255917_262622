const verticaClient = require('../../config/vertica-config');

async function getSessionsDurationByGenre(id) {
  try {
    await verticaClient.connect();

    const query = `
      SELECT SUM(EXTRACT(EPOCH FROM (gs.session_end - gs.session_start))) AS total_duration_seconds
      FROM Game_Sessions gs
      JOIN Games gm ON gs.game_id = gm.game_id
      JOIN Genres gr ON gm.genre_id = gr.genre_id
      WHERE gr.genre_id = $1
    `;

    const result = await verticaClient.query(query, [id]);
    return result.rows[0];

  } catch (err) {
    console.error('Error fetching sessions duration: ', err);
    throw new Error('Database query error');
  } finally {
    await verticaClient.end();
  }
};

async function getTotalSessionsDuration() {
  try {
    await verticaClient.connect();

    const query = `
      SELECT SUM(EXTRACT(EPOCH FROM (gs.session_end - gs.session_start))) AS total_duration_seconds
      FROM Game_Sessions gs;
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
      SELECT AVG(EXTRACT(EPOCH FROM (session_end - session_start))) AS average_duration_seconds
      FROM Game_Sessions;
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
      FROM Social_Interactions;
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
      SELECT AVG(interaction_count) AS average_interaction_count
      FROM (
          SELECT user_id, COUNT(*) AS interaction_count
          FROM Social_Interactions
          GROUP BY user_id
      ) AS interaction_counts;
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
  getSessionsDurationByGenre,
  getTotalSessionsDuration,
  getAverageSessionsDuration,
  getAllSocialInteractions,
  getAverageSocialInteractions,
};
