const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    
    proxy('/api',{
      target: 'http://m.jxedt.com',
      changeOrigin: true,
      pathRewrite:{
          '^/api': ''
      }
    }),
    proxy('/city',{
      target:'https://m.moretickets.com',
      changeOrigin:true,
      pathRewrite:{
        '^/city':''
      }
    }),
    proxy('/school',{
      target:'http://m.jxedt.com',
      changeOrigin:true,
      pathRewrite:{
        '^/school':''
      }
    })
  )
}