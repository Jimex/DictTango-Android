//const { log } = require("winjs");



// Global 變數
var did = 0;
// $CHR$ 表示未經編碼的漢字變數
// $ENC$ 表示經URI編碼的漢字變數
// $UCD$ 表示漢字的10進制Unicode變數
// $UCh$ 表示漢字的16進制小寫Unicode變數
// $UCH$ 表示漢字的16進制大寫Unicode變數
var ref = did ? ("entry://$CHR$") : "https://zi.tools/zi/$ENC$";
var ime = 0;

// 設定 Cookie
var SetCookie = function (n, v) {
	try {
		if (window.localStorage)
			window.localStorage.setItem(n, v);
		else
			document.cookie = n + "=" + v + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
	} catch (exception) { }
};

// 讀取 Cookie
var GetCookie = function (n, v) {
	var s = "";
	try {
		if (window.localStorage) {
			s = window.localStorage.getItem(n);
			if (!s) {
				window.localStorage.setItem(n, v);
				s = v;
			}
		}
		else {
			var t = n + "=";
			var a = document.cookie.split(';');
			for (var i = 0; i < a.length; i++) {
				var p = a[i];
				while (p.charAt(0) == ' ') p = p.slice(1);
				if (p.indexOf(t) == 0) {
					s = p.slice(t.length, p.length);
					break;
				}
			}
			if (s == "") {
				SetCookie(n, v);
				s = v;
			}
		}
	} catch (exception) { }
	return s;
};

// 寫入剪貼簿
var SetClipBoard = function (s) {
	s = decodeURI(s);
	if (window.clipboardData) {
		window.clipboardData.clearData();
		window.clipboardData.setData("Text", s);
	}
	else {
		var t = document.createElement("textarea");
		t.textContent = s;
		var body = document.body;
		body.appendChild(t);
		t.select();
		document.execCommand('copy');
		body.removeChild(t);
	}
};

// 取得游標位置
var GetPos = function (e) {
	//e.focus();
	var n = 0;
	//n = e.selectionStart;
	return n;
};

// 設定游標位置
var SetPos = function (e, n) {
	//e.setSelectionRange(n, n);
};

// 取得選擇文字
var GetSel = function (e) {
	return e.innerText;// e.value.substring(e.selectionStart, e.selectionEnd);
}

// 清除選擇文字
var DelSel = function (e) {
	//e.innerText = "";
	/*
	var m = e.selectionStart;
	var n = e.selectionEnd;
	if (m != n) {
		e.value = e.value.substring(0, m) + e.value.substring(n);
		e.setSelectionRange(m, m);
	}
	*/
}

// 設定功能鍵
var FnKey = [];
var SetFnKey = function (w) {
	if (FnKey.length > 9) FnKey.splice(0, 1);
	FnKey.push(w);
	var s = "";
	for (i = 0; i < FnKey.length; i++)
		s += "<button class='FnKey' onclick='Key(\"" + FnKey[i] + "\")' oncontextmenu='SetClipBoard(\"" + FnKey[i] + "\");return false;'>" + FnKey[i] + "</button>";
	document.getElementById("FnKey").innerHTML = s;
};

// 過濾比對字符
// w : Unicode字元
// c : Unicode碼
// z : Unicode碼區 1=基本 2=A區 3=B區 4=C區 5=D區 6=E區 7=F區 8=G區 9=H區
//                 27,28=相容 29=相容補充 30=補充 0=其他
// 回傳真值表示捨棄此字
var Filter = function (w, c, z) {
	//	if (z == 0)  return true;
	return false;
};

