const { renderToString } = require('react-dom/server');
const { xss, minify } = require('./util/html.js');

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const bodyHTML = renderToString(bodyComponent);
  const miniHTML = minify(xss(bodyHTML));

  replaceBodyHTMLString(miniHTML);
};
