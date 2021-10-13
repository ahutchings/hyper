const { compose } = require("ramda");

function composeHyperPlugins(...plugins) {
  return {
    decorateConfig: compose(
      ...plugins.map((p) => p.decorateConfig).filter(Boolean)
    ),
  };
}

module.exports = composeHyperPlugins;
