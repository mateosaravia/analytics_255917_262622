const { Router } = require('express');
const userTransactionController = require('../controllers/userTransactionController');

const router = Router();

router.get('/', userTransactionController.getAllUserTransactions);
router.get('/:id', userTransactionController.getUserTransactionById);
router.post('/', userTransactionController.createUserTransaction);

module.exports = router;
