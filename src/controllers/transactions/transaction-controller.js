const userTransactionService = require('../services/user-transaction');

async function getAllTransactionsByGender(req, res) 
{
  const { id } = req.params;
  try {
    const transactions = await userTransactionService.getAllTransactionsByGender(id);
    res.json(transactions);
  }
  catch (err) {
    console.error('Error fetching gender transactions:', err);
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
    getAllTransactionsByGender,
    getAllTransactionsByRegion,
};
