// src/routes/userBehaviorRoutes.js
const { Router } = require('express');
const userBehaviorController = require('../controllers/userBehaviorController');

const router = Router();

router.get('/total-sessions-duration', userBehaviorController.getTotalSessionsDuration);
router.get('/average-sessions-duration', userBehaviorController.getAverageSessionsDuration);
router.get('/all-social-interactions', userBehaviorController.getAllSocialInteractions);
router.get('/average-social-interactions', userBehaviorController.getAverageSocialInteractions);

module.exports = router;