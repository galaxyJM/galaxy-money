const path = require('path')  //引入nodejs的path模块来处理目录

module.exports = {
  lintOnSave: false,
  publicPath: '/galaxyMoney/',
  chainWebpack: config =>{
    const dir = path.resolve(__dirname,'src/assets/icons')  //找到要引入的svg的目录

    config.module
        .rule('svg-sprite')
        .test(/\.svg$/)
        .include.add(dir).end()   //定义一个规则 包含icons
        .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()


    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{plainSprite:true}])  //配置插件

    config.module.rule('svg').exclude.add(dir)  //让其他的svg不使用上述规则
  }

}
