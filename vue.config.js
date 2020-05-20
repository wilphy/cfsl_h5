module.exports = {
    devServer: {
      host: "localhost",
      port: 8080,
      proxy: {
        "/api": {
          target: "http://bl.7yue.pro/v1/",
          changeOrigin: true,
          pathRewrite: {
            "/api": ""
          }
        }
      }
    },
    productionSourceMap: true,
    chainWebpack: config => {
      config.plugins.delete("prefetch");
    }
  };
  