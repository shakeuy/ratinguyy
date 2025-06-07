const express = require('express');
const router = express.Router();
const youtubeService = require('../services/youtubeService');

router.get('/channels', async (req, res) => {
  try {
    const data = await youtubeService.getChannelData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos' });
  }
});

module.exports = router;
