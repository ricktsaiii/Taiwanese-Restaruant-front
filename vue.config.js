module.exports = {
  publicPath: './',
  chainWebpack (config) {
    config.plugin('html').tap(args => {
      args[0].title = '渣湳底呷'
      return args
    })
  }
}
