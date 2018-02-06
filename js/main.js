require.config({
    paths:{
        jquery:'../libs/jquery',
        'jquery.fullscreen':'../libs/jquery.fullscreen'
    },
    shim:{
        'jquery.fullscreen':['jquery']
    }
})
require(['Game'],function(Game){
    new Game('main')
})
