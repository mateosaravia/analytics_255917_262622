const { Router } = require('express');
const transactionRoutes = require('./transactions/transaction-routes');
const userPreferencesRoutes = require('./users/user-preferences-routes');
const userBehaviorRoutes = require('./users/user-behavior-routes');

const router = Router();

router.use('/user-behavior', userBehaviorRoutes);
router.use('/transactions', transactionRoutes);
router.use('/user-preferences', userPreferencesRoutes);

module.exports = router;
