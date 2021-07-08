
var path = require("path")

module.exports = {
  configureWebpack: {
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: path.resolve(__dirname, "../backend/public"),
  devServer: {
    historyApiFallback: true,
    clientLogLevel: 'info',
    proxy: { // proxyTable 설정 
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          "^/api": ''
        }
      }
    }
  }
}