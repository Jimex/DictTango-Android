function sendWord(word) {
    postMessageJson({
        "Event": 'SendWord',
            "Content": word
    });
}
function setTitle(title) {
    postMessageJson({
        "Event": 'SetTitle',
            "Content": title
    });
}
function performBackspace() {
    postMessageJson({
        "Event": 'Backspace'
    });
}
function performDeleteWord() {

        postMessageJson({
            "Event": 'DeleteWord'
        });
   
}

function postMessageJson(json) {
    try {
        if (window.androidJsBridge) {
            window.androidJsBridge.postMessage(JSON.stringify(json));
        }
        else {
            if (chrome != undefined) {
                if (chrome.webview) {

                    chrome.webview.postMessage(JSON.stringify(json));
                }
            }
        }
    }
    catch (e) {
        alert(e.message);
        console.trace();
    }
}