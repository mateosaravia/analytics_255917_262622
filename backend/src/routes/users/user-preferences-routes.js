const { Router } = require('express');
const userPreferencesController = require('../../controllers/users/user-preferences-controller');

const router = Router();

router.get('/genre/:id', userPreferencesController.getTopPreferencesByGenre);
router.get('/purchases', userPreferencesController.getTopPurchasePreferences);
router.get('/purchases/region/:id', userPreferencesController.getTopPurchasePreferencesByRegion);
router.get('/genre/:id/reviews', userPreferencesController.getAvgReviewByGenre);

module.exports = router;