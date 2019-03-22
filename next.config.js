// next.config.js
const withStylus = require("@zeit/next-stylus");
const withFonts = require("next-fonts");
const withImages = require("next-images");

module.exports = withImages(
  withFonts(
    withStylus({
      cssModules: true
    })
  )
);
