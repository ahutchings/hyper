const { delimiter } = require("path");
const hyperOceanicNext = require("hyper-oceanic-next");
const Color = require("color");
const which = require("which");
const compose = require("./compose-hyper-plugins");

function decorateConfig(config) {
  return {
    ...config,
    backgroundColor: Color(config.backgroundColor).alpha(0.95).rgb().string(),
    colors: {
      ...config.colors,
      lightBlack: "#4f5b66",
    },
    fontFamily:
      '"Fira Code", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',
    termCSS: `
      x-screen x-row {
          font-variant-ligatures: initial;
      }
  `,
    shell: getShell(),
  };
}

function getShell() {
  const path = ["/usr/local/bin", process.env.PATH].join(delimiter);

  try {
    return which.sync("fish", {
      path,
    });
  } catch (error) {
    console.warn(`Fish shell not found in path. Falling back to bash shell.`);
  }

  return which.sync("bash");
}

const plugin = { decorateConfig };

module.exports = compose(plugin, hyperOceanicNext);
