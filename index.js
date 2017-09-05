const Color = require('color');
const which = require('which');

module.exports.onWindow = browserWindow =>
  browserWindow.setVibrancy('ultra-dark');

module.exports.decorateConfig = config =>
  Object.assign({}, config, {
    backgroundColor: Color(config.backgroundColor)
      .alpha(0.85)
      .rgb()
      .string(),
    fontFamily:
      '"Fira Code", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',
    termCSS: `
      x-screen x-row {
          font-variant-ligatures: initial;
      }
  `,
    shell: which.sync('fish', {
      path: `${process.env.HOME}/brew/bin:${process.env.PATH}`,
    }),
  });
