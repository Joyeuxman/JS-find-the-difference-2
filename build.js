({
    baseUrl:'js/',
    name:'main',
    out:'game.min.js',
    // optimize:'none',
    paths:{
        jquery:'../libs/jquery',
        'jquery.fullscreen':'../libs/jquery.fullscreen'
    },
    shim:{
        'jquery.fullscreen':['jquery']
    }
})