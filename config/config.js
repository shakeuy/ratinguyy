module.exports = {
  youtubeApiKey: process.env.YOUTUBE_API_KEY,
  channels: [
    { id: 'UCp6X5jzfmwbOeclRArOi18g', name: 'Canal 4' },
    { id: 'UCMHQqhtbpxfcnPPYpryapHA', name: 'Canal 5' },
    // ... otros canales
  ],
  updateInterval: 5 * 60 * 1000, // 5 minutos
};
