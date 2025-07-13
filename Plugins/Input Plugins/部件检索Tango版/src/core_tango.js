let tangoAPI = null;
if (window.androidJsBridge) {
    tangoAPI = new TangoApi();
}
else
{
    tangoAPI = new TangoApi(serverUrl);
}

let db_table_dt = 'tb_input_plugin_radical_sarch_dt';
let db_table_alt_components = 'tb_input_plugin_radical_sarch_alt_components';
var wordObjs = [];
var wordComponetnsDictionary = {};
var altComponents = [];
var letterToWordMapping = {};
let unicodeBlocks = {
    "1": "BMP",
    "2": "ExA",
    "3": "ExB",
    "4": "ExC",
    "5": "ExD",
    "6": "ExE",
    "7": "ExF",
    "8": "ExG",
    "9": "ExH",
    "27": "CMP",
    "28": "CMP",
    "29": "CMP",
    "30": "SUP",
    "0": "OTH"
};
function prepareData(rebuild) {
    try {
        let queryResult = tangoAPI.execDbQuery(`SELECT name FROM sqlite_master WHERE type='table' AND name='${db_table_dt}'`);
        let importDataNeeded = false;
        if (queryResult.length == 0 || rebuild) {
            importDataNeeded = true;
            if (rebuild) {
                tangoAPI.execDbUpdate(`DROP TABLE IF EXISTS ${db_table_dt}; DROP TABLE IF EXISTS ${db_table_alt_components};`);
            }
            let sql = `CREATE TABLE ${db_table_dt}(
				Word TEXT NOT NULL,
				Components TEXT NOT NULL,
                MinimumComponents1 TEXT NULL,
                MinimumComponents2 TEXT NULL,
				ComponentDelimiter TEXT NULL,
                BlockNumber INTEGER NULL,
                BlockText TEXT NULL,
                Seq INTEGER NULL,
				PRIMARY KEY(Word)
				);
				CREATE INDEX ${db_table_dt}_idx01 ON ${db_table_dt}(Components);
                CREATE TABLE ${db_table_alt_components}(
                    Component TEXT NOT NULL,
                    AltComponent TEXT NOT NULL,
                    PRIMARY KEY(Component)
                    );
                    CREATE INDEX ${db_table_alt_components}_idx01 ON ${db_table_alt_components}(AltComponent);
			 `;
            tangoAPI.execDbUpdate(sql);
        }
        else {
            queryResult = tangoAPI.execDbQuery(`SELECT count(*) as count FROM ${db_table_dt}`);
            if (queryResult[0]['count'] == 0) {
                importDataNeeded = true;
            }
        }
        if (importDataNeeded) {
            showLoadingMask("正在准备数据");
            setTimeout(() => {
                importData();
            }, 500);

        }

    }
    catch (e) {
        hideLoadingMask();
        //console.error(e);
        alert(e.message);
    }

}

