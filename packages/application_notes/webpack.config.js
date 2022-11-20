const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

require("@babel/register")({
  rootMode: "upward",
});

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "remed",
    projectName: "notes",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
