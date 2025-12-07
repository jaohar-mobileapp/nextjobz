module.exports = function(api) {
  api && api.cache && api.cache.never && api.cache.never();
  return {
    // noop - configuration is centralized in babel.config.js for React Native
  };
};
