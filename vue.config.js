module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    open: false, //是否自动弹出浏览器页面
    https: false, //是否使用https协议
    hotOnly: true, //是否开启热更新
    proxy: {
      "/api": {
        target: "http://bl.7yue.pro/v1",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          //重写路径 比如'/api/a/b'重写为'/a/b'
          "^/api": "",
        },
      },
    },
  },
  productionSourceMap: true,
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
};
