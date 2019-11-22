module.exports={
    proxy:{
        '/':{ //将localhost：8080 映射为 /apis
            target:'http://39.105.59.135:6666',//接口地址
            changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
            secure:false, //如果接口是HTTPS接口，需要设置成true
            pathRewrite:{
                '^/':''
            }
        }
    }
}