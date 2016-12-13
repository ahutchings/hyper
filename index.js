const Color = require('color');

module.exports.onWindow = browserWindow => browserWindow.setVibrancy('ultra-dark');

module.exports.decorateConfig = config => {
  config.backgroundColor = Color(config.backgroundColor).alpha(0.85).rgb().string();
  return config;
}
