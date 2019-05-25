/* eslint-disable global-require */
exports.createPages = async (gatsby) => {
  await require('./episode')(gatsby);
  await require('./podcast')(gatsby);

  return Promise.resolve();
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
