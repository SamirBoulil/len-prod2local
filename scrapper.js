// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
    var context = "selection";
    var title = "Open in local environment";
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
        "id": "context" + context});  
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
    console.log(info);
    if(typeof( info.linkUrl ) !== 'undefined'){
        var url = info.linkUrl;
        var reHttps = /https/i
        var reCom = /com/i
        var urlLocal = url.replace(reHttps, 'http');
        var urlLocal = urlLocal.replace(reCom, 'local');
        window.open(urlLocal, '_blank');
    }
};
