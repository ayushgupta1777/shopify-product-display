// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/admin/api',
    createProxyMiddleware({
      target: 'https://messold101.myshopify.com',
      changeOrigin: true,
      secure: false,
      headers: {
        'X-Shopify-Access-Token': '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',
      },
      pathRewrite: {
        '^/admin/api': '/admin/api'
      },
    })
  );
};
