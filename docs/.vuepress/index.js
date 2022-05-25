const path = require('path')

module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx

  // console.log({siteConfig});

  return {
    plugins: [
      // Ensure the path below matches where you saved the dynamic-metadata.js file
      require(path.resolve(__dirname, './plugins/dynamic-metadata.js')),
    ],
  }
}