function importData() {
    tangoAPI.execDbUpdate(`DELETE FROM ${db_table_dt}`);
    //Generate word and minimum components
    wordObjs = [];
    wordComponetnsDictionary = {};
    for (let wordIndex = 1; wordIndex < dt.length; wordIndex++) {
        let s = dt[wordIndex];
        let wordObj = {
            "Word": "",
            "Components": "",
            "ComponentDelimiter": "",
            "MinimumComponents1": null,
            "MinimumComponents2": null,
            "BlockNumber": null,
            "BlockText": null,
            "Seq": wordIndex
        };
        let readingWord = true;
        for (var i = 0; i < s.length; i++) {
            var w = s.charAt(i);
            if (w == "@" || w == "!") {
                readingWord = false;
                wordObj.ComponentDelimiter = w;
            }
            else {
                var c = w.charCodeAt(0);
                if (c >= 0xD800 && c <= 0xDBFF) {
                    w += s.charAt(++i);
                }
                if (readingWord) {
                    wordObj.Word += w;
                }
                else {
                    wordObj.Components += w;
                }
                if (wordObj.Components)
                    wordObj.Components = wordObj.Components.trim();
            }
        }
        wordObj.BlockNumber = getBlockNumber(wordObj.Word);
        wordObj.BlockText = getBlockStr(wordObj.Word);
        wordComponetnsDictionary[wordObj.Word] = wordObj.Components;
        //sql = `INSERT INTO ${db_table_dt}(Word, Components, ComponentDelimiter) VALUES(@word, @components,@ComponentDelimiter)`;
        //console.log(sql);
        //console.log(wordObj);
        wordObjs.push(wordObj);
        if(wordIndex % 1000 == 0)
        {
            getMinimumComponents();
    
            tangoAPI.execDbBulkCopy(db_table_dt, wordObjs, function (ajaxResult) {
                if (!ajaxResult.success) {
                    alert(ajaxResult.errorMessage);
                    return;
                };
            });
            wordObjs = [];
        }
    }
    if(wordObjs.length>0)
    {
        getMinimumComponents();
        tangoAPI.execDbBulkCopy(db_table_dt, wordObjs, function (ajaxResult) {
            if (!ajaxResult.success) {
                alert(ajaxResult.errorMessage);
                return;
            };
        });
        wordObjs = [];
    }
   
    wordComponetnsDictionary = {};
    //Genreate alternative components
    for (var key in vt) {
        var altComponent = {
            "Component": key,
            "AltComponent": vt[key]
        };
        altComponents.push(altComponent);
    }
    console.log(altComponents.length);
    tangoAPI.execDbBulkCopy(db_table_alt_components, altComponents, function (ajaxResult) {
        hideLoadingMask();
        if (!ajaxResult.success) {

            setTimeout(() => {
                alert(ajaxResult.errorMessage);
            }, 500);
            return;
        }
        else {
            showLoadingMask('数据成功生成');
            setTimeout(() => {
                hideLoadingMask();
            }, 500);
        }
    });

}

function getMinimumComponents() {
    for (let wordIndex = 1; wordIndex < wordObjs.length; wordIndex++) {
        let wordRecord = wordObjs[wordIndex];
        let minimumComponents = getComponentsRecuse(wordRecord.Components);
        if (minimumComponents != wordRecord.Components) {
            wordRecord.MinimumComponents1 = minimumComponents.trim();
        }
    }
}

function getComponentsRecuse(components) {
    var MinimumComponents = "";
    //let foundAlertComponents = false;
    for (var i = 0; i < components.length; i++) {
        var wordComponent = components.charAt(i);
        var c = wordComponent.charCodeAt(0);
        if (c >= 0xD800 && c <= 0xDBFF) {
            wordComponent += components.charAt(++i);
        }
        //console.log(`Check sub components for ${wordComponent}`);
        var subComponents = wordComponetnsDictionary[wordComponent];
        if (subComponents) {
            MinimumComponents += getComponentsRecuse(subComponents);
            //foundAlertComponents = true;
        }
        else {
            MinimumComponents += wordComponent;
        }
    }
    return MinimumComponents;

}

