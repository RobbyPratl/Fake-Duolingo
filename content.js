(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://www.duolingo.com/images/favicon.ico?v=3';
    document.getElementsByTagName('head')[0].appendChild(link);
})();
setInterval(function(){ 
    document.title = 'Duolingo';   
}, 5000);
