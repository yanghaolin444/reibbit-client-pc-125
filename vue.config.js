const path = require('path')
module.exports = {
  devServer: {
    port: 8000,
    open: true // 浏览器自动打开
  },

  // 关闭代码检查工具
  lintOnSave: false,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')]
    }
  }
}
