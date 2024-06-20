const userBehaviorService = require('../../services/users/user-behavior-service');

async function getTotalSessionsDuration (req, res) {
  try {
    const totalSessionsDuration = await userBehaviorService.getTotalSessionsDuration();
    res.json(totalSessionsDuration);
  } catch (err) {
    console.error('Error fetching total sessions duration:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

async function getAverageSessionsDuration (req, res) {
  try {
    const averageSessionsDuration = await userBehaviorService.getAverageSessionsDuration();
    res.json(averageSessionsDuration);
  } catch (err) {
    console.error('Error fetching average sessions duration:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

async function getAllSocialInteractions (req, res) {
  try {
    const socialInteractions = await userBehaviorService.getAllSocialInteractions();
    res.json(socialInteractions);
  } catch (err) {
    console.error('Error fetching social interactions:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

async function getAverageSocialInteractions (req, res) {
  try {
    const averageSocialInteractions = await userBehaviorService.getAverageSocialInteractions();
    res.json(averageSocialInteractions);
  } catch (err) {
    console.error('Error fetching average social interactions:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getTotalSessionsDuration,
  getAverageSessionsDuration,
  getAllSocialInteractions,
  getAverageSocialInteractions,
};
