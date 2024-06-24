const userTransactionService = require('../../services/transactions/transaction-service');

async function getAllTransactionsByGenre(req, res) 
{
  const { id } = req.params;
  try {
    const transactions = await userTransactionService.getAllTransactionsByGenre(id);
    res.json(transactions);
  }
  catch (err) {
    console.error('Error fetching genre transactions:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

async function getAllTransactionsByRegion(req, res) 
{
  const { id } = req.params;
  try {
    const transactions = await userTransactionService.getAllTransactionsByRegion(id);
    res.json(transactions);
  }
  catch (err) {
    console.error('Error fetching region transactions:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
    getAllTransactionsByGenre,
    getAllTransactionsByRegion,
};
