module.exports = {
  configureWebpack: config => {
    config.module.rules.forEach(v => {
      if (v.use) {
        let idx = v.use.findIndex(w => w.loader === 'thread-loader')
        if (idx !== -1) v.use.splice(idx, 1)
      }
    })
  },
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .loader('ts-loader')
      .tap(options => {
        Object.assign(options || {}, {transpileOnly: false, happyPackMode: false})
        return options
      })
    config.module
      .rule('tsx')
      .use('ts-loader')
      .loader('ts-loader')
      .tap(options => {
        Object.assign(options || {}, {transpileOnly: false, happyPackMode: false})
        return options
      })
  }
}
