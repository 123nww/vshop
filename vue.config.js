const path = require('path');//引入path模块
function resolve(dir) {
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}


module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vshop/'
        : '/'
    ,

    chainWebpack: (config) => {
        config.resolve.alias
            //set第一个参数：设置的别名，第二个参数：设置的路径
            .set('@', resolve('./src'))
            .set('components', resolve('./src/components'))
            .set('assets', resolve('./src/assets'))
            .set('views', resolve('./src/views'))
            .set('network', resolve('./src/network'))
            .set('common', resolve('./src/common'))
        //注意 store 和 router 没必要配置

        //svg设置
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()

    },
    // chainWebpack(config) {
    //     // svg设置
    //     config.module
    //         .rule('svg')
    //         .exclude.add(resolve('src/icons'))
    //         .end()
    //     config.module
    //         .rule('icons')
    //         .test(/\.svg$/)
    //         .include.add(resolve('src/icons'))
    //         .end()
    //         .use('svg-sprite-loader')
    //         .loader('svg-sprite-loader')
    //         .options({
    //             symbolId: 'icon-[name]'
    //         })
    //         .end()
    // },

    devServer: {
        // 项目运行时候的端口号
        port: 9004,
        open:true

    }

}