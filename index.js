const Color = require('color');

module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');

module.exports.decorateConfig = config => {
  config.backgroundColor = Color(config.backgroundColor).alpha(0.5).rgb().string();
  return config;
}
