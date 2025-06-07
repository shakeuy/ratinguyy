const axios = require('axios');
const config = require('../config/config');
const cache = require('../utils/cache');

async function getChannelData() {
  if (cache.isValid()) return cache.getData();

  const results = {};
  for (const channel of config.channels) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/liveBroadcasts?part=snippet,liveStreamingDetails&broadcastStatus=active&channelId=${channel.id}&key=${config.youtubeApiKey}`
      );
      results[channel.name] = response.data.items.length > 0
        ? { live: true, viewers: response.data.items[0].liveStreamingDetails.concurrentViewers || 'N/A' }
        : { live: false, viewers: 'N/A' };
    } catch (error) {
      results[channel.name] = { live: false, viewers: 'N/A' };
    }
  }
  cache.setData({ data: results, lastUpdated: new Date().toLocaleString('es-UY', { timeZone: 'America/Montevideo' }) });
  return cache.getData();
}

module.exports = { getChannelData };
