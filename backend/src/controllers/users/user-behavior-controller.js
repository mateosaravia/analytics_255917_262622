const userBehaviorService = require('../../services/users/user-behavior-service');

async function getSessionsDurationByGenre (req, res) {
  const { id } = req.params;
  try {
    const sessionsDuration = await userBehaviorService.getSessionsDurationByGenre(id);
    res.json(sessionsDuration);
  } catch (err) {
    console.error('Error fetching sessions duration: ', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

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

async function getAvgSocialInteractions (req, res) {
  try {
    const averageSocialInteractions = await userBehaviorService.getAvgSocialInteractions();
    res.json(averageSocialInteractions);
  } catch (err) {
    console.error('Error fetching average social interactions:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getSessionsDurationByGenre,
  getTotalSessionsDuration,
  getAverageSessionsDuration,
  getAllSocialInteractions,
  getAvgSocialInteractions,
};
