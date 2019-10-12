module.exports = {
  proxy:{
    '/api':{
      target: 'https://tips.boti.cn', // 接口域名
      changeOrigin: true, //是否跨域
      pathRewrite: {
        '^/api/' : '/',
        /*
        * // 重写请求，比如我们源访问的包含/api，那么请求会将/api替换为/yh/ihr/api
        '/api': '/yh/ihr/api',
         // 重写请求，比如我们源访问的是api/old-path，那么请求会被解析为/api/new-path
        '^/api/old-path' : '/api/new-path',
        // 同上
        '^/api/remove/path' : '/path'
        *
        * */
      },
      // onProxyRes : proxy.on('proxyRes', function (proxyRes, req, res) {
      //   console.log('target', JSON.stringify(proxyRes.headers, true, 2))
      // })
    }
  }
}
