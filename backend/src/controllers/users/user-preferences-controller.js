const userPreferencesService = require('../../services/users/user-preferences-service');

async function getTopPreferencesByGenre(req, res) {
    const { id } = req.params;
    try {
        const preferences = await userPreferencesService.getTopPreferencesByGenre(id);
        res.json(preferences);
    } catch (err) {
        console.error('Error fetching top preferences: ', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function getTopPurchasePreferences(req, res) {
    try {
        const preferences = await userPreferencesService.getTopPurchasePreferences();
        res.json(preferences);
    } catch (err) {
        console.error('Error fetching top purchase preferences: ', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function getTopPurchasePreferencesByRegion(req, res) {
    const { id } = req.params;
    try {
        const preferences = await userPreferencesService.getTopPurchasePreferencesByRegion(id);
        res.json(preferences);
    } catch (err) {
        console.error('Error fetching top purchase preferences by region: ', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function getAvgReviewByGenre(req, res) {
    const { id } = req.params;
    try {
        const review = await userPreferencesService.getAvgReviewByGenre(id);
        res.json(review);
    } catch (err) {
        console.error('Error fetching average review: ', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getTopPreferencesByGenre,
    getTopPurchasePreferences,
    getTopPurchasePreferencesByRegion,
    getAvgReviewByGenre,
};