function getUnicodeStr(s) {
    var c = s.charCodeAt(0);
    var hex = c.toString(16)
    if (c >= 0xD800 && c <= 0xDBFF) {
        hex += s.charAt(1).toString(16);
    }
    return 'c' + hex;
}
function findMathViaAPI(maxNumberRetun, checkOnTheFlyOptions) {
    if (checkOnTheFlyOptions && !matchOptions.onthefly)
        return;
    if (ime) return;
    var inputEL = radiclaInputBox;
    //inputEL.focus();
    var s = GetSel(inputEL);
    if (!s) s = inputEL.innerText;
    if (!s) {
        document.getElementById("counter").innerHTML = "";
        document.getElementById("output").innerHTML = "<br>";
        lq = s;
        return;
    }
    if (maxNumberRetun == 0)
        maxNumberRetun = (s == lq) ? 999 : 99;

    let resultWords = [];

    const start = Date.now();
    let where = " Components LIKE '"
    //var likeExpression = s.charAt(0);
    for (var i = 0; i < s.length; i++) {
        where += `${s.charAt(i)}%`;
    }
    where += `' OR Word = '${s}'`
    let searchTextArray = getStringArray(s);
    let queryResult = [];
    //有通假部首的情况
    for (var i = 0; i < searchTextArray.length; i++) {
        let word = searchTextArray[i];
        let searchTextList = [];
        queryResult = tangoAPI.execDbQuery(`SELECT * FROM ${db_table_alt_components} WHERE AltComponent='${word}'`);
        if (queryResult.length > 0) {
            for (var j = 0; j < queryResult.length; j++) {
                let searchText = s.replace(word, queryResult[j].Component);
                where += ` OR Components LIKE '${searchText}%' OR Word = '${searchText}'`;
            }
        }
    }
    let searchSql = `SELECT * FROM (SELECT * FROM ${db_table_dt} WHERE (${where}) AND (${getFilterBlocksQueryCondition()}) ORDER BY BlockNumber, LENGTH(MinimumComponents1) LIMIT 0, 99)`;
    if (matchOptions.variant) {
        let searchText = `'` + searchTextArray.join("','") + `'`;
        queryResult = tangoAPI.execDbQuery(`SELECT * FROM ${db_table_dt} WHERE Word IN (${searchText})`);
        let variantCretiea = "";
        for (var i = 0; i < searchTextArray.length; i++) {
            var word = searchTextArray[i];
            var foundWord = false;
            for (var j = 0; j < queryResult.length; j++) {
                let entity = queryResult[j];
                if (entity.Word == word) {
                    if (entity.MinimumComponents1) {
                        variantCretiea += entity.MinimumComponents1.trim() + '%';
                        foundWord = true;
                    }
                    else if (entity.Components) {
                        variantCretiea += entity.Components.trim() + '%';
                        foundWord = true;
                    }
                    else {
                        foundWord = false;
                    }

                    break;
                }
            }
            if (!foundWord) {
                variantCretiea += word.trim() + '%';
            }
        }
        //console.log(`searchTextArray:${searchTextArray} | variantCretiea:${variantCretiea} | sql: ${sql}`);
        searchSql += `UNION SELECT * FROM (SELECT * FROM ${db_table_dt} WHERE (MinimumComponents1 like '%${variantCretiea}%') AND (${getFilterBlocksQueryCondition()})  ORDER BY BlockNumber, LENGTH(MinimumComponents1) LIMIT 0, 99)`;
        //queryResult = tangoAPI.execDbQuery(sql);
        //console.log(`ALTER SQL:${sql}, Result:${JSON.stringify(queryResult)}`);
        //resultWords = resultWords.concat(queryResult);
    }
    let unionSql = `SELECT * FROM (${searchSql}) a ORDER BY BlockNumber, LENGTH(MinimumComponents1)`
    console.log(unionSql);
    queryResult = tangoAPI.execDbQuery(unionSql);
    resultWords = queryResult;


    const Escalate = (Date.now() - start) / 1000.0;
    let summaryMsg =  (resultWords.length > maxNumberRetun ? ("<span style='color:red'>超過 " + maxNumberRetun + " 字</span>") : ("總計 " + resultWords.length + " 字")) + " (" + Escalate + " 秒)";
    document.getElementById("counter").innerHTML = summaryMsg;
    console.log(summaryMsg);
    let html = "";
    if (resultWords.length > 0) {
        showShowAllButton();
        var f = resultWords.length == 1 ? "Exact" : "Fuzzy";
        for (var i = 0; i < resultWords.length; i++) {
            var j = 0;
            let word = resultWords[i].Word;
            if (!word) {
                console.log(`Invalid record:${JSON.stringify(resultWords[i])}`)
                continue;
            }
            let w = word.charAt[j];
            var c = getWordUnicodeNumber(word);
            html += `<a class='out-char-block ${f} ${resultWords[i].BlockText}' dblclick="ReplaceFind('${word}');return false;" onclick="sendWord('${word}')">${word}</a>`;
        }
        //document.getElementById("output").innerHTML = html + "<br>";
    }
    else
    {
        hideShowAllButton();
    }
    document.getElementById("output").innerHTML = html + "<br>";
}



