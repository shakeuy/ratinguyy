const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const youtubeService = require('./services/youtubeService');
const config = require('./config/config');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/api', apiRoutes);

// Actualizar datos cada 5 minutos
setInterval(() => youtubeService.getChannelData(), config.updateInterval);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  youtubeService.getChannelData(); // Cargar datos al iniciar
});