// 產生結果方塊
// w : Unicode字元
// c : Unicode碼
// m : 命中狀態 0=精確命中 >0=模糊命中 <0=漢字解構
// a : 執行動作
// t : 顯示文字
// 回傳空字串表示捨棄此字
var MakeBlock = function (w, c, m, a, t) {
	var f = (m < 0) ? "Decmp" : (m ? "Fuzzy" : "Exact");
	var n = GetBlock(c);
	switch (n) {
		case 1:		// 基本
			b = "BMP";
			break;
		case 2:		// A區
			b = "ExA";
			break;
		case 3:		// B區
			b = "ExB";
			break;
		case 4:		// C區
			b = "ExC";
			break;
		case 5:		// D區
			b = "ExD";
			break;
		case 6:		// E區
			b = "ExE";
			break;
		case 7:		// F區
			b = "ExF";
			break;
		case 8:		// G區
			b = "ExG";
			break;
		case 9:		// H區
			b = "ExH";
			break;
		case 27:	// 相容
		case 28:
			b = "CMP";
			break;
		case 29:	// 相容
			b = "CMP";
			break;
		case 30:	// 補充
			b = "SUP";
			break;
		default:	// 其他
			b = "OTH";
	}

	return ("<a class='out-char-block " + f + " " + b + "' oncontextmenu='ReplaceFind(\"" + w + "\");return false;' ondblclick='SetFnKey(\"" + w + "\")' " + a + ">" + t + "</a>");
};


// 部件檢索
var lq;
var FindMatch = function (m, c) {
	if (useTangoAPI) {
		findMathViaAPI();
		return;
	}
	if (ime) return;
	var e = radiclaInputBox;
	//e.focus();
	if (c && !matchOptions.onthefly)
		return;
	var s = GetSel(e);
	if (!s) s = e.value;
	if (!s) {
		document.getElementById("counter").innerHTML = "";
		document.getElementById("output").innerHTML = "<br>";
		lq = s;
		return;
	}
	var d = matchOptions.subdivide;
	var l = [];
	const start = Date.now();
	if (s.charAt(0) == "\\")
		l = GetTree(s.slice(1), d);
	else {
		var v = matchOptions.variant;//document.getElementById("variant").checked;
		var b = matchOptions.copymode;//document.getElementById("copymode").checked;
		var j = b ? "SetClipBoard(\"$CHR$\");return false;" : ";";
		//var h = "href='" + ref + "' target='_blank' title='U+$UCH$' onclick='" + j + "'";
		var h = `title='U+$UCH$' onclick="processKeyResult('$CHR$')"`;
		var u = matchOptions.ucodeonly;//document.getElementById("ucodeonly").checked;
		if (m == 0) m = (s == lq) ? 999 : 99;
		l = GetMatch(s, v, d, u, m, h);
	}
	const Escalate = (Date.now() - start) / 1000.0;
	let summaryMsg = ((l.length > m) ?("<span style='color:red'>超過 " + m + " 字</span>") : ("總計 " + l.length + " 字")) + " (" + Escalate + " 秒)";

	document.getElementById("counter").innerHTML = summaryMsg;
	console.log(summaryMsg);
	document.getElementById("output").innerHTML = l.join(" ") + "<br>";
	lq = s;


	//console.log(`wrapHeight:${wrapHeight}, descHeight:${descHeight}`)
	/*
	if (wrapHeight <= descHeight) {
		$("#button-show-all").hide();
	}
	else {
		$("#button-show-all").show();
	}
	*/

};
let orgOutputContainerHeight = 0;
// 清除檢索
var ClearFind = function () {
	var e = radiclaInputBox;
	e.text = "";
	//e.focus();
	FindMatch(0, false);
};

// 倒退清除
var Backspace = function () {
	var e = radiclaInputBox;
	var n = GetPos(e);
	if (n > 0) {
		var s = e.innerText;
		var c = s.charCodeAt(n - 2);
		var m = ((c >= 0xD800) && (c <= 0xDBFF)) ? n - 2 : n - 1;
		e.innerText = s.slice(0, m) + s.slice(n);
		SetPos(e, m);
		FindMatch(0, true);
	}
};

// 取代檢索
var ReplaceFind = function (s) {
	var e = radiclaInputBox;
	if (!GetSel(e)) e.innerText = "";
	Key(s);
};

