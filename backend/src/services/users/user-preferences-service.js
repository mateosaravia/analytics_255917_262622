const verticaClient = require('../../config/vertica-config');

async function getTopPreferencesByGender(id) {
  try {
    await verticaClient.connect();

    const query = `
      SELECT preference_id, user_id, preference_name, preference_value
      FROM user_preferences
      WHERE user_id = $1
      ORDER BY preference_value DESC;
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

async function getTopPurchasePreferences(id) {
  try {
    await verticaClient.connect();

    const query = `
      SELECT preference_id, user_id, preference_name, preference_value
      FROM user_preferences
      WHERE user_id = $1
      ORDER BY preference_value DESC;
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
  try {
    await verticaClient.connect();

    const query = `
      SELECT preference_id, user_id, preference_name, preference_value
      FROM user_preferences
      WHERE user_id = $1
      ORDER BY preference_value DESC;
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

async function getAvgReviewByGender(id) {
  try {
    await verticaClient.connect();

    const query = `
      SELECT AVG(review) AS avg_review
      FROM user_reviews
      WHERE user_id = $1;
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
    getTopPreferencesByGender,
    getTopPurchasePreferences,
    getTopPurchasePreferencesByRegion,
    getAvgReviewByGender,
};

