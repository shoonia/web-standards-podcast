/* eslint-disable global-require */
const { cloneDeepWith } = require('lodash');
const miniClassNames = require('mini-css-class-name/css-loader');

const generate = miniClassNames();

exports.createPages = async (gatsby) => {
  await require('./episode')(gatsby);
  await require('./podcast')(gatsby);

  return Promise.resolve();
};

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }

  if (stage.includes('build')) {
    const config = getConfig();

    config.module.rules = cloneDeepWith(config.module.rules, (value, key) => {
      if (key === 'options' && value.modules) {
        return {
          ...value,
          localIdentName: undefined,
          getLocalIdent: generate,
        };
      }
      return undefined;
    });

    actions.replaceWebpackConfig(config);
  }
};