// 解構漢字
var Decompose = function () {
	var e = radiclaInputBox;
	var n = GetPos(e);
	if (n > 0) {
		var s = e.innerText;
		var m = n - 1;
		var w = s.charAt(m);
		if (m > 0) {
			var c = s.charCodeAt(m - 1);
			if ((c >= 0xD800) && (c <= 0xDBFF))
				w = s.charAt(--m) + w;
		}

		//var d = document.getElementById("subdivide").checked;
		var t = Exhaust(w, matchOptions.subdivide, 0);
		if (t.length) {
			e.innerText = s.slice(0, m) + t + s.slice(n);
			SetPos(e, m + t.length);
			FindMatch(0, true);
		}
	}
};

// 自訂鍵盤輸入
var Key = function (k) {
	var e = radiclaInputBox;
	DelSel(e);
	var n = GetPos(e);
	var s = e.innerText;
	e.innerText = s + k;
	//var c = k.charCodeAt(0);
	//var m = ((c >= 0xD800) && (c <= 0xDBFF)) ? n + 2 : n + 1;
	//SetPos(e, m);
	FindMatch(0, true);
};



// 包容異體改變
var OnVar = function () {
	matchOptions.variant = !matchOptions.variant;
	SetCookie("tango_keyboard_variant", matchOptions.variant ? "1" : "0");
	//radiclaInputBox.focus();
	FindMatch(0, true);
};

// 無理拆分改變
var OnSdv = function () {
	matchOptions.subdivide = !matchOptions.subdivide;
	SetCookie("tango_keyboard_subdivide", matchOptions.subdivide ? "1" : "0");
	//radiclaInputBox.focus();
	FindMatch(0, true);
};

// 限標準字改變
var OnUco = function () {
	matchOptions.ucodeonly = !matchOptions.ucodeonly;
	SetCookie("tango_keyboard_ucodeonly", matchOptions.ucodeonly ? "1" : "0");
	//radiclaInputBox.focus();
	FindMatch(0, false);
};

// 即時查詢改變
var OnFly = function () {
	matchOptions.onthefly = !matchOptions.onthefly;
	SetCookie("tango_keyboard_onthefly", matchOptions.onthefly ? "1" : "0");
	//radiclaInputBox.focus();
	FindMatch(0, true);
};

// 較大字形改變
var OnFnt = function () {
	//var b = document.getElementById("largefont").checked;
	//SetCookie("largefont", b ? "1" : "0");
	//document.getElementById("output").style.fontSize = b ? "3em" : "2em";
	////radiclaInputBox.focus();
};

// 複製模式改變
var OnCpy = function () {
	matchOptions.copymode = !matchOptions.copymode;
	SetCookie("tango_keyboard_copymode", matchOptions.copymode ? "1" : "0");
	//radiclaInputBox.focus();
	var e = document.getElementById("output").children;
	for (var i = 0; i < e.length; i++) {
		if (matchOptions.copymode)
			e[i].onclick = function () { SetClipBoard(this.text); return false; };
		else
			e[i].onclick = function () { ; };
	}
};

// 鍵盤開關改變
var isPadVisible = true;
var OnPad = function () {
	isPadVisible = !isPadVisible;
	SetCookie("tango_keyboard_keypad", isPadVisible ? "1" : "0");
	//document.getElementById("padbtn").innerHTML = isPadVisible ? "▲" : "▼";
	//document.getElementById("keypad").style.display = isPadVisible ? "block" : "none";
	//radiclaInputBox.focus();
};
let matchOptions = {
	"variant": true,
	"subdivide": false,
	"ucodeonly": true,
	"onthefly": true,
	"copymode": false
};


