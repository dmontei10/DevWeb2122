function getContentHtml(){
    var iframe = document.getElementById('iFrame');
    var content = document.documentElement.innerHTML;
    iframe.contentDocument.body.outerText = content;
}