const config = require('../config/config');

let cachedData = null;
let lastCacheTime = null;

function setData(data) {
  cachedData = data;
  lastCacheTime = Date.now();
}

function isValid() {
  return cachedData && Date.now() - lastCacheTime < config.updateInterval;
}

function getData() {
  return cachedData;
}

module.exports = { setData, isValid, getData };
