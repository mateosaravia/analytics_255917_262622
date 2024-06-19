// src/routes/userBehaviorRoutes.js
const { Router } = require('express');
const userBehaviorController = require('../controllers/userBehaviorController');

const router = Router();

router.get('/', userBehaviorController.getAllUserBehavior);
router.get('/:id', userBehaviorController.getUserBehaviorById);
router.post('/', userBehaviorController.createUserBehavior);

module.exports = router;