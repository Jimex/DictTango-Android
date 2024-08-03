function loadConfigItem(itemKey, defaultValue) {
    let itemValue = localStorage.getItem(itemKey);
    if (!itemValue) {
        itemValue = defaultValue
    }
    return itemValue;
}

function setConfigItem(itemKey, itemValue) {
    localStorage.setItem(itemKey, itemValue);
}

function saveTangoKeyBaordConfig()
{
    setConfigItem('TangoKeyboardConfig', JSON.stringify(tangoKeyboardConfig));
}
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
function sendClearTextRequest() {

    postMessageJson({
        "Event": 'ClearText'
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

function loadConfig() {
    let savedfigJson = loadConfigItem('TangoKeyboardConfig');

    if (savedfigJson) {
        tangoKeyboardConfig = JSON.parse(savedfigJson);
    }
    else {
        tangoKeyboardConfig = {
            selectedKeyboardLyaouts: allKeyboardLayouts,
            openLastKeybaordOnPopup: false
        };
    }
    if (tangoKeyboardConfig.selectedKeyboardLyaouts.length == 0) {
        tangoKeyboardConfig.selectedKeyboardLyaouts = allKeyboardLayouts;
    }

    let ctlKeyboardLayouts = document.getElementById('ctlKeyboardLayouts');
    allKeyboardLayouts.forEach(keyboardLayoutName => {
        let opt = document.createElement('option');
        if (tangoKeyboardConfig.selectedKeyboardLyaouts.indexOf(keyboardLayoutName) > -1) {
            opt.selected = true;
        }
        opt.value = keyboardLayoutName;
        opt.innerText = keyboardLayoutName;
        opt.addEventListener("mousedown",
            function (e) {
                e.preventDefault();
                opt.parentElement.focus();
                this.selected = !this.selected;
                return false;
            }
            , false
        );
        ctlKeyboardLayouts.appendChild(opt);
    });

    document.getElementById("ckbOpenLastKeybaordOnPopup").checked = tangoKeyboardConfig.openLastKeybaordOnPopup;
    console.log(tangoKeyboardConfig);
    var form = document.getElementById("configForm");
    form.addEventListener("input", function () {
        console.log("Form has changed!");
    });
    document.getElementById('ctlSaveButton').disabled = false;
    //document.getElementById('ctlVersion').innerText = 'Version v' + tangoKeyboardConfig.version;
    //tangoKeyboardConfig.version = '1.2.1';
}
function saveConfig() {
    let ctlKeyboardLayouts = document.getElementById('ctlKeyboardLayouts');
    tangoKeyboardConfig.selectedKeyboardLyaouts = [];
    for (i = 0; i < ctlKeyboardLayouts.options.length; i++) {

        let opt = ctlKeyboardLayouts.options[i];
        let layoutName = opt.value;
        if (opt.selected) {
            tangoKeyboardConfig.selectedKeyboardLyaouts.push(layoutName);
        }
    }
    if(tangoKeyboardConfig.selectedKeyboardLyaouts.length == 0)
    {
        tangoKeyboardConfig.selectedKeyboardLyaouts = allKeyboardLayouts;
    }
    tangoKeyboardConfig.openLastKeybaordOnPopup = document.getElementById("ckbOpenLastKeybaordOnPopup").checked;
    console.log(tangoKeyboardConfig);
    saveTangoKeyBaordConfig();
    $("#settingsContainer").slideUp();
    createKeyboard();
}

var allKeyboardLayouts = ["Accent", "English", "French", "Greek", "Polish", "Russian", "Spanish", "Turkish", "Ukrainian"];
function getKeyboardLayoutByIndex(index) {
    return tangoKeyboardConfig.selectedKeyboardLyaouts[index].toLowerCase();
}


function getNextKeyboardLayout() {
    let currentIndex = tangoKeyboardConfig.selectedKeyboardLyaouts.indexOf(currentKeyboardLayoutName);
    if (currentIndex < tangoKeyboardConfig.selectedKeyboardLyaouts.length - 1)
        currentIndex++;
    else
        currentIndex = 0;
    currentKeyboardLayoutName = tangoKeyboardConfig.selectedKeyboardLyaouts[currentIndex];
    console.log("Current name" + currentKeyboardLayoutName);
    if (tangoKeyboardConfig.openLastKeybaordOnPopup) {
        tangoKeyboardConfig.lastkeybaordLayoutName = currentKeyboardLayoutName;
        saveTangoKeyBaordConfig();
    }
    return currentKeyboardLayoutName.toLowerCase();
}


function createKeyboard() {
    if (tangoKeyboardConfig.openLastKeybaordOnPopup) {
        currentKeyboardLayoutName = tangoKeyboardConfig.lastkeybaordLayoutName;
    }
    if (tangoKeyboardConfig.selectedKeyboardLyaouts.indexOf(currentKeyboardLayoutName) == - 1)
        currentKeyboardLayoutName = tangoKeyboardConfig.selectedKeyboardLyaouts[0];
    console.log("Current layout name:" + currentKeyboardLayoutName);
    $(this).accentKeyboard({
        layout: currentKeyboardLayoutName.toLowerCase(),
        active_shift: false,
        active_caps: false,
        is_hidden: false,
        open_speed: 300,
        close_speed: 100,
        show_on_focus: true,
        hide_on_blur: true,
        trigger: undefined,
        enabled: true
    });
}
let currentKeyboardLayoutName = '';
let tangoKeyboardConfig = {
    selectedKeyboardLyaouts: [],
    openLastKeybaordOnPopup: false,
    lastkeybaordLayoutName: ''
};

loadConfig();