function getBlockNumber(word) {
    var c = getWordUnicodeNumber(word);
    return GetBlock(c);
}
function getBlockStr(word) {
    var n = getBlockNumber(word);
    var blockStr = unicodeBlocks[n.toString()];
    //console.log(`${n}:${blockStr}`);
    return blockStr;
}
function getWordUnicodeNumber(word) {
    var c = word.charCodeAt(0);
    if ((c >= 0xD800) && (c <= 0xDBFF)) {
        c = ((c - 0xD800) << 10) + word.charCodeAt(1) + 0x2400;
    }
    return c;
}
function getStringArray(s) {
    let strArr = [];
    let index = 0;
    for (var i = 0; i < s.length; i++) {
        let word = s.charAt(i);
        let c = word.charCodeAt(0);
        if (c >= 0xD800 && c <= 0xDBFF) {
            word += s.charAt(++i);
        }
        strArr[index] = word.toString();
        index++;
    }
    return strArr;
}

function getFilterBlocksQueryCondition() {
    let condiction = ``;
    for (let blockStr in searchBlocks) {
        let blockEnabled = searchBlocks[blockStr];
        if (blockEnabled) {
            condiction += `'${blockStr}',`
        }
    }
    if (condiction.length > 0)
        condiction = condiction.substring(0, condiction.length - 1);
    return ` BlockText IN (${condiction})`;
}
/*
function sendWord(word) {
    try {
        if (chrome) {
            if (chrome.webview) {
                var json = {
                    "Event": 'SendWord',
                    "Content": word
                };
                chrome.webview.postMessage(JSON.stringify(json));
            }
        }
    }
    catch (e) {
        alert(e.message);
    }
}
*/
// 實體按鍵改變
/*
var onKeyDown = function (event) {
    var activeElement = document.activeElement;
    let keyChar = event.key;
    let isLetterNumber = /^[A-Za-z0-9]*$/.test(String.fromCharCode(event.which));
    if(isLetterNumber)
        event.preventDefault();
    if (activeElement.id == "input" && !isLetterNumber) {
        switch (event.code) {
            case 'Enter':
                FindMatch(0, false);
                break;
            case 'Escape':
                ClearFind();
                break;
        }
        FindMatch(0, true);
    }
    else {
        switch (event.code) {
            case 'Backspace':
                performBackspace();
                break;
            case 'Delete':
                if (event.altKey) {
                    try {
                        if (chrome) {
                            if (chrome.webview) {
                                var json = {
                                    "Event": 'DeleteWord'
                                };
                                chrome.webview.postMessage(JSON.stringify(json));
                            }
                        }
                    }
                    catch (e) {
                        alert(e.message);
                    }
                }
                break;
            case 'Escape': //ESC
                ClearFind();
                break;
            default:
                if(event.shifKey)
                {
                    keyChar = keyChar.toUpperCase();
                }
                if(letterToComponentMapping[keyChar])
                {
                    Key(letterToComponentMapping[keyChar]);
                }
                console.log(`${keyChar} is pressed`);
                return false;
                break;
        }
       
    }
};
*/
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
function showLoadingMask(text) {
    document.getElementById('loading-mask').style.display = "";
    document.getElementById('loading-mask').innerText = text;
}

function hideLoadingMask(text) {
    document.getElementById('loading-mask').style.display = "none";
}