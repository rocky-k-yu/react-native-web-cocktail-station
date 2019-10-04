const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

// our packages that will now be included in the CRA build step
const appIncludes = [
  resolveApp('src'),
  resolveApp('../components/src'),
  // SERVICES
  resolveApp('../common/src'),
  resolveApp('../common-identity-access-management/src'),

  // DEPENDENCY
  resolveApp('../../node_modules/react-native-elements'),
  resolveApp('../../node_modules/react-native-ratings'),
  resolveApp('../../node_modules/react-native-status-bar-height'),
  resolveApp('../../node_modules/react-native-vector-icons')
]

module.exports = function override(config, env) {
  // allow importing from outside of src folder
  config.resolve.plugins = config.resolve.plugins.filter(
    plugin => plugin.constructor.name !== 'ModuleScopePlugin'
  )
  config.module.rules[0].include = appIncludes
  config.module.rules[1] = null
  config.module.rules[2].oneOf[1].include = appIncludes
  config.module.rules[2].oneOf[1].options.plugins = [
    require.resolve('babel-plugin-react-native-web'),
  ].concat(config.module.rules[2].oneOf[1].options.plugins)

  // TODO https://github.com/oblador/react-native-vector-icons/issues/820
  // config.module.rules.push({
  //   test: /\.ttf$/,
  //   loader: 'url-loader',
  //   include: resolveApp('../../node_modules/react-native-vector-icons'),
  // })
  config.module.rules = config.module.rules.filter(Boolean)
  // console.log(JSON.stringify(config.module.rules, null, 2))
  console.log(env)
  config.plugins.push(
    new webpack.DefinePlugin({ __DEV__: env !== 'production' })
  )
  return config
}
