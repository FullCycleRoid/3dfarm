const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/upload",
    proxy({
      target: "http://localhost:3100",
      changeOrigin: true
    })
  );
};