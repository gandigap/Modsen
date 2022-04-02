const path = require('path')
module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(
      __dirname,
      '../src',
    )
    config.resolve.alias['@components'] = path.resolve(
      __dirname,
      '../src/components/',
    )
    config.resolve.alias['@constants'] = path.resolve(
      __dirname,
      '../src/constants/',
    )
    config.resolve.alias['@utils'] = path.resolve(
      __dirname,
      '../src/utils/',
    )

    return config
  },  
}
