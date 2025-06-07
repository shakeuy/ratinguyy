module.exports = {
  youtubeApiKey: process.env.YOUTUBE_API_KEY,
  channels: [
    { id: 'UCp6X5jzfmwbOeclRArOi18g', name: 'Canal 4' },
    { id: 'UCMHQqhtbpxfcnPPYpryapHA', name: 'Canal 5' },
    { id: 'UC8Ax1knAw4A1Gbwfg4chaKQ', name: 'Carve Deportiva' },
    { id: 'UCm7HSve9w3PA7_C0VS_OeDw', name: 'Sport 890' },
    // ... otros canales
  ],
  updateInterval: 5 * 60 * 1000, // 5 minutos
};
