module.exports = {
  // configureWebpack: config => {
  //   config.module.rules.forEach(v => {
  //     if (v.use) {
  //       let idx = v.use.findIndex(w => w.loader === 'thread-loader')
  //       if (idx !== -1) v.use.splice(idx, 1)
  //     }
  //   })
  // },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('markdown-loader')
      .loader('markdown-loader')
      .end()
  }
}
