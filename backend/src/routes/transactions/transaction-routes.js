const { Router } = require('express');
const userTransactionController = require('../../controllers/transactions/transaction-controller');

const router = Router();

router.get('/genre/:id', userTransactionController.getAllTransactionsByGenre);
router.get('/region/:id', userTransactionController.getAllTransactionsByRegion);

module.exports = router;
