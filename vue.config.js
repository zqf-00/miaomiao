module.exports = {
    devServer : {
        proxy : {
            '/ajax' : {
                target : 'https://m.maoyan.com',
                changeOrigin : true
            },
            '/search' : {
                target : 'https://i.maoyan.com/apollo/ajax',
                changeOrigin : true
            }
        }
    }
}