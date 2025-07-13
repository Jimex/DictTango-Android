var useTangoAPI = true;
var GetVersion =
    function() {
        return "0.9.7.0   (2023年06月)";
    };

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(o, f) {
        var l = this.length;
        if (f == null) f = 0;
        else if (f < 0) f = Math.max(0, l + f);
        for (var i = f; i < l; i++) {
            if (this[i] === o) return i;
        }
        return -1;
    };
}
var Variant = function(w, v) {
    if (v) {
        var u = vt[w];
        if (u) w = u;
    }
    return w;
};
var BlkFlag = 0;
var Arrayalize = function(s, v) {
    BlkFlag = 0;
    var a = [];
    for (var i = 0; i < s.length; i++) {
        var w = s.charAt(i);
        switch (w) {
            case '@':
                BlkFlag |= 0x0001;
                break;
            case 'A':
                BlkFlag |= 0x0002;
                break;
            case 'B':
                BlkFlag |= 0x0004;
                break;
            case 'C':
                BlkFlag |= 0x0008;
                break;
            case 'D':
                BlkFlag |= 0x0010;
                break;
            case 'E':
                BlkFlag |= 0x0020;
                break;
            case 'F':
                BlkFlag |= 0x0040;
                break;
            case 'G':
                BlkFlag |= 0x0080;
                break;
            case 'H':
                BlkFlag |= 0x0100;
                break;
            case 'X':
                BlkFlag |= 0x2000;
                break;
            case 'Y':
                BlkFlag |= 0x4000;
                break;
            case 'Z':
                BlkFlag |= 0x8000;
                break;
            default:
                var c = w.charCodeAt(0);
                if ((c >= 0x2FF0) && (c <= 0x2FFB)) break;
                if ((c >= 0xD800) && (c <= 0xDBFF)) w += s.charAt(++i);
                a.push(Variant(w, v));
        }
    }
    if (BlkFlag == 0) BlkFlag = 0xFFFF;
    return a;
};
var GetBlock = function(c) {
    if ((c >= 0x4E00) && (c <= 0x9FFF)) n = 1;
    else if ((c >= 0x3400) && (c <= 0x4DBF)) n = 2;
    else if ((c >= 0x20000) && (c <= 0x2A6DF)) n = 3;
    else if ((c >= 0x2A700) && (c <= 0x2B739)) n = 4;
    else if ((c >= 0x2B740) && (c <= 0x2B81D)) n = 5;
    else if ((c >= 0x2B820) && (c <= 0x2CEA1)) n = 6;
    else if ((c >= 0x2CEB0) && (c <= 0x2EBE0)) n = 7;
    else if ((c >= 0x30000) && (c <= 0x3134A)) n = 8;
    else if ((c >= 0x31350) && (c <= 0x323AF)) n = 9;
    else if ((c >= 0xF900) && (c <= 0xFA6D)) n = 27;
    else if ((c >= 0xFA70) && (c <= 0xFAD9)) n = 28;
    else if ((c >= 0x2F800) && (c <= 0x2FA1D)) n = 29;
    else if ((c >= 0xF0220) && (c <= 0x108FC4)) n = 30;
    else n = 0;
    return n;
};
var GetIndex = function(c) {
    var n = GetBlock(c);
    switch (n) {
        case 1:
            i = c - 0x4DCF;
            break;
        case 2:
            i = c + 0x1E31;
            break;
        case 3:
            i = c - 0x1940F;
            break;
        case 4:
            i = c - 0x1942F;
            break;
        case 5:
            i = c - 0x19435;
            break;
        case 6:
            i = c - 0x19437;
            break;
        case 7:
            i = c - 0x19445;
            break;
        case 8:
            i = c - 0x1A864;
            break;
        case 9:
            i = c - 0x1A869;
            break;
        case 27:
            i = c + 0x8247;
            break;
        case 28:
            i = c + 0x8245;
            break;
        case 29:
            i = c - 0x17AE1;
            break;
        case 30:
            i = c - 0xD82E3;
            break;
        default:
            for (i = 48; i > 0; i--) {
                if (c == dt[i].charCodeAt(0)) break;
            }
    }
    return i;
};
var Eliminate = function(a, s, d, v) {
    var f = (a.length == 1) && (a[0] == "#");
    if (s == "@") {
        if (f) a.length = 0;
        return 1;
    }
    var n = 0;
    var k = 0;
    var b = a.concat();
    for (var i = 0; i < s.length; i++) {
        var w = s.charAt(i);
        if (w == "!") {
            if (!d) {
                if (f) a.length = 0;
                n = 1;
                break;
            }
        }
        if ((w == "@") || (w == "!")) {
            if (k) {
                if (!a.length || !n) break;
                a.length = 0;
                for (j = 0; j < b.length; j++) a.push(b[j]);
                n = 0;
            }
            k++;
        } else {
            if (!f && a.length) {
                var j = 0;
                var c = w.charCodeAt(0);
                if ((c >= 0xD800) && (c <= 0xDBFF)) {
                    j++;
                    w += s.charAt(++i);
                    c = ((c - 0xD800) << 10) + w.charCodeAt(1) + 0x2400;
                }
                var m = a.indexOf(Variant(w, v));
                if (m < 0) {
                    if (m = GetIndex(c)) n += Eliminate(a, dt[GetIndex(c)].slice(j + 1), d, v);
                    else n++
                } else a.splice(m, 1);
            } else n++;
        }
    }
    return n;
};
var GetMatch = function(s, v, d, u, m, h) {
    var k1 = h.indexOf("$CHR$") >= 0;
    var k2 = h.indexOf("$ENC$") >= 0;
    var k3 = h.indexOf("$UCD$") >= 0;
    var k4 = h.indexOf("$UCh$") >= 0;
    var k5 = h.indexOf("$UCH$") >= 0;
    var x = Arrayalize(s, v).sort();
    s = x.join("");
    var a = [];
    for (var ii = 1; ii < dt.length; ii++) {
        var i = (ii < dt.length - 48) ? (ii + 48) : (ii - dt.length + 49);
        var y = x.concat();
        var j = 0;
        var w = dt[i].charAt(j);
        var c = w.charCodeAt(0);
        if ((c >= 0xD800) && (c <= 0xDBFF)) {
            w += dt[i].charAt(++j);
            c = ((c - 0xD800) << 10) + w.charCodeAt(1) + 0x2400;
        }
        var z = GetBlock(c);
        switch (z) {
            case 1:
                f = 0x0001;
                break;
            case 2:
                f = 0x0002;
                break;
            case 3:
                f = 0x0004;
                break;
            case 4:
                f = 0x0008;
                break;
            case 5:
                f = 0x0010;
                break;
            case 6:
                f = 0x0020;
                break;
            case 7:
                f = 0x0040;
                break;
            case 8:
                f = 0x0080;
                break;
            case 9:
                f = 0x0100;
                break;
            case 27:
            case 28:
            case 29:
                f = 0x2000;
                break;
            case 30:
            case 31:
                f = 0x4000;
                break;
            default:
                f = 0x8000;
        }
        if (!(BlkFlag & f)) continue;
        if (u && (f & 0x4000)) continue;
        if (Filter(w, c, z)) continue;
        var n = 0;
        if (Variant(w, v) != s) {
            n = Eliminate(y, dt[i].slice(j + 1), d, v);
            if (y.length) continue;
        }
        var p = h;
        if (k1) p = p.replace("$CHR$", w);
        if (k2) p = p.replace("$ENC$", encodeURI(w));
        if (k3) p = p.replace("$UCD$", c.toString());
        if (k4) p = p.replace("$UCh$", c.toString(16));
        if (k5) p = p.replace("$UCH$", c.toString(16).toUpperCase());
        var p = MakeBlock(w, c, n, p, w);
        if (p && (!n || (a.length <= m))) a.push(p);
    }
    return a;
};
var Exhaust = function(s, d, m) {
    var t = "";
    if (s.length) {
        var j = 0;
        var w = s.charAt(j);
        var c = w.charCodeAt(0);
        if ((c >= 0xD800) && (c <= 0xDBFF)) {
            w += s.charAt(++j);
            c = ((c - 0xD800) << 10) + w.charCodeAt(1) + 0x2400;
        }
        var p = dt[GetIndex(c)].slice(j + 1);
        var k = 0;
        for (var i = 0; i < p.length; i++) {
            w = p.charAt(i);
            if ((w == "!") && !d) break;
            if ((w == "@") || (w == "!")) {
                if (k) t += (m < 0) ? "┇" : "‖";
                k++;
            } else {
                c = w.charCodeAt(0);
                if ((c >= 0xD800) && (c <= 0xDBFF)) w += p.charAt(++i);
                t += w;
                if (m) {
                    var q = Exhaust(w, d, -1);
                    if (q.length) t += "(" + q + ")";
                }
            }
        }
    }
    return t;
};
var GetTree = function(s, d) {
    var a = [];
    if (s.length) {
        var w = s.charAt(0);
        var c = w.charCodeAt(0);
        if ((c >= 0xD800) && (c <= 0xDBFF)) {
            w += s.charAt(1);
            c = ((c - 0xD800) << 10) + w.charCodeAt(1) + 0x2400;
        }
        var m = 0;
        var n = -1;
        var p = Exhaust(w, d, 1);
        do {
            n = p.indexOf("‖", m);
            var t = p.slice(m, (n < 0 ? p.length : n));
            t = MakeBlock(w, c, -1, "", t.length ? t : "(不再分解)");
            if (t) a.push(t);
            m = n + 1;
        } while (n >= 0);
    }
    return a;
};