/* Ha Kate Test Center – giao diện game, giấy khen, gallery */
(function () {
"use strict";
var GS = window.HKGS, HK = function () { return window.HK; };
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
function $(id) { return document.getElementById(id); }
function lsGet(k) { try { return JSON.parse(localStorage.getItem(k) || "null"); } catch (e) { return null; } }
function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
var SVG = {
desk: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="6" y="18" width="52" height="8" rx="2" fill="#c98b4f"/><rect x="10" y="26" width="6" height="30" rx="2" fill="#8a5a2b"/><rect x="48" y="26" width="6" height="30" rx="2" fill="#8a5a2b"/><rect x="28" y="26" width="20" height="14" rx="2" fill="#b7793f"/><circle cx="38" cy="33" r="2.2" fill="#5b3a1a"/><rect x="18" y="10" width="12" height="8" rx="1" fill="#3ba9ee"/></svg>',
elbow: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 8 L30 38 L54 30" stroke="#f2c29b" stroke-width="13" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8 L30 38 L54 30" stroke="#e0a77c" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".6"/><circle cx="30" cy="38" r="11" fill="none" stroke="#e53935" stroke-width="3.5"/><circle cx="56" cy="30" r="6" fill="#f2c29b"/></svg>',
fork: '<svg viewBox="0 0 64 64" aria-hidden="true"><g fill="#8f9aa8"><rect x="29" y="30" width="6" height="28" rx="3"/><path d="M21 6h4v15h3V6h4v15h3V6h4v15h3V6h4v17a11 11 0 0 1-25 0z"/></g></svg>'
};
function pic(p, cls) {
if (!p) return "";
if (/^svg:/.test(p)) return '<span class="' + (cls || "") + ' svgpic">' + (SVG[p.slice(4)] || "") + "</span>";
return '<span class="' + (cls || "") + '">' + esc(p) + "</span>";
}
var AC = null, SOUND = lsGet("hk-snd") !== false;
function beep(ok) {
if (!SOUND) return;
try {
AC = AC || new (window.AudioContext || window.webkitAudioContext)();
var notes = ok ? [660, 880, 1175] : [300, 220];
notes.forEach(function (f, i) {
var o = AC.createOscillator(), g = AC.createGain(), t = AC.currentTime + i * 0.11;
o.type = ok ? "triangle" : "sawtooth"; o.frequency.value = f;
g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(ok ? 0.18 : 0.08, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + 0.22);
});
} catch (e) {}
}
function say(t) { if (t && SOUND && HK() && HK().say) HK().say(t); }
function confetti(box) {
if (!box) return; var c = ["#ff6b5b", "#ffc93c", "#3ba9ee", "#22b8a5", "#7c5cff", "#7bc96f"];
for (var i = 0; i < 18; i++) { var s = document.createElement("i"); s.className = "cf"; s.style.left = (10 + Math.random() * 80) + "%"; s.style.background = c[i % 6]; s.style.animationDelay = (Math.random() * 0.2) + "s"; s.style.setProperty("--dx", (Math.random() * 120 - 60) + "px"); box.appendChild(s); setTimeout(function (x) { x.remove(); }.bind(null, s), 1300); }
}
function keyOf(x) { return x.k + "|" + x.b.b + "|" + x.u.n; }
function hasGames(x) { return !!(x && GS.SPEC[keyOf(x)]); }
var LVNAME = ["", "Dễ", "Khá", "Trung bình", "Khó", "Rất khó"];
function renderList(box, x, arg) {
var key = keyOf(x), games = GS.gamesFor(key), best = lsGet("hk-best") || {};
box.innerHTML = '<div class="gl-head"><span class="gl-ic">🎮</span><div><h2>Game ôn tập</h2><p>' + esc(GS.SPEC[key].kinder ? "Mỗi game ôn một chữ cái – chơi lần lượt từ game 1 nhé!" : "5 game từ dễ đến khó – game sau có thêm câu khó hơn.") + '</p></div></div>'
+ '<div class="glist">' + games.map(function (g) {
var qn = g.plan.reduce(function (s, p) { return s + p[0]; }, 0), top = Math.max.apply(null, g.plan.map(function (p) { return p[1]; }));
var b = best[key + "|" + g.n], sk = GS.SKINS[g.skin];
return '<a class="gcard sk-' + g.skin + '" data-go="play" data-arg="' + esc(arg + "~" + g.n) + '" href="#" target="_self">'
+ '<span class="gnum">' + g.n + '</span><span class="gico">' + sk.ic + '</span>'
+ '<b>' + esc(g.name) + '</b><span class="gmeta">' + qn + ' câu · ' + LVNAME[top] + '</span>'
+ '<span class="gstars">' + "★★★★★".slice(0, top) + '<i>' + "★★★★★".slice(top) + '</i></span>'
+ (b ? '<span class="gbest">Kỷ lục: ' + b.sc + "/" + b.tot + " " + "⭐".repeat(b.st) + '</span>' : '<span class="gbest new">Chưa chơi</span>')
+ '<span class="btn small gplay">Chơi ▶</span></a>';
}).join("") + '</div>';
}
var ST = null, timers = [];
function later(f, ms) { var t = setTimeout(f, ms); timers.push(t); return t; }
function clearT() { timers.forEach(clearTimeout); timers = []; try { speechSynthesis.cancel(); } catch (e) {} }
function stop() { clearT(); if (ST && ST.clock) { clearInterval(ST.clock); ST.clock = null; } }
var BOSSES = [["🍮", "Pudding Pop"], ["🧁", "Cupcake Kem"], ["🍩", "Donut Vui Vẻ"], ["🍭", "Kẹo Mút Xoáy"], ["🍰", "Bánh Kem Dâu"], ["🍪", "Bánh Quy Giòn"], ["🍦", "Kem Ốc Quế"], ["🍬", "Kẹo Ngọt"], ["🎂", "Bánh Sinh Nhật"], ["🥞", "Bánh Kếp"]];
var MONS = ["🐙", "🦄", "🐲", "🐸", "🦖", "🐳", "🐞", "🦋"];
function play(box, x, arg, n) {
stop();
var key = keyOf(x), g = GS.gamesFor(key).filter(function (z) { return z.n === n; })[0];
if (!g) { box.innerHTML = '<div class="empty">Không tìm thấy game.</div>'; return; }
var qs = GS.build(key, g), who = lsGet("hk-student") || {};
ST = { key: key, g: g, x: x, arg: arg, qs: qs, i: 0, sc: 0, coins: 0, streak: 0, wrong: [], tug: 0, boss: 0, hp: 5, start: 0, done: false };
box.className = "gm-wrap sk-" + g.skin;
box.innerHTML = '<div class="gm-start">'
+ '<div class="gs-ic">' + GS.SKINS[g.skin].ic + '</div><div class="eyebrow">Game ' + g.n + ' · ' + esc(x.b.b) + ' · Unit ' + esc(x.u.n) + '</div>'
+ '<h1>' + esc(g.name) + '</h1><p>' + qs.length + ' câu hỏi. Trả lời đúng để nhận xu 🪙 và sao ⭐. Bấm 🔊 để nghe đọc.</p>'
+ '<div class="idform"><label class="f">Họ và tên<input type="text" id="gName" value="' + esc(who.name || "") + '" placeholder="VD: Nguyễn Minh Anh"></label><label class="f">Lớp<input type="text" id="gCls" value="' + esc(who.cls || "") + '" placeholder="VD: Lớp 3A"></label></div>'
+ '<div class="errmsg" id="gErr" hidden>Con điền họ tên để cô nhận được kết quả nhé.</div>'
+ '<div class="row" style="justify-content:center"><button class="btn sun big" type="button" id="gGo">Bắt đầu chơi ▶</button></div></div>';
$("gGo").onclick = function () {
var nm = $("gName").value.trim(); if (!nm) { $("gErr").hidden = false; $("gName").focus(); return; }
lsSet("hk-student", { name: nm, cls: $("gCls").value.trim() });
try { speechSynthesis.speak(new SpeechSynthesisUtterance(" ")); } catch (e) {}
try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); AC.resume && AC.resume(); } catch (e) {}
ST.name = nm; ST.cls = $("gCls").value.trim(); ST.start = Date.now();
box.innerHTML = '<div class="gm"><div class="gm-top"><button class="gtb" type="button" id="gQuit" aria-label="Thoát">✕</button><span class="gpill" id="gPos"></span><span class="gpill">⭐ <b id="gSc">0</b></span><span class="gpill">🪙 <b id="gCo">0</b></span><span class="gpill" id="gTime">0:00</span><button class="gtb" type="button" id="gSnd" aria-label="Âm thanh">' + (SOUND ? "🔊" : "🔇") + '</button></div>'
+ '<div class="gm-stage" id="gStage"></div><div class="gm-card" id="gCard"></div></div>';
$("gQuit").onclick = function () { stop(); HK().go("games", arg); };
$("gSnd").onclick = function () { SOUND = !SOUND; lsSet("hk-snd", SOUND); this.textContent = SOUND ? "🔊" : "🔇"; };
ST.clock = setInterval(function () { var s = Math.floor((Date.now() - ST.start) / 1000); var t = $("gTime"); if (t) t.textContent = Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); }, 1000);
show();
};
["gName", "gCls"].forEach(function (id) { $(id).addEventListener("keydown", function (e) { if (e.key === "Enter") $("gGo").click(); }); });
}
function stage() {
var g = ST.g, n = ST.qs.length, i = ST.i, h = "";
if (g.skin === "fish") h = '<div class="sea"><span class="boat">🛶<b>🧒🎣</b></span><span class="bub b1"></span><span class="bub b2"></span><span class="bub b3"></span><span class="weed w1">🌿</span><span class="weed w2">🪸</span><span class="weed w3">🐚</span><span class="weed w4">🦀</span></div>';
else if (g.skin === "path") {
var s0 = Math.floor(i / 10) * 10, cnt = Math.min(10, n - s0), dots = "";
for (var d = 0; d < cnt; d++) { var k = s0 + d; dots += '<span class="pd' + (k < i ? " done" : k === i ? " cur" : "") + '" style="--x:' + (5 + d * 90 / Math.max(1, cnt - 1)) + '%;--y:' + (d % 2 ? 76 : 50) + '%">' + (k === i ? '<b class="hero">🐰</b>' : "") + (k + 1) + '</span>'; }
h = '<div class="island"><span class="dino">🦕</span><span class="tree t1">🌴</span><span class="tree t2">🌋</span>' + dots + '</div>';
} else if (g.skin === "tug") {
var pos = Math.max(-5, Math.min(5, ST.tug));
h = '<div class="tugbox"><div class="team a">🦁<b>Đội của con</b></div><div class="rope"><span class="flag" style="left:' + (50 - pos * 9) + '%">🚩</span></div><div class="team b">🐯<b>Đội bạn</b></div></div>';
} else if (g.skin === "boss") {
var b = BOSSES[ST.boss % BOSSES.length], hp = "";
for (var j = 0; j < 5; j++) hp += '<i class="' + (j < ST.hp ? "on" : "") + '"></i>';
h = '<div class="candy"><div class="fighter"><span class="hero2">🦖</span><b>' + esc(ST.name || "Bạn") + '</b></div><div class="vs">VS</div><div class="fighter"><span class="boss" id="gBoss">' + b[0] + '</span><b>' + b[1] + '</b><span class="hp">' + hp + '</span></div></div>';
} else if (g.skin === "monster") h = '<div class="mons-bg"><span class="ship" id="gShip">🚀</span></div>';
else h = '<div class="buildbg"><span>🧱</span><span>🔤</span><span>🏗️</span></div>';
$("gStage").innerHTML = h;
}
function show() {
clearT();
var q = ST.qs[ST.i], n = ST.qs.length;
$("gPos").textContent = "Câu " + (ST.i + 1) + " / " + n;
stage();
var promptH = "", body = "", lvl = '<span class="glv lv' + q.lv + '">' + LVNAME[q.lv] + '</span>';
var sayBtn = q.say ? '<button class="gsay" type="button" id="gSay" aria-label="Nghe đọc">🔊</button>' : "";
var p = q.p ? pic(q.p, "gpic") : "";
if (q.k === "w2p" || q.k === "yn") promptH = '<div class="gq big">' + esc(q.q) + "</div>";
else if (q.k === "first" || q.k === "miss") promptH = '<div class="gq word">' + esc(q.q).replace(/_+/g, function (m) { return '<span class="gap">' + "?".repeat(m.length > 1 ? 2 : 1) + "</span>"; }) + "</div>";
else promptH = '<div class="gq">' + esc(q.q).replace("____", '<span class="blank">______</span>') + "</div>";
if (q.k === "yn") promptH = '<div class="gq small">Tranh này là:</div>' + promptH;
if (q.opts) {
var monster = ST.g.skin === "monster";
body = '<div class="gopts' + (q.optPic ? " pics" : "") + (q.opts.length === 2 ? " two" : "") + (monster ? " mon" : "") + (ST.g.skin === "fish" && q.optPic ? " float" : "") + '">'
+ q.opts.map(function (o, j) { return '<button class="gopt" type="button" data-j="' + j + '">' + (monster ? '<span class="mon">' + MONS[(ST.i + j) % MONS.length] + '</span>' : "") + (q.optPic ? pic(o, "op") : '<span class="ot">' + esc(o) + "</span>") + "</button>"; }).join("") + "</div>";
} else if (q.k === "tiles" || q.k === "order") {
body = '<div class="slots" id="gSlots"></div><div class="tiles' + (q.k === "order" ? " words" : "") + '" id="gTiles">' + q.tiles.map(function (t, j) { return '<button class="tile" type="button" data-j="' + j + '">' + esc(t) + "</button>"; }).join("") + '</div><div class="row gact"><button class="btn ghost small" type="button" id="gClr">Xóa làm lại</button><button class="btn" type="button" id="gChk">Kiểm tra</button></div>';
} else if (q.k === "type") {
body = '<div class="typebox"><input type="text" id="gIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Gõ từ tiếng Anh…"><button class="btn" type="button" id="gChk">Kiểm tra</button></div><p class="ghint">Gợi ý: ' + q.target.length + " chữ cái" + (q.target.indexOf(" ") > 0 ? " (gồm cả dấu cách)" : "") + ", bắt đầu bằng “" + esc(q.target[0]) + "”</p>";
}
$("gCard").className = "gm-card k" + (1 + ST.i % 6);
$("gCard").innerHTML = '<div class="gc-top">' + lvl + sayBtn + "</div>" + (p ? '<div class="gpicbox">' + p + "</div>" : "") + promptH + body + '<div class="gfb" id="gFb" aria-live="polite"></div>';
if ($("gSay")) $("gSay").onclick = function () { say(q.say); };
if (q.listen || q.k === "w2p" || q.k === "start") later(function () { say(q.say); }, 350);
if (q.opts) Array.prototype.forEach.call(document.querySelectorAll(".gopt"), function (b) { b.onclick = function () { answer(+b.getAttribute("data-j")); }; });
if (q.tiles) {
var picked = [];
var draw = function () {
$("gSlots").innerHTML = picked.length ? picked.map(function (j, k) { return '<button class="tile on" type="button" data-k="' + k + '">' + esc(q.tiles[j]) + "</button>"; }).join(q.k === "order" ? " " : "") + (q.k === "order" ? '<span class="endp">' + esc(q.end) + "</span>" : "") : '<span class="ph">' + (q.k === "order" ? "Bấm các từ theo đúng thứ tự" : "Bấm các chữ cái theo đúng thứ tự") + "</span>";
Array.prototype.forEach.call(document.querySelectorAll("#gTiles .tile"), function (b) { b.disabled = picked.indexOf(+b.getAttribute("data-j")) >= 0; });
Array.prototype.forEach.call(document.querySelectorAll("#gSlots .tile"), function (b) { b.onclick = function () { picked.splice(+b.getAttribute("data-k"), 1); draw(); }; });
};
Array.prototype.forEach.call(document.querySelectorAll("#gTiles .tile"), function (b) { b.onclick = function () { picked.push(+b.getAttribute("data-j")); draw(); if (picked.length === q.tiles.length) $("gChk").focus(); }; });
$("gClr").onclick = function () { picked = []; draw(); };
$("gChk").onclick = function () { if (picked.length < q.tiles.length) { fb("Con xếp hết các ô nhé!", "info"); return; } var got = picked.map(function (j) { return q.tiles[j]; }).join(q.k === "order" ? " " : ""); answer(got === q.target ? 1 : 0, got); };
draw();
}
if (q.k === "type") {
var inp = $("gIn"); setTimeout(function () { try { inp.focus(); } catch (e) {} }, 50);
var chk = function () { var v = inp.value.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.?!]+$/, ""); if (!v) { fb("Con gõ đáp án nhé!", "info"); return; } answer(v === q.target.toLowerCase() ? 1 : 0, v); };
$("gChk").onclick = chk; inp.addEventListener("keydown", function (e) { if (e.key === "Enter") chk(); });
}
}
function fb(t, cls) { var f = $("gFb"); if (f) { f.className = "gfb " + (cls || ""); f.innerHTML = t; } }
function answer(j, got) {
var q = ST.qs[ST.i]; if (q.answered) return; q.answered = true;
var ok = q.opts ? j === q.ans : j === 1, right = q.opts ? q.opts[q.ans] : q.target;
Array.prototype.forEach.call(document.querySelectorAll(".gopt,.tile,#gChk,#gClr,#gIn"), function (b) { b.disabled = true; });
if (q.opts) { var bs = document.querySelectorAll(".gopt"); bs[q.ans].classList.add("ok"); if (!ok) bs[j].classList.add("bad"); }
var card = $("gCard");
if (ok) {
ST.sc++; ST.streak++; ST.coins += 10 + (ST.streak >= 3 ? 5 : 0); ST.tug++;
beep(true); confetti(card); card.classList.add("win");
var praise = ["Đúng rồi! Giỏi quá!", "Excellent!", "Great job!", "Tuyệt vời!", "Well done!", "Correct!"][ST.i % 6];
fb("🎉 " + praise + " +" + (10 + (ST.streak >= 3 ? 5 : 0)) + " 🪙" + (ST.streak >= 3 ? " · Chuỗi đúng ×" + ST.streak + " 🔥" : ""), "good");
if (ST.g.skin === "boss") { ST.hp = Math.max(0, ST.hp - 1); var bo = $("gBoss"); if (bo) bo.classList.add("hit"); }
if (ST.g.skin === "monster" && q.opts) { var m = document.querySelectorAll(".gopt")[j]; if (m) m.classList.add("zap"); }
if (ST.g.skin === "fish" && q.opts) { var f = document.querySelectorAll(".gopt")[j]; if (f) f.classList.add("caught"); }
} else {
ST.streak = 0; ST.tug--; beep(false); card.classList.add("shake");
ST.wrong.push({ n: ST.i + 1, q: q.q, right: right, got: q.opts ? q.opts[j] : got });
fb("Chưa đúng rồi. Đáp án đúng: <b>" + (q.optPic ? pic(right, "inl") : esc(right + (q.end || ""))) + "</b>", "bad");
}
if (q.say && (ok || !q.opts)) later(function () { say(q.say); }, 250);
$("gSc").textContent = ST.sc; $("gCo").textContent = ST.coins;
stage();
var last = ST.i >= ST.qs.length - 1;
var go = function () {
if (ST.g.skin === "boss" && (ST.i + 1) % 5 === 0) { ST.boss++; ST.hp = 5; }
if (last) finish(); else { ST.i++; show(); }
};
if (ok) later(go, 1300);
else { var f2 = $("gFb"); f2.insertAdjacentHTML("beforeend", ' <button class="btn small" type="button" id="gNext">' + (last ? "Xem kết quả" : "Câu tiếp ➜") + "</button>"); $("gNext").onclick = go; $("gNext").focus(); }
}
function finish() {
stop(); var tot = ST.qs.length, sc = ST.sc, pct = Math.round(sc / tot * 100), secs = Math.round((Date.now() - ST.start) / 1000);
var stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0, g = ST.g, x = ST.x, key = ST.key;
var code = (Date.now().toString(36).slice(-4) + Math.random().toString(36).slice(2, 6)).toUpperCase().replace(/(.{4})(.{4})/, "$1-$2");
var best = lsGet("hk-best") || {}, bk = key + "|" + g.n; if (!best[bk] || best[bk].sc < sc) { best[bk] = { sc: sc, tot: tot, st: stars }; lsSet("hk-best", best); }
var d = new Date(), date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
var badge = stars === 3 ? ["🏆", "Nhà vô địch"] : stars === 2 ? ["🥇", "Siêu sao"] : stars === 1 ? ["🥈", "Nhà thám hiểm"] : ["🌱", "Cố gắng"];
var next = GS.gamesFor(key).filter(function (z) { return z.n === g.n + 1; })[0];
var box = document.querySelector(".gm-wrap");
box.innerHTML = '<div class="cert" id="gCert"><span class="cs s1">★</span><span class="cs s2">★</span><span class="cs s3">★</span><span class="cs s4">★</span>'
+ '<div class="c-brand">HA KATE TEST CENTER · CLB TIẾNG ANH CÔ HÀ KATE</div><h1 class="c-title">Giấy khen phiêu lưu</h1>'
+ '<p class="c-sub">Trao tặng cho</p><div class="c-name">' + esc(ST.name) + '</div>'
+ '<p class="c-sub">đã hoàn thành <b>Game ' + g.n + ': ' + esc(g.name) + '</b><br>' + esc(HK().folderOf(x.k).n) + ' · ' + esc(x.b.b) + ' · Unit ' + esc(x.u.n) + (x.u.t ? ": " + esc(x.u.t) : "") + '</p>'
+ '<div class="c-stats"><div><span>Điểm</span><b>' + sc + "/" + tot + '</b></div><div><span>Thời gian</span><b>' + Math.floor(secs / 60) + ":" + String(secs % 60).padStart(2, "0") + '</b></div><div><span>Xu</span><b>' + ST.coins + '</b></div><div><span>Sao</span><b>' + (stars ? "⭐".repeat(stars) : "–") + '</b></div></div>'
+ '<div class="c-foot"><span class="c-mascot">🐰</span><div><div class="c-date">Hoàn thành ngày ' + date + '</div><div class="c-code">Mã hoàn thành ' + code + '</div></div><div class="c-badge"><span>' + badge[0] + '</span><b>' + badge[1] + '</b></div></div>'
+ '<div class="c-sign"><div><i></i>Chữ ký phụ huynh</div><div><i class="hk">Ms. Hà Kate</i>Giáo viên</div></div></div>'
+ '<div class="c-send" id="gSend"><span class="spin"></span> Đang gửi kết quả cho cô…</div>'
+ (ST.wrong.length ? '<details class="c-wrong"><summary>Xem lại ' + ST.wrong.length + ' câu chưa đúng</summary><ul>' + ST.wrong.map(function (w) { return "<li><b>Câu " + w.n + ":</b> " + esc(w.q) + " → đáp án: <b>" + (/^svg:|\p{Extended_Pictographic}/u.test(w.right) ? pic(w.right, "inl") : esc(w.right)) + "</b></li>"; }).join("") + "</ul></details>" : "")
+ '<div class="row c-btns"><button class="btn sun" type="button" id="gAgain">Chơi lại ↺</button>' + (next ? '<a class="btn" data-go="play" data-arg="' + esc(ST.arg + "~" + next.n) + '" href="#" target="_self">Game ' + next.n + ' ➜</a>' : "") + '<a class="btn ghost" data-go="games" data-arg="' + esc(ST.arg) + '" href="#" target="_self">Các game khác</a><button class="btn ghost" type="button" id="gPrint">In giấy khen 🖨️</button></div>';
if (stars >= 2) { confetti($("gCert")); later(function () { confetti($("gCert")); }, 500); }
$("gAgain").onclick = function () { HK().go("play", ST.arg + "~" + g.n, true); };
$("gPrint").onclick = function () { window.print(); };
window.scrollTo(0, 0);
HK().run("submitGame", { name: ST.name, cls: ST.cls, folder: x.k, book: x.b.b, unit: String(x.u.n), game: g.n, title: g.name, sc: sc, tot: tot, minutes: Math.round(secs / 60), secs: secs, stars: stars, coins: ST.coins, code: code, wrong: ST.wrong.map(function (w) { return w.n; }).join(",") })
.then(function () { $("gSend").className = "c-send ok"; $("gSend").textContent = "✔ Đã gửi kết quả cho cô Hà Kate."; })
.catch(function () { $("gSend").className = "c-send bad"; $("gSend").textContent = "Chưa gửi được kết quả (mạng chập chờn). Con chụp ảnh giấy khen gửi cô nhé."; });
}
var GAL = null, galWait = null;
function galLoad() {
if (GAL) return Promise.resolve(GAL);
if (!galWait) galWait = HK().run("getGallery").then(function (r) { GAL = r || []; return GAL; }).catch(function () { galWait = null; return []; });
return galWait;
}
function thumb(f, w) { return "https://drive.google.com/thumbnail?id=" + encodeURIComponent(f.id) + "&sz=w" + (w || 600); }
function galStrip(box) {
if (!box) return;
box.innerHTML = '<a class="galcard" data-go="gallery" href="#" target="_self"><span class="gal-ic">📸</span><span class="gal-t"><b>Gallery lớp học</b><span>Ảnh &amp; video các lớp của cô Hà Kate</span></span><span class="gal-th" id="galTh"><span class="spin"></span></span><span class="btn small sun">Xem ▶</span></a>';
galLoad().then(function (L) {
var th = $("galTh"); if (!th) return;
th.innerHTML = L.length ? L.slice(0, 4).map(function (f) { return '<img src="' + thumb(f, 200) + '" alt="" loading="lazy">' + (f.t === "vid" ? '<i class="pl">▶</i>' : ""); }).join("") : '<em>Sắp có ảnh</em>';
});
}
function galView(box) {
box.innerHTML = '<div class="loading"><span class="spin"></span>Đang tải ảnh…</div>';
galLoad().then(function (L) {
if (!L.length) { box.innerHTML = '<div class="empty">Gallery chưa có ảnh. Cô thêm ảnh/video vào thư mục Google Drive <b>“Ha Kate Gallery”</b> là trang tự hiện.</div>'; return; }
box.innerHTML = '<div class="galgrid">' + L.map(function (f, i) { return '<button class="galitem" type="button" data-i="' + i + '"><img src="' + thumb(f, 600) + '" alt="' + esc(f.n) + '" loading="lazy">' + (f.t === "vid" ? '<span class="pl">▶</span>' : "") + (f.n ? '<span class="cap">' + esc(f.n) + "</span>" : "") + "</button>"; }).join("") + '</div><div class="lightbox" id="galLb" hidden></div>';
Array.prototype.forEach.call(box.querySelectorAll(".galitem"), function (b) { b.onclick = function () { open(+b.getAttribute("data-i")); }; });
function open(i) {
var f = L[i], lb = $("galLb");
lb.innerHTML = '<div class="lb-in">' + (f.t === "vid" ? '<iframe src="https://drive.google.com/file/d/' + encodeURIComponent(f.id) + '/preview" allow="autoplay; fullscreen" allowfullscreen></iframe>' : '<img src="' + thumb(f, 1600) + '" alt="' + esc(f.n) + '">') + (f.n ? '<p>' + esc(f.n) + "</p>" : "") + '</div><button class="lb-x" type="button" aria-label="Đóng">✕</button>' + (L.length > 1 ? '<button class="lb-p" type="button" aria-label="Ảnh trước">‹</button><button class="lb-n" type="button" aria-label="Ảnh sau">›</button>' : "");
lb.hidden = false;
lb.querySelector(".lb-x").onclick = function () { lb.hidden = true; lb.innerHTML = ""; };
if (L.length > 1) { lb.querySelector(".lb-p").onclick = function () { open((i - 1 + L.length) % L.length); }; lb.querySelector(".lb-n").onclick = function () { open((i + 1) % L.length); }; }
lb.onclick = function (e) { if (e.target === lb) { lb.hidden = true; lb.innerHTML = ""; } };
}
});
}
window.HKG = { hasGames: hasGames, keyOf: keyOf, renderList: renderList, play: play, stop: stop, galStrip: galStrip, galView: galView, count: function (x) { return hasGames(x) ? GS.gamesFor(keyOf(x)).length : 0; } };
})();