// 初始化
var Init = function () {
	//console.log("Init");
	prepareData(false);
	//document.getElementById("version").innerHTML = GetVersion();
	if (GetCookie("tango_keyboard_variant", "1") == "1") {
		document.getElementById("variant").classList.toggle("checked");
		matchOptions.variant = true;
	}
	if (GetCookie("tango_keyboard_subdivide", "1") == "1") {
		document.getElementById("subdivide").classList.toggle("checked");
		matchOptions.subdivide = true;
	}
	/*
	if (GetCookie("ucodeonly", "1") == "0") {
		document.getElementById("ucodeonly").classList.toggle("checked");
		matchOptions.ucodeonly = true;
	}
	if (GetCookie("onthefly", "1") == "0") {
		document.getElementById("onthefly").classList.toggle("checked");
		matchOptions.onthefly = true;
	}
	*/
	let cookieSearchBlocks = GetCookie("tango_keyboard_search_blocks");
	if (cookieSearchBlocks == "undefined") {
		cookieSearchBlocks = searchBlocks;
	}
	else {
		try {
			searchBlocks = JSON.parse(cookieSearchBlocks);
		}
		catch (e) {

		}
	}
	for (let blockStr in searchBlocks) {
		let blockEnabled = searchBlocks[blockStr];
		if (blockEnabled) {
			document.getElementById(`li-search-block-${blockStr}`).classList.toggle("checked");
		}
	}

	/*
	document.getElementById("variant").checked = GetCookie("variant", "1") == "1";
	document.getElementById("subdivide").checked = GetCookie("subdivide", "1") == "1";
	document.getElementById("ucodeonly").checked = GetCookie("ucodeonly", "0") == "1";
	document.getElementById("onthefly").checked = GetCookie("onthefly", "0") == "1";
	document.getElementById("largefont").checked = GetCookie("largefont", "0") == "1";
	document.getElementById("copymode").checked = GetCookie("copymode", "1") == "1";
	*/
	radiclaInputBox.addEventListener('compositionstart', function () { ime = true; });
	radiclaInputBox.addEventListener('compositionend', function () { setTimeout(function () { ime = false; FindMatch(0, true); }, 1); });


	$("#button-show-all").click(function () {
		var wrapHeight = $(".word-output-container .word-output").height();
		var descHeight = $(".word-output-container").height();
		document.getElementById("button-show-all").classList.toggle("open");
		if ($("#button-show-all").hasClass("open")) {
			if (orgOutputContainerHeight == 0)
				orgOutputContainerHeight = descHeight;
			$(".word-output-container").animate({ height: wrapHeight }, 500);
			hideMainKeyboardSection();
		}
		else {
			$(".word-output-container").animate({ height: orgOutputContainerHeight }, 500);
			showMainKeyboardSection();
		}
	});

	OnFnt();
	isPadVisible = GetCookie("keypad", "1") == "0";
	loadKeyboard(0);
	//loadComponents();
	OnPad();
};

