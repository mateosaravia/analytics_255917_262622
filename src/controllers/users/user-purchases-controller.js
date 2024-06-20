const userTransactionService = require('../services/user-transaction');

async function getAllUserTransactions(req, res) {
  try {
    const transactions = await userTransactionService.getAllUserTransactions();
    res.json(transactions);
  } catch (err) {
    console.error('Error fetching transactions:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getUserTransactionById(req, res) {
  const { id } = req.params;
  try {
    const transaction = await userTransactionService.getUserTransactionById(id);
    if (transaction) {
      res.json(transaction);
    } else {
      res.status(404).json({ error: 'Transaction not found' });
    }
  } catch (err) {
    console.error(`Error fetching transaction for ID ${id}:`, err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function createUserTransaction(req, res) {
  const transactionData = req.body;
  try {
    const newTransaction = await userTransactionService.createUserTransaction(transactionData);
    res.status(201).json(newTransaction);
  } catch (err) {
    console.error('Error creating transaction:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAllUserTransactions,
  getUserTransactionById,
  createUserTransaction,
};
