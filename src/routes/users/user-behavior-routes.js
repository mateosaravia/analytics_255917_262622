const { Router } = require('express');
const userBehaviorController = require('../../controllers/users/user-behavior-controller');

const router = Router();

router.get('/gender/:id/total-sessions-duration', userBehaviorController.getTotalSessions);
router.get('/total-sessions-duration', userBehaviorController.getTotalSessionsDuration);
router.get('/average-sessions-duration', userBehaviorController.getAverageSessionsDuration);
router.get('/all-social-interactions', userBehaviorController.getAllSocialInteractions);
router.get('/average-social-interactions', userBehaviorController.getAverageSocialInteractions);

module.exports = router;