function hideMainKeyboardSection() {
	$('#main_keyboard_section').hide();
	$('#radical_keyboard_section').hide();
	$('#function_button_section').hide();
}
function showMainKeyboardSection() {
	$('#main_keyboard_section').show();
	$('#radical_keyboard_section').show();
	$('#function_button_section').show();
}
var secondKeyLayoutHtml = ``
function loadKeyboard(index) {
	if (index == -1) {
		document.getElementById("main_keyboard_section").innerHTML = secondKeyLayoutHtml;
		document.getElementById("main_keyboard_section").style.gridTemplateRows = `repeat(4, var(--key_size))`;
		return;
	}
	//var html = `<div class="key BMP" onclick="Key('@')">基本</div><div class="key ExA" onclick="Key('A')">A區</div><div class="key ExB" onclick="Key('B')">B區</div><div class="key ExC" onclick="Key('C')">C區</div><div class="key ExD" onclick="Key('D')">D區</div><div class="key ExE" onclick="Key('E')">E區</div><div class="key ExF" onclick="Key('F')">F區</div><div class="key ExG" onclick="Key('G')">G區</div><div class="key ExH" onclick="Key('H')">H區</div><div class="key CMP" onclick="Key('X')">相容</div><div class="key SUP" onclick="Key('Y')">補充</div><div class="key OTH" onclick="Key('Z')">其他</div>`;
	var html = '';
	secondKeyLayoutHtml = '';
	let wordIndex = 0;
	letterToComponentMapping = {};
	let keyLength = kt[index].length;
	console.log("keyLength:" + keyLength);
	for (var j = kt[index].indexOf(":") + 1; j < keyLength; j++) {
		/*
		if (wordIndex % 15 == 0) {
			if (wordIndex != 0) {
				html += `</div>`;
			}
			html += `<div class="keyboard__row">`;
		}
		*/
		var w = kt[index].charAt(j);
		var c = w.charCodeAt(0);
		if ((c >= 0xD800) && (c <= 0xDBFF))
			w += kt[index].charAt(++j);
		if (w == ",") {
			continue;
		}
		let ascStart = 97;
		if (wordIndex >= 26)
			ascStart -= 32 + 26;

		let keyChar = '';
		if (wordIndex < 52) {
			keyChar = String.fromCharCode(ascStart + wordIndex);
			letterToComponentMapping[keyChar] = w;
		}
		wordIndex++;
		if (j < keyLength && wordIndex == 40) {
			secondKeyLayoutHtml += `<div class="key" onclick="loadKeyboard(${index})">↶</div><div class="key" onclick="Key('${w}')"><span>${w}</span></div>`
			html += `<div class="key" onclick="loadKeyboard(-1)">↷</div>`;
		}
		else {
			if (wordIndex < 40) {
				html += `<div class="key" onclick="Key('${w}')"><span>${w}</span></div>`; //"<button class='Key' onclick='Key(\"" + w + "\")' oncontextmenu='SetClipBoard(\"" + w + "\");return false;'>" + w + "</button>";
			}
			else {
				secondKeyLayoutHtml += `<div class="key" onclick="Key('${w}')"><span>${w}</span></div>`;
			}
		}
	}

	//if (wordIndex % 15 != 0)
	//	html += `</div>`;

	var noOfRows = (wordIndex + 10) / 10;
	//if (Math.round(noOfRows) != noOfRows)
	//	noOfRows = Math.round(noOfRows) + 1;
	if (noOfRows < 4)
		noOfRows = 4;
	/*
	noOfRows++;
	html += `
	  <div class="key" onclick="switchKeys()">⇆</div>
	  <div class="key" id="accent-keyboard-settings">⚙</div>
	  <div class="key" id="accent-keyboard-clear-text" onclick="clearText()"><i class="fa-solid fa-xmark"></i></div>
	  <div class="key" onclick="onBackspace()">部</div>
	  <div class="key" onclick="onBackspace()"><i class="fa-solid fa-filter"></i></div>
	  <div class="key" onclick="onBackspace()">⚙</div>
	  <div class="key" onclick="sendWord('\n');"><i class="fa-solid fa-magnifying-glass"></i></div>         
	  <div class="key" onclick="onBackspace()">⌫</div>
	`;
	*/
	document.getElementById("main_keyboard_section").innerHTML = html;
	document.getElementById("main_keyboard_section").style.gridTemplateRows = `repeat(${noOfRows}, var(--key_size))`;



	html = ``;
	for (var i = 0; i < kt.length; i++) {
		let keyHtml = `<span class="comp-letter" style=\"display:none\">`;
		for (var j = 0; j < kt[i].length; j++) {
			var w = kt[i].charAt(j);
			var c = w.charCodeAt(0);
			if ((c >= 0xD800) && (c <= 0xDBFF))
				w += kt[i].charAt(++j);
			if (w == ",") {
				keyHtml += "</span><span class=\"category-key\">"
				continue;
			}
			if (w == ":")
				break;
			keyHtml += w;
		}
		keyHtml += "</span>";
		html += `<div class="key radical-block" onclick="loadKeyboard(${i})">${keyHtml}</div>`;
	}
	html += "</div>";
	document.getElementById("radical_keyboard_section").innerHTML = html;
	document.getElementById("radical_keyboard_section").style.gridTemplateRows = `repeat(2, var(--key_size))`;
}

