const {createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        createProxyMiddleware("/api/", {
            target: "http://39.105.194.205:10001",
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            }
        })
    );
};