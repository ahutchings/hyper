const Color = require('color');

module.exports.onWindow = browserWindow => browserWindow.setVibrancy('ultra-dark');

module.exports.decorateConfig = config => {
  config.backgroundColor = Color(config.backgroundColor).alpha(0.85).rgb().string();
  config.fontFamily = '"Fira Code", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace';
  config.termCSS = `
      x-screen x-row {
          font-variant-ligatures: initial;
      }
  `;
  return config;
}
