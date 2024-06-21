const { Router } = require('express');
const userPreferencesController = require('../../controllers/users/user-preferences-controller');

const router = Router();

router.get('/gender/:id', userPreferencesController.getTopPreferencesByGender);
router.get('/purchases', userPreferencesController.getTopPurchasePreferences);
router.get('/purchases/region/:id', userPreferencesController.getTopPurchasePreferencesByRegion);
router.get('/gender/:id/reviews', userPreferencesController.getAvgReviewByGender);

module.exports = router;