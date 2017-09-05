const Color = require('color');
const which = require('which');

const shell = getShell();

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
    shell,
  });

function getShell() {
  const path = `${process.env.HOME}/brew/bin:${process.env.PATH}`;

  try {
    return which.sync('fish', {
      path,
    });
  } catch (error) {
    console.warn(`Fish shell not found in path ${path}. Falling back to bash shell.`);
    return which.sync('bash');
  }
}
