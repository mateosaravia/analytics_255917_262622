const verticaService = require('../services/verticaService');

async function getAllGameInteractions(req, res) {
  try {
    const interactions = await verticaService.getAllGameInteractions();
    res.json(interactions);
  } catch (err) {
    console.error('Error fetching game interactions:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getGameInteractionById(req, res) {
  const { id } = req.params;
  try {
    const interaction = await verticaService.getGameInteractionById(id);
    if (interaction) {
      res.json(interaction);
    } else {
      res.status(404).json({ error: 'Interaction not found' });
    }
  } catch (err) {
    console.error(`Error fetching interaction for ID ${id}:`, err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function createGameInteraction(req, res) {
  const interactionData = req.body;
  try {
    const newInteraction = await verticaService.createGameInteraction(interactionData);
    res.status(201).json(newInteraction);
  } catch (err) {
    console.error('Error creating game interaction:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAllGameInteractions,
  getGameInteractionById,
  createGameInteraction,
};
