const { Router } = require('express');
const gameInteractionController = require('../controllers/gameInteractionController');

const router = Router();

router.get('/', gameInteractionController.getAllGameInteractions);
router.get('/:id', gameInteractionController.getGameInteractionById);
router.post('/', gameInteractionController.createGameInteraction);

module.exports = router;
