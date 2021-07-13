
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
  pwa: {
    assetsVersion: "1.0.2",
    name: "KAIWA",
    themeColor: "#FFFFFF",
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    iconPaths: {
      favicon32: 'icons/favicon-32x32.png',
      favicon16: 'icons/favicon-16x16.png',
      appleTouchIcon: 'icons/apple-touch-icon-152x152.png',
      maskIcon: 'icons/favicon-32x32.png',
      msTileImage: 'icons/icon-144x144.png'
    },
    manifestOptions: {
      name: 'KAIWA',
      short_name: 'KAIWA',
      theme_color: '#FFFFFF',
      background_color: '#FFFFFF',
      start_url: '/',
      display: 'standalone',
      orientation: 'portrait',
      icons: [
        {
          "src": "./icons/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "./icons/icon-96x96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "./icons/icon-128x128.png",
          "sizes": "128x128",
          "type": "image/png"
        },
        {
          "src": "./icons/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "./icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "./icons/icon-256x256.png",
          "sizes": "256x256",
          "type": "image/png"
        },
        {
          "src": "./icons/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        },
        {
          "src": "./icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    },

    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      runtimeCaching: [{
        urlPattern: /^https:\/\/fonts\.gstatic\.com/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'google-fonts-webfonts'
        }
      }]
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