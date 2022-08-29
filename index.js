// include dependencies
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// proxy middleware options
const options = {
  target: 'https://arkrec.com',
  headers: { "Connection": "keep-alive" },
  secure: false,
  logLevel: "debug",
  changeOrigin: true
};

// create the proxy (without context)
const exampleProxy = createProxyMiddleware(options);

// mount `exampleProxy` in web server
const app = express();
app.use(exampleProxy);

app.listen(5000);