function loadComponents() {
	let html = ``;
	for (var i = 0; i < kt.length; i++) {
		let keyHtml = `<span class="comp-letter" style=\"display:none\">`;
		for (var j = 0; j < kt[i].length; j++) {
			var w = kt[i].charAt(j);
			var c = w.charCodeAt(0);
			if ((c >= 0xD800) && (c <= 0xDBFF))
				w += kt[i].charAt(++j);
			if (w == ",") {
				keyHtml += "</span><span class=\"category-menu\">"
				continue;
			}
			if (w == ":")
				break;
			keyHtml += w;
		}
		keyHtml += "</span>";
		html += `<li class="item"><div onclick="loadKeyboard(${i})">${keyHtml}</div></li>`;
	}
	document.getElementById(`ul-components`).innerHTML = html;
	/*
	for (var i = 0; i < kt.length; i++) {
		let keyHtml = `<span class="comp-letter" style=\"display:none\">`;
		for (var j = 0; j < kt[i].length; j++) {
			var w = kt[i].charAt(j);
			var c = w.charCodeAt(0);
			if ((c >= 0xD800) && (c <= 0xDBFF))
				w += kt[i].charAt(++j);
			if (w == ",") {
				keyHtml += "</span><span class=\"category-key\">"
				continue;
			}
			if (w == ":")
				break;
			keyHtml += w;
		}
		keyHtml += "</span>";
		html += `<li class="item"><div class="key" onclick="loadKeyboard(${i})">${keyHtml}</div></li>`;
	}
	document.getElementById("rightKeyboard").innerHTML = html;
	document.getElementById("rightKeyboard").style.gridTemplateRows = `repeat(5, var(--key_size))`;
	*/
}
let searchBlocks = {
	'BMP': true,
	'ExA': true,
	'ExB': true,
	'ExC': true,
	'ExD': true,
	'ExE': true,
	'ExF': true,
	'ExG': true,
	'ExH': true,
	'CMP': true,
	'SUP': true,
	'OTH': true
};

function toggleSearchBlock(blockStr) {
	searchBlocks[blockStr] = !searchBlocks[blockStr];
	SetCookie("tango_keyboard_search_blocks", JSON.stringify(searchBlocks));
	FindMatch();
}

function processKeyResult(key) {
	alert(key);
}
function showShowAllButton() {
	$("#button-show-all").show();
}

function hideShowAllButton() {
	$("#button-show-all").hide();
}
//region keyboard key 
function onClearText() {
	if (radiclaInputBox.innerText.length > 0) {
		radiclaInputBox.innerText = "";
		FindMatch(0, true);
		hideShowAllButton();
	}
	else
		sendClearTextRequest();
}
function onBackspace() {
	if (radiclaInputBox.innerText.length > 0) {
		const textLength = radiclaInputBox.innerText.length;
		if (textLength > 0) {
			let text = radiclaInputBox.innerText;
			let charCode = text.charCodeAt(textLength - 2);
			var m = ((charCode >= 0xD800) && (charCode <= 0xDBFF)) ? textLength - 2 : textLength - 1;
			radiclaInputBox.innerText = text.slice(0, m) + text.slice(textLength);
			FindMatch(0, true);
			if (radiclaInputBox.innerText) {
				showShowAllButton();
			}
			else {
				hideShowAllButton();
			}
		}
	}
	else
		performBackspace();
}
function onSettings()
{
	$("#keyboard").slideUp();
	$("#settingsContainer").slideDown();
}

function exitSettings(){
	$("#settingsContainer").slideUp();
	$("#keyboard").slideDown();
	
}
//endreigon
window.onload = Init;