const verticaClient = require('../config/verticaConfig');

async function getAllUserTransactions() {
  try {
    await verticaClient.connect();

    const query = `
      SELECT transaction_id, user_id, transaction_date, amount, description
      FROM user_transactions
      ORDER BY transaction_date DESC;
    `;

    const result = await verticaClient.query(query);
    return result.rows;

  } catch (err) {
    console.error('Error fetching user transactions:', err);
    throw new Error('Database query error');
  } finally {
    await verticaClient.end();
  }
}

async function getUserTransactionById(transactionId) {
  try {
    await verticaClient.connect();

    const query = `
      SELECT transaction_id, user_id, transaction_date, amount, description
      FROM user_transactions
      WHERE transaction_id = $1;
    `;

    const result = await verticaClient.query(query, [transactionId]);
    return result.rows[0];

  } catch (err) {
    console.error(`Error fetching transaction for transaction ID ${transactionId}:`, err);
    throw new Error('Database query error');
  } finally {
    await verticaClient.end();
  }
}

async function createUserTransaction(transactionData) {
  const { user_id, transaction_date, amount, description } = transactionData;

  try {
    await verticaClient.connect();

    const query = `
      INSERT INTO user_transactions (user_id, transaction_date, amount, description)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const result = await verticaClient.query(query, [user_id, transaction_date, amount, description]);
    return result.rows[0];

  } catch (err) {
    console.error('Error creating transaction:', err);
    throw new Error('Database query error');
  } finally {
    await verticaClient.end();
  }
}

module.exports = {
  getAllUserTransactions,
  getUserTransactionById,
  createUserTransaction,
};
