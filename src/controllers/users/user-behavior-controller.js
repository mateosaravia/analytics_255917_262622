const userBehaviorService = require('../services/user-behavior-service');

async function getAllUserBehavior(req, res) {
  try {
    const userBehaviorData = await userBehaviorService.getAllUserBehavior();
    res.json(userBehaviorData);
  } catch (err) {
    console.error('Error fetching user behavior:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getUserBehaviorById(req, res) {
  const { id } = req.params;
  try {
    const userBehaviorData = await userBehaviorService.getUserBehaviorById(id);
    res.json(userBehaviorData);
  } catch (err) {
    console.error(`Error fetching user behavior for user ID ${id}:`, err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function createUserBehavior(req, res) {
  const { body } = req;
  try {
    const newUserBehavior = await userBehaviorService.createUserBehavior(body);
    res.status(201).json(newUserBehavior);
  } catch (err) {
    console.error('Error creating user behavior:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAllUserBehavior,
  getUserBehaviorById,
  createUserBehavior,
};
