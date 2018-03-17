const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

const fs = require(`fs-extra-promise`)

const sm = require(`sitemap`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// fix for lottie
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /lottie-web/,
      loader: "null-loader",
    });
  }
};




