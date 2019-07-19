/* eslint-disable global-require */
const { cloneDeepWith, isObject } = require('lodash');
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

  const config = getConfig();

  config.module.rules = config.module.rules.map(item => cloneDeepWith(item, (value) => {
    if (isObject(value) && value.modules) {
      return {
        ...value,
        localIdentName: undefined,
        getLocalIdent: generate,
      };
    }
    return undefined;
  }));

  actions.replaceWebpackConfig(config);
};
