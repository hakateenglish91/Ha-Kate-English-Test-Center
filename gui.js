/* Ha Kate Test Center – giao diện game, giấy khen, gallery */
(function () {
"use strict";
var GS = window.HKGS, HK = function () { return window.HK; };
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
function $(id) { return document.getElementById(id); }
function lsGet(k) { try { return JSON.parse(localStorage.getItem(k) || "null"); } catch (e) { return null; } }
function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
/* ---------- hình ---------- */
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
/* ---------- âm thanh ---------- */
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
/* ---------- danh sách game của unit ---------- */
function keyOf(x) { return x.k + "|" + x.b.b + "|" + x.u.n; }
function hasGames(x) { return !!(x && GS.SPEC[keyOf(x)]); }
var LVNAME = ["", "Easy", "OK", "Medium", "Hard", "Super hard"];
var LVVI = ["", "Dễ", "Khá", "Trung bình", "Khó", "Rất khó"];
function renderList(box, x, arg) {
var key = keyOf(x), games = GS.gamesFor(key), best = lsGet("hk-best") || {};
box.innerHTML = '<div class="gl-head"><span class="gl-ic">🎮</span><div><h2>Game ôn tập</h2><p>' + esc(GS.SPEC[key].kinder ? "Mỗi game ôn một chữ cái – chơi lần lượt từ game 1 nhé!" : "5 game từ dễ đến khó – game sau có thêm câu khó hơn.") + '</p></div></div>'
+ '<div class="glist">' + games.map(function (g) {
var qn = g.plan.reduce(function (s, p) { return s + p[0]; }, 0), top = Math.max.apply(null, g.plan.map(function (p) { return p[1]; }));
var b = best[key + "|" + g.n], sk = GS.SKINS[g.skin];
return '<a class="gcard sk-' + g.skin + '" data-go="play" data-arg="' + esc(arg + "~" + g.n) + '" href="#" target="_self">'
+ '<span class="gnum">' + g.n + '</span><span class="gico">' + sk.ic + '</span>'
+ '<b>' + esc(g.name) + '</b><span class="gmeta">' + qn + ' câu · ' + LVVI[top] + '</span>'
+ '<span class="gstars">' + "★★★★★".slice(0, top) + '<i>' + "★★★★★".slice(top) + '</i></span>'
+ (b ? '<span class="gbest">Kỷ lục: ' + b.sc + "/" + b.tot + " " + "⭐".repeat(b.st) + '</span>' : '<span class="gbest new">Chưa chơi</span>')
+ '<span class="btn small gplay">Chơi ▶</span></a>';
}).join("") + '</div>';
}
/* ---------- chơi game ---------- */
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
initStage();
show();
};
["gName", "gCls"].forEach(function (id) { $(id).addEventListener("keydown", function (e) { if (e.key === "Enter") $("gGo").click(); }); });
}
function initStage() {
var g = ST.g, el = $("gStage"); ST.pos = 0; ST.tug = 0; ST.wins = 0; ST.boss = 0; ST.hp = 5; ST.hearts = 3; ST.wave = 0; ST.alive = 5; ST.bricks = 0; ST.fish = 0;
el.className = "gm-stage st-" + g.skin;
if (g.skin === "fish") {
el.innerHTML = '<div class="tank"><div class="tank-top"><span class="bucket" id="gBucket">🪣<b id="gFishN">0</b></span><span class="boat2" id="gBoat">⛵<b>🧒🎣</b></span><span class="line" id="gLine"></span></div><div class="qpanel" id="gQ"></div><div class="water" id="gWater"><span class="weed w1">🌿</span><span class="weed w2">🪸</span><span class="weed w3">🐚</span><span class="weed w4">🦀</span><span class="bub b1"></span><span class="bub b2"></span><span class="bub b3"></span></div></div>';
$("gCard").hidden = true;
} else if (g.skin === "path") {
el.innerHTML = '<div class="island"><span class="dino">🦕</span><span class="tree t1">🌴</span><span class="tree t2">🌋</span><div class="stones" id="gStones"></div><span class="hero3" id="gHero">🐰</span><span class="stepn" id="gStep"></span></div>';
} else if (g.skin === "tug") {
el.innerHTML = '<div class="tugbox"><div class="team a" id="gTA">🦁<b>My team</b></div><div class="rope"><span class="flag" id="gFlag">🚩</span><span class="mid"></span></div><div class="team b" id="gTB">🐯<b>Team B</b></div><span class="wins" id="gWins"></span></div>';
} else if (g.skin === "boss") {
el.innerHTML = '<div class="candy"><div class="fighter" id="gHeroBox"><span class="hero2" id="gHero2">🦖</span><span class="hearts" id="gHearts"></span><b>' + esc(ST.name || "You") + '</b></div><div class="vs">VS</div><div class="fighter"><span class="boss" id="gBoss"></span><span class="hp" id="gHP"></span><b id="gBossN"></b></div><span class="shot" id="gShot"></span></div>';
} else if (g.skin === "monster") {
el.innerHTML = '<div class="mons-bg"><div class="mrow" id="gMons"></div><span class="ship" id="gShip">🚀</span><span class="laser" id="gLaser"></span></div>';
} else {
el.innerHTML = '<div class="buildbg"><div class="tower" id="gTower"></div><span class="crane">🏗️</span><span class="bricks-n" id="gBrN"></span></div>';
}
drawStage();
}
function drawStage() {
var g = ST.g, n = ST.qs.length;
if (g.skin === "path") {
var W = 8, start = Math.max(0, Math.min(ST.pos - 2, n + 1 - W)), h = "";
for (var d = 0; d < W && start + d <= n; d++) { var k = start + d; h += '<span class="stone' + (k === n ? " goal" : "") + (k < ST.pos ? " done" : "") + '" style="left:' + (6 + d * 12.5) + '%;top:' + (d % 2 ? 70 : 52) + '%">' + (k === n ? "🏰" : k) + "</span>"; }
$("gStones").innerHTML = h; ST.pstart = start;
var hd = ST.pos - start; $("gHero").style.left = (6 + hd * 12.5) + "%"; $("gHero").style.top = (hd % 2 ? 70 : 52) + "%";
$("gStep").textContent = "Step " + ST.pos + " / " + n;
} else if (g.skin === "tug") {
$("gFlag").style.left = (50 - ST.tug * 9) + "%"; $("gWins").textContent = ST.wins ? "🏆 × " + ST.wins : "";
} else if (g.skin === "boss") {
var b = BOSSES[ST.boss % BOSSES.length], hp = "", he = "";
for (var j = 0; j < 5; j++) hp += '<i class="' + (j < ST.hp ? "on" : "") + '"></i>';
for (var m = 0; m < 3; m++) he += m < ST.hearts ? "❤️" : "🤍";
$("gBoss").textContent = b[0]; $("gBossN").textContent = b[1]; $("gHP").innerHTML = hp; $("gHearts").textContent = he;
} else if (g.skin === "monster") {
var ms = "";
for (var i = 0; i < 5; i++) ms += '<span class="mo' + (i < 5 - ST.alive ? " gone" : "") + '" style="--d:' + (ST.near || 0) + '">' + MONS[(ST.wave * 5 + i) % MONS.length] + "</span>";
$("gMons").innerHTML = ms;
} else if (g.skin === "build") {
var t = ""; for (var k2 = 0; k2 < ST.bricks; k2++) t += '<i style="background:' + ["#ff6b5b", "#ffc93c", "#3ba9ee", "#7bc96f", "#7c5cff"][k2 % 5] + '"></i>';
$("gTower").innerHTML = t; $("gBrN").textContent = ST.bricks + " 🧱";
}
}
/* hiệu ứng sau mỗi câu: ok = đúng/sai, j = phương án đã chọn */
function react(ok, j) {
var g = ST.g, n = ST.qs.length;
if (g.skin === "path") {
ST.pos = Math.max(0, Math.min(n, ST.pos + (ok ? 1 : -1))); var hero = $("gHero");
hero.classList.remove("hop", "trip"); void hero.offsetWidth; hero.classList.add(ok ? "hop" : "trip");
if (ST.pos - ST.pstart > 5 || ST.pos < ST.pstart) later(drawStage, 450); else drawStage();
} else if (g.skin === "tug") {
ST.tug += ok ? 1 : -1; var who = ok ? $("gTA") : $("gTB"); who.classList.remove("pull"); void who.offsetWidth; who.classList.add("pull");
if (ST.tug >= 5) { ST.wins++; later(function () { ST.tug = 0; drawStage(); }, 900); }
if (ST.tug <= -5) later(function () { ST.tug = 0; drawStage(); }, 900);
drawStage();
} else if (g.skin === "boss") {
var shot = $("gShot"); shot.className = "shot " + (ok ? "toBoss" : "toHero"); shot.textContent = ok ? "⭐" : "🍬"; void shot.offsetWidth;
later(function () {
if (ok) { ST.hp--; $("gBoss").classList.add("hit"); } else { ST.hearts = Math.max(0, ST.hearts - 1); $("gHero2").classList.add("hit"); }
if (ST.hp <= 0) { $("gBoss").textContent = "💥"; later(function () { ST.boss++; ST.hp = 5; ST.hearts = 3; drawStage(); }, 700); }
else if (ST.hearts <= 0) later(function () { ST.hearts = 3; drawStage(); }, 700);
drawStage();
}, 450);
} else if (g.skin === "monster") {
if (ok) {
var ls = $("gLaser"), alive = document.querySelectorAll("#gMons .mo:not(.gone)"), tgt = alive[0];
if (tgt) { var r = tgt.getBoundingClientRect(), sr = $("gStage").getBoundingClientRect(); ls.style.left = (r.left - sr.left + r.width / 2) + "px"; ls.className = "laser fire"; tgt.classList.add("boom"); }
later(function () { ST.alive--; ST.near = 0; if (ST.alive <= 0) { ST.wave++; ST.alive = 5; } ls.className = "laser"; drawStage(); }, 600);
} else { ST.near = Math.min(3, (ST.near || 0) + 1); drawStage(); Array.prototype.forEach.call(document.querySelectorAll("#gMons .mo:not(.gone)"), function (m) { m.classList.add("laugh"); }); }
} else if (g.skin === "build") {
ST.bricks = Math.max(0, ST.bricks + (ok ? 1 : -1)); drawStage();
var top = $("gTower").lastElementChild; if (ok && top) top.classList.add("drop");
if (!ok) $("gTower").classList.add("wobble"), later(function () { $("gTower").classList.remove("wobble"); }, 500);
}
}
function show() {
clearT();
var q = ST.qs[ST.i], n = ST.qs.length, fish = ST.g.skin === "fish" && q.opts;
$("gPos").textContent = (ST.i + 1) + " / " + n;
var promptH = "", body = "", lvl = '<span class="glv lv' + q.lv + '">' + LVNAME[q.lv] + '</span>';
var spoken = q.young ? (q.ask || q.say) : q.say;
var sayBtn = spoken ? '<button class="gsay" type="button" id="gSay" aria-label="Listen">🔊</button>' : "";
var p = q.p ? pic(q.p, "gpic") : "";
if (q.k === "w2p" || q.k === "yn") promptH = '<div class="gq big">' + esc(q.q) + "</div>";
else if (q.k === "first" || q.k === "miss") promptH = '<div class="gq word">' + esc(q.q).replace(/_+/g, function (m) { return '<span class="gap">' + "?".repeat(m.length > 1 ? 2 : 1) + "</span>"; }) + "</div>";
else promptH = '<div class="gq">' + esc(q.q).replace("____", '<span class="blank">______</span>') + "</div>";
var insH = q.ins && q.ins !== q.q ? '<div class="gins">' + esc(q.ins) + "</div>" : "";
promptH = insH + promptH;
if (fish) {
$("gQ").innerHTML = '<div class="gc-top">' + lvl + sayBtn + "</div>" + (p ? '<div class="gpicbox sm">' + p + "</div>" : "") + promptH + '<div class="gfb" id="gFb" aria-live="polite"></div>';
var water = $("gWater"); Array.prototype.forEach.call(water.querySelectorAll(".fishopt"), function (f) { f.remove(); });
var lanes = q.opts.length, F = ["🐟", "🐠", "🐡", "🐟"];
q.opts.forEach(function (o, j) {
var b = document.createElement("button"); b.type = "button"; b.className = "fishopt"; b.setAttribute("data-j", j);
var dur = 9 + ((ST.i * 7 + j * 5) % 6), top = 8 + j * (78 / lanes);
b.style.top = top + "%"; b.style.animationDuration = dur + "s"; b.style.animationDelay = (-(j * 3.1 + ST.i) % dur) + "s";
b.innerHTML = '<span class="fbody" style="animation-duration:' + (dur * 2) + "s;animation-delay:" + b.style.animationDelay + '">' + F[j % 4] + '</span><span class="ftag">' + (q.optPic ? pic(o, "op") : esc(o)) + "</span>";
b.onclick = function () { catchFish(b, j); };
water.appendChild(b);
});
} else {
if (q.opts) {
body = '<div class="gopts' + (q.optPic ? " pics" : "") + (q.opts.length === 2 ? " two" : "") + '">'
+ q.opts.map(function (o, j) { return '<button class="gopt" type="button" data-j="' + j + '">' + (q.optPic ? pic(o, "op") : '<span class="ot">' + esc(o) + "</span>") + "</button>"; }).join("") + "</div>";
} else if (q.k === "tiles" || q.k === "order") {
body = '<div class="slots" id="gSlots"></div><div class="tiles' + (q.k === "order" ? " words" : "") + '" id="gTiles">' + q.tiles.map(function (t, j) { return '<button class="tile" type="button" data-j="' + j + '">' + esc(t) + "</button>"; }).join("") + '</div><div class="row gact"><button class="btn ghost small" type="button" id="gClr">Clear ↺</button><button class="btn" type="button" id="gChk">Check ✔</button></div>';
} else if (q.k === "type") {
body = '<div class="typebox"><input type="text" id="gIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type here…"><button class="btn" type="button" id="gChk">Check ✔</button></div><p class="ghint">' + esc(q.target[0]) + q.target.slice(1).replace(/\S/g, "_").split("").join(" ").replace(/^/, " ") + "</p>";
}
$("gCard").className = "gm-card k" + (1 + ST.i % 6);
$("gCard").innerHTML = '<div class="gc-top">' + lvl + sayBtn + "</div>" + (p ? '<div class="gpicbox">' + p + "</div>" : "") + promptH + body + '<div class="gfb" id="gFb" aria-live="polite"></div>';
}
if ($("gSay")) $("gSay").onclick = function () { say(spoken); };
if (q.young || q.listen || q.k === "w2p") later(function () { say(spoken); }, 350);
if (q.opts && !fish) Array.prototype.forEach.call(document.querySelectorAll(".gopt"), function (b) { b.onclick = function () { answer(+b.getAttribute("data-j")); }; });
if (q.tiles) {
var picked = [];
var draw = function () {
$("gSlots").innerHTML = picked.length ? picked.map(function (j, k) { return '<button class="tile on" type="button" data-k="' + k + '">' + esc(q.tiles[j]) + "</button>"; }).join(q.k === "order" ? " " : "") + (q.k === "order" ? '<span class="endp">' + esc(q.end) + "</span>" : "") : '<span class="ph">' + (q.k === "order" ? "Tap the words in order" : "Tap the letters in order") + "</span>";
Array.prototype.forEach.call(document.querySelectorAll("#gTiles .tile"), function (b) { b.disabled = picked.indexOf(+b.getAttribute("data-j")) >= 0; });
Array.prototype.forEach.call(document.querySelectorAll("#gSlots .tile"), function (b) { b.onclick = function () { picked.splice(+b.getAttribute("data-k"), 1); draw(); }; });
};
Array.prototype.forEach.call(document.querySelectorAll("#gTiles .tile"), function (b) { b.onclick = function () { picked.push(+b.getAttribute("data-j")); draw(); if (picked.length === q.tiles.length) $("gChk").focus(); }; });
$("gClr").onclick = function () { picked = []; draw(); };
$("gChk").onclick = function () { if (picked.length < q.tiles.length) { fb("Use all the tiles!", "info"); return; } var got = picked.map(function (j) { return q.tiles[j]; }).join(q.k === "order" ? " " : ""); answer(got === q.target ? 1 : 0, got); };
draw();
}
if (q.k === "type") {
var inp = $("gIn"); setTimeout(function () { try { inp.focus(); } catch (e) {} }, 50);
var chk = function () { var v = inp.value.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.?!]+$/, ""); if (!v) { fb("Type your answer!", "info"); return; } answer(v === q.target.toLowerCase() ? 1 : 0, v); };
$("gChk").onclick = chk; inp.addEventListener("keydown", function (e) { if (e.key === "Enter") chk(); });
}
}
/* câu cá: thuyền đi tới, thả dây, kéo cá lên rồi chấm */
function catchFish(b, j) {
var q = ST.qs[ST.i]; if (q.answered || ST.busy) return; ST.busy = true;
Array.prototype.forEach.call(document.querySelectorAll(".fishopt"), function (f) { f.disabled = true; });
var tank = document.querySelector(".tank").getBoundingClientRect(), r = b.getBoundingClientRect();
b.style.left = (r.left - tank.left) + "px"; b.style.top = (r.top - tank.top) + "px"; b.classList.add("hooked");
var boat = $("gBoat"), line = $("gLine"), x = r.left - tank.left + r.width / 2;
boat.style.left = (x - 30) + "px"; line.style.left = x + "px"; line.style.height = "0px";
later(function () { line.style.height = Math.max(0, r.top - tank.top - 40) + "px"; }, 450);
later(function () { b.style.top = "30px"; line.style.height = "0px"; }, 950);
later(function () { ST.busy = false; answer(j); var ok = j === q.ans;
if (ok) { b.classList.add("toBucket"); ST.fish++; $("gFishN").textContent = ST.fish; var bk = $("gBucket"); bk.classList.remove("bounce"); void bk.offsetWidth; bk.classList.add("bounce"); }
else { b.classList.add("thrown"); var c = document.querySelector('.fishopt[data-j="' + q.ans + '"]'); if (c) c.classList.add("glow"); }
}, 1650);
}
function fb(t, cls) { var f = $("gFb"); if (f) { f.className = "gfb " + (cls || ""); f.innerHTML = t; } }
function answer(j, got) {
var q = ST.qs[ST.i]; if (q.answered) return; q.answered = true;
var ok = q.opts ? j === q.ans : j === 1, right = q.opts ? q.opts[q.ans] : q.target;
Array.prototype.forEach.call(document.querySelectorAll(".gopt,.tile,#gChk,#gClr,#gIn"), function (b) { b.disabled = true; });
if (q.opts && ST.g.skin !== "fish") { var bs = document.querySelectorAll(".gopt"); bs[q.ans].classList.add("ok"); if (!ok) bs[j].classList.add("bad"); }
var card = ST.g.skin === "fish" ? $("gQ") : $("gCard");
if (ok) {
ST.sc++; ST.streak++; ST.coins += 10 + (ST.streak >= 3 ? 5 : 0);
beep(true); confetti(card); card.classList.add("win");
var praise = ["Great job!", "Excellent!", "Well done!", "Super!", "Correct!", "Amazing!"][ST.i % 6];
fb("🎉 " + praise + " +" + (10 + (ST.streak >= 3 ? 5 : 0)) + " 🪙" + (ST.streak >= 3 ? " · Streak ×" + ST.streak + " 🔥" : ""), "good");
} else {
ST.streak = 0; beep(false); card.classList.add("shake");
ST.wrong.push({ n: ST.i + 1, q: q.q, right: right, got: q.opts ? q.opts[j] : got });
fb("Oops! The answer is: <b>" + (q.optPic ? pic(right, "inl") : esc(right + (q.end || ""))) + "</b>", "bad");
}
react(ok, j);
if (q.say) later(function () { say(!q.opts || q.optPic || ok ? (q.opts ? q.say : q.target) : q.opts[q.ans]); }, 250);
$("gSc").textContent = ST.sc; $("gCo").textContent = ST.coins;
var last = ST.i >= ST.qs.length - 1;
var go = function () { card.classList.remove("win", "shake"); if (last) finish(); else { ST.i++; show(); } };
if (ok) later(go, window.__FAST ? 15 : 1500);
else { var f2 = $("gFb"); f2.insertAdjacentHTML("beforeend", ' <button class="btn small" type="button" id="gNext">' + (last ? "Finish 🏁" : "Next ➜") + "</button>"); $("gNext").onclick = go; $("gNext").focus(); }
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
/* ---------- gallery ---------- */
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
lb.innerHTML = '<div class="lb-in">' + (f.t === "vid" ? '<iframe src="https://drive.google.com/file/d/' + encodeURIComponent(f.id) + '/preview" allow="autoplay; fullscreen" allowfullscreen></iframe>' : '<img src="' + thumb(f, 1600) + '" alt="' + esc(f.n) + '">') + (f.n ? '<p>' + esc(f.n) + (f.g ? '<br><small class="gnote">' + esc(f.g) + '</small>' : '') + "</p>" : "") + '</div><button class="lb-x" type="button" aria-label="Đóng">✕</button>' + (L.length > 1 ? '<button class="lb-p" type="button" aria-label="Ảnh trước">‹</button><button class="lb-n" type="button" aria-label="Ảnh sau">›</button>' : "");
lb.hidden = false;
lb.querySelector(".lb-x").onclick = function () { lb.hidden = true; lb.innerHTML = ""; };
if (L.length > 1) { lb.querySelector(".lb-p").onclick = function () { open((i - 1 + L.length) % L.length); }; lb.querySelector(".lb-n").onclick = function () { open((i + 1) % L.length); }; }
lb.onclick = function (e) { if (e.target === lb) { lb.hidden = true; lb.innerHTML = ""; } };
}
});
}
window.HKG = { hasGames: hasGames, keyOf: keyOf, renderList: renderList, play: play, stop: stop, galStrip: galStrip, galView: galView, count: function (x) { return hasGames(x) ? GS.gamesFor(keyOf(x)).length : 0; } };
})();
