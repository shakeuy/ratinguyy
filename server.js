const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const youtubeService = require('./services/youtubeService');
const config = require('./config/config');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

// Actualizar datos cada 5 minutos
setInterval(() => youtubeService.getChannelData(), config.updateInterval);

// Ejecutar al iniciar
youtubeService.getChannelData();

// Exportar para Vercel (serverless)
module.exports = app;
