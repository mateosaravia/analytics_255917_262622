const { getVerticaClient } = require('../../config/vertica-config');

async function getTopPreferencesByGenre(id) {
  const verticaClient = await getVerticaClient();
  try {
    await verticaClient.connect();

    const query = `
      SELECT COUNT(preference_id), category, value
      FROM User_Preferences
      GROUP BY category, value
      ORDER BY COUNT(preference_id) DESC
      LIMIT 5;
    `;
    const result = await verticaClient.query(query, [id]);
    return result.rows;

  } catch (err) {
    console.error('Error fetching top preferences: ', err);
    throw new Error('Database query error');
  }
  finally {
    await verticaClient.end();
  }
};

async function getTopPurchasePreferences() {
  const verticaClient = await getVerticaClient();
  try {
    await verticaClient.connect();

    const query = `
      SELECT g.name, COUNT(t.game_id) AS total_purchases
      FROM Transactions t
      JOIN Games g ON t.game_id = g.game_id
      GROUP BY g.name
      ORDER BY total_purchases DESC
      LIMIT 5;
    `;
    const result = await verticaClient.query(query, [id]);
    return result.rows;

  } catch (err) {
    console.error('Error fetching top purchase preferences: ', err);
    throw new Error('Database query error');
  }
  finally {
    await verticaClient.end();
  }
};

async function getTopPurchasePreferencesByRegion(id) {
  const verticaClient = await getVerticaClient();
  try {
    await verticaClient.connect();

    const query = `
      SELECT g.name, COUNT(t.game_id) AS total_purchases
      FROM Transactions t
      JOIN Games g ON t.game_id = g.game_id
      JOIN Users u ON t.user_id = u.user_id
      WHERE u.region_id = $1
      GROUP BY g.name
      ORDER BY total_purchases DESC
      LIMIT 5;
    `;
    const result = await verticaClient.query(query, [id]);
    return result.rows;

  } catch (err) {
    console.error('Error fetching top purchase preferences by region: ', err);
    throw new Error('Database query error');
  }
  finally {
    await verticaClient.end();
  }
};

async function getAvgReviewByGenre(id) {
  const verticaClient = await getVerticaClient();
  try {
    await verticaClient.connect();

    const query = `
      SELECT AVG(rating) AS average_review
      FROM Reviews r
      JOIN Games g ON r.game_id = g.game_id
      JOIN Genres gr ON g.genre_id = gr.genre_id
      WHERE gr.genre_id = $1
    `;
    const result = await verticaClient.query(query, [id]);
    return result.rows[0];

  } catch (err) {
    console.error('Error fetching average review: ', err);
    throw new Error('Database query error');
  }
  finally {
    await verticaClient.end();
  }
};

module.exports = {
    getTopPreferencesByGenre,
    getTopPurchasePreferences,
    getTopPurchasePreferencesByRegion,
    getAvgReviewByGenre,
};

