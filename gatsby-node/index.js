exports.createPages = async (gatsby) => {
  /* eslint-disable global-require */
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
