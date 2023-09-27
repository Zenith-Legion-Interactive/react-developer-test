const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/data",
    createProxyMiddleware({
      target: "https://dummyapi.io",
      changeOrigin: true,
      pathRewrite: {
        "^/data": "/data/v1",
      },
    })
  );
};
