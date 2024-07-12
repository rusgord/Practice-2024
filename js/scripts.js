function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onload = function () {
        if (callback) {
            callback();
        }
    };

    document.head.appendChild(script);
}

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', function () {
    console.log('Bootstrap loaded');
});
loadScript('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js', function () {
    console.log('Bootstrap loaded');
});
loadScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js', function () {
    console.log('Ajax loaded');
});
