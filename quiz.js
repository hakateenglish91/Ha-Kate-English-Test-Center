/* Ha Kate Test Center – giao diện bài kiểm tra kiểu game (quiz.js)
 * Đọc câu hỏi từ Sheet (như cũ: câu hỏi + (A)…(D)), thêm các thẻ trong câu hỏi để đổi cách làm bài:
 *   {{audio:MÃ}}       bài nghe audio/MÃ.mp3 – các câu liền nhau cùng MÃ dùng chung 1 trình phát
 *   {{script:…}}       lời bài nghe, chỉ hiện sau khi nộp bài (¶ = xuống dòng)
 *   {{passage:…}}      đoạn đọc hiện 1 lần; câu sau ghi {{passage}} để dùng chung đoạn đó
 *   {{img:tên}}        hình img/pic/tên.png ; phương án [img:tên] = chọn tranh
 *   {{ui:match}}       nối / kéo thẻ phương án vào từng câu (các câu liền nhau cùng thẻ = 1 bài nối)
 *   {{ui:place}}       kéo số câu vào đúng ô phương án (VD: số 1–7 cạnh thứ trong tuần)
 *   {{ui:fill}}        điền chữ/từ vào chỗ trống ___ bằng cách chạm thẻ
 *   {{ui:order}}       sắp xếp chữ cái / từ ({{tiles:a/e/s}} hoặc câu hỏi dạng "w1 / w2 / w3")
 *   {{say:…}}          nút nghe máy đọc
 * Máy chủ vẫn chấm theo chỉ số phương án (0–3); câu xếp/nối sai gửi -1 (tính sai).
 */
(function(){
"use strict";
var Q=[], ANS=null, EX={}, CB=null, DONE=false, FORM=null, SEL=null, KEY=null;
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function fmt(s){return esc(s).replace(/\s*¶\s*/g,"<br>")}
function tags(stem){var o={},t=String(stem||"").replace(/\{\{(\w+)(?::([^}]*))?\}\}/g,function(_,k,v){o[k]=v==null?"":v.trim();return " "});o.text=t.replace(/\s+/g," ").trim();return o}
function imgSrc(n){n=String(n).trim();return "img/"+(n.indexOf(".")>0?n:"pic/"+n+".png")}
function optImg(o){var m=/^\s*\[img:([\w.\/-]+)\]\s*$/.exec(o);return m?m[1]:null}
function norm(s){return String(s).toLowerCase().replace(/[’‘`]/g,"'").replace(/\s+([?.!,])/g,"$1").replace(/\s+/g," ").trim()}
function same(a,b){return norm(a)===norm(b)}
function idxOf(opts,v){for(var j=0;j<opts.length;j++)if(same(opts[j],v))return j;return -1}
var EMO=null;try{EMO=new RegExp("^((?:\\p{Extended_Pictographic}|\\u200d|\\ufe0f|[\\u2795-\\u2797]|\\s)+)","u")}catch(e){}
function stemHtml(q,big){var t=q.tg.text,h="";
  if(q.tg.img)h+='<img class="qimg" src="'+esc(imgSrc(q.tg.img))+'" alt="" loading="lazy">';
  var m=EMO&&EMO.exec(t);if(m&&m[1].trim()){h+='<span class="qemo">'+esc(m[1].trim())+'</span>';t=t.slice(m[1].length).trim()}
  if(t)h+='<span class="qtx">'+esc(t)+'</span>';
  if(q.tg.say!=null)h+=' <button type="button" class="say" data-say="'+esc(q.tg.say)+'">🔊 Nghe</button>';
  return h}
function optHtml(o){var im=optImg(o);return im?'<img src="'+esc(imgSrc(im))+'" alt="" loading="lazy">':esc(o)}
var DAYS=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
function sortLabels(a){
  if(a.every(function(x){return /^\d+$/.test(String(x).trim())}))return a.slice().sort(function(x,y){return x-y});
  if(a.every(function(x){return DAYS.indexOf(norm(x))>=0}))return a.slice().sort(function(x,y){return DAYS.indexOf(norm(x))-DAYS.indexOf(norm(y))});
  return a}
function union(ix){var u=[];ix.forEach(function(i){Q[i].opts.forEach(function(o){if(!u.some(function(x){return same(x,o)}))u.push(o)})});return sortLabels(u)}
function partIcon(t){t=String(t).toLowerCase();return /listen|nghe/.test(t)?"🎧":/vocab|từ vựng/.test(t)?"🔤":/pronun|phát âm/.test(t)?"🗣️":/grammar|ngữ pháp/.test(t)?"🧩":/read|đọc/.test(t)?"📖":/writ|viết/.test(t)?"✏️":/speak|nói/.test(t)?"💬":/match|nối/.test(t)?"🔗":"⭐"}
function passageHtml(s){var rows=String(s).split(/\s*¶\s*/),h="",tb=[];
  var flush=function(){if(!tb.length)return;h+='<table class="ptable">'+tb.map(function(r,k){var c=r.split(/\s+\|\s+/);return '<tr>'+c.map(function(x){return k?'<td>'+esc(x)+'</td>':'<th>'+esc(x)+'</th>'}).join("")+'</tr>'}).join("")+'</table>';tb=[]};
  rows.forEach(function(r){if(r.indexOf(" | ")>0)tb.push(r);else{flush();if(r)h+='<p>'+esc(r)+'</p>'}});flush();return h}
function uiOf(q){var u=q.tg.ui;if(u==null)return "";return u.split(":")[0]}

/* ---------- vẽ bài ---------- */
function build(form,T,answers,ex,onChange){
  FORM=form;ANS=answers;EX=ex||{};CB=onChange;DONE=false;SEL=null;KEY=null;
  Q=T.q.map(function(q,i){return {i:i,tg:tags(q[0]),opts:q[1]}});
  var h="",col=0;
  T.parts.forEach(function(p,pn){col=col%6+1;
    var a=p.from-1,b=Math.min(p.to,Q.length)-1;
    h+='<section class="part qz k'+col+'"><div class="qz-head"><span class="qz-ic">'+partIcon(p.t)+'</span><div><span class="eyebrow">Part '+(pn+1)+' · Câu '+p.from+'–'+(b+1)+'</span><h2>'+esc(p.t)+'</h2></div></div>';
    var i=a;
    while(i<=b){var q=Q[i],c=[i],j=i+1;
      if(q.tg.audio){while(j<=b&&Q[j].tg.audio===q.tg.audio){c.push(j);j++}}
      else if(q.tg.passage){while(j<=b&&Q[j].tg.passage!=null&&(Q[j].tg.passage===""||Q[j].tg.passage==="^")){c.push(j);j++}}
      else if(uiOf(q)==="match"||uiOf(q)==="place"){while(j<=b&&Q[j].tg.ui===q.tg.ui&&!Q[j].tg.audio&&!Q[j].tg.passage){c.push(j);j++}}
      else{var plain=function(x){return !x.tg.audio&&!x.tg.passage&&uiOf(x)!=="match"&&uiOf(x)!=="place"};while(j<=b&&plain(Q[j])){c.push(j);j++}}
      h+=cluster(c);i=j}
    h+='</section>'});
  form.innerHTML=h;form.classList.remove("done");form.classList.add("qzform");
  restore();bind();
}
function cluster(c){
  var q=Q[c[0]],h='<div class="qc">';
  if(q.tg.audio){var sc="";c.forEach(function(i){if(Q[i].tg.script)sc+=(sc?"¶":"")+Q[i].tg.script});
    h+='<div class="aud-box"><div class="aud-h"><span class="aud-ic">🎧</span><b>Bài nghe '+(c.length>1?'câu '+(c[0]+1)+'–'+(c[c.length-1]+1):'câu '+(c[0]+1))+'</b><span>Bấm ▶ để nghe, nghe lại được</span></div><audio class="aud" controls preload="none" src="audio/'+esc(q.tg.audio)+'.mp3"></audio>'+(sc?'<details class="script" hidden><summary>📝 Lời bài nghe</summary><div>'+fmt(sc)+'</div></details>':'')+'</div>'}
  if(q.tg.passage)h+='<div class="passage"><div class="ps-h">📖 Đọc đoạn sau rồi làm câu '+(c[0]+1)+(c.length>1?'–'+(c[c.length-1]+1):'')+'</div>'+passageHtml(q.tg.passage)+'</div>';
  var k=0;
  while(k<c.length){var u=uiOf(Q[c[k]]),g=[c[k]],m=k+1;
    if(u==="match"||u==="place"){while(m<c.length&&Q[c[m]].tg.ui===Q[c[k]].tg.ui){g.push(c[m]);m++}h+=u==="match"?matchW(g):placeW(g)}
    else h+=single(Q[c[k]]);
    k=m}
  return h+'</div>'}
function single(q){var u=uiOf(q),i=q.i,wide=u==="order"||q.opts.some(function(o){return String(o).length>24})||q.tg.text.length>70,h='<div class="qcard'+(wide?' wide':'')+'" id="q'+(i+1)+'" data-q="'+i+'"><div class="qhead"><span class="qn">'+(i+1)+'</span><div class="qstem">';
  if(u==="fill"){var t=q.tg.text,parts=t.split(/_{2,}|…/);
    if(q.tg.img)h+='<img class="qimg" src="'+esc(imgSrc(q.tg.img))+'" alt="" loading="lazy">';
    h+='<span class="qtx fillw">'+(parts.length>1?esc(parts[0])+'<span class="blank" id="b'+i+'">?</span>'+esc(parts.slice(1).join("___")):esc(t)+' <span class="blank" id="b'+i+'">?</span>')+'</span>';
    if(q.tg.say!=null)h+=' <button type="button" class="say" data-say="'+esc(q.tg.say)+'">🔊 Nghe</button>';
    h+='</div></div><div class="chs tiles">'+q.opts.map(function(o,j){return '<button type="button" class="ch qtile" data-q="'+i+'" data-o="'+j+'" id="o'+i+'_'+j+'">'+optHtml(o)+'</button>'}).join("")+'</div></div>';return h}
  if(u==="order"){var src=q.tg.tiles!=null?q.tg.tiles:q.tg.text,pcs=src.split(/\s*\/\s*/).filter(function(x){return x!==""}),stem=q.tg.tiles!=null?q.tg.text:"";
    var t2={tg:{text:stem,img:q.tg.img,say:q.tg.say}};h+=stemHtml(t2)+(stem?'':'<span class="qtx hint">Sắp xếp lại cho đúng</span>');
    h+='</div></div><div class="ord" data-q="'+i+'"><div class="ord-ans" data-q="'+i+'"></div><div class="ord-bank">'+pcs.map(function(p,j){return '<button type="button" class="otile" data-q="'+i+'" data-p="'+j+'">'+esc(p)+'</button>'}).join("")+'</div><button type="button" class="ord-reset" data-q="'+i+'">↺ Xếp lại</button></div><div class="fix" id="f'+i+'" hidden></div></div>';
    q.pcs=pcs;q.join=pcs.every(function(x){return x.length===1})?"":" ";return h}
  h+=stemHtml(q)+'</div></div>';
  var allImg=q.opts.every(optImg),tick=q.opts.every(function(o){return /^(✓|✗|✔|✘|true|false|yes|no)$/i.test(String(o).trim())}),short=q.opts.every(function(o){return String(o).trim().length<=2});
  var cls=allImg?"chs pics":tick?"chs ticks":short?"chs shorts":q.opts.some(function(o){return String(o).length>24})?"chs long":"chs";
  h+='<div class="'+cls+'">'+q.opts.map(function(o,j){var lab=allImg?String.fromCharCode(65+j):"";
    var inner=tick?(/^(✓|✔|true|yes)$/i.test(o.trim())?'<span class="tk ok">✓</span><span>'+(/true|yes/i.test(o)?esc(o):'Đúng')+'</span>':'<span class="tk no">✗</span><span>'+(/false|no/i.test(o)?esc(o):'Sai')+'</span>'):optHtml(o);
    return '<button type="button" class="ch" data-q="'+i+'" data-o="'+j+'" id="o'+i+'_'+j+'">'+(lab?'<span class="lab">'+lab+'</span>':(!tick&&!short?'<span class="lab">'+String.fromCharCode(65+j)+'</span>':''))+inner+'</button>'}).join("")+'</div></div>';
  return h}
function matchW(g){var u=union(g),h='<div class="mw" data-kind="match"><div class="qztip">👆 Chạm một thẻ rồi chạm vào ô trống (hoặc kéo thả thẻ vào ô)</div><div class="qzrows">';
  g.forEach(function(i){var q=Q[i];h+='<div class="qzrow" id="q'+(i+1)+'"><span class="qn">'+(i+1)+'</span><div class="qzlbl">'+stemHtml(q)+'</div><div class="qslot" data-q="'+i+'"></div><div class="fix" id="f'+i+'" hidden></div></div>'});
  h+='</div><div class="qbank">'+u.map(function(v){return '<button type="button" class="qtile" data-v="'+esc(v)+'">'+optHtml(v)+'</button>'}).join("")+'</div></div>';return h}
function placeW(g){var u=union(g),h='<div class="mw place" data-kind="place"><div class="qztip">👆 Chạm số rồi chạm vào ô cạnh đáp án (hoặc kéo thả số vào ô)</div><div class="qzrows">';
  u.forEach(function(v){h+='<div class="qzrow"><div class="qzlbl"><span class="qtx">'+optHtml(v)+'</span></div><div class="qslot" data-v="'+esc(v)+'"></div></div>'});
  h+='</div><div class="qbank">'+g.map(function(i){var t=Q[i].tg.text.replace(/^number\s*/i,"");return '<button type="button" class="qtile num" id="q'+(i+1)+'" data-q="'+i+'">'+esc(t||String(i+1))+'</button>'}).join("")+'</div><div class="fix" id="fp'+g[0]+'" hidden></div></div>';
  Q[g[0]].pg=g;return h}

/* ---------- trả lời ---------- */
function set(i,v,raw){ANS[i]=v;if(raw===undefined)delete EX[i];else EX[i]=raw;if(CB)CB(i,v)}
function pick(i,j){if(DONE)return;var q=Q[i];[].forEach.call(FORM.querySelectorAll('.ch[data-q="'+i+'"]'),function(b){b.classList.toggle("on",+b.getAttribute("data-o")===j)});
  var bl=document.getElementById("b"+i);if(bl){bl.innerHTML=j==null?"?":optHtml(q.opts[j]);bl.classList.toggle("on",j!=null)}
  set(i,j,undefined);pop()}
function slotsOf(w){return [].slice.call(w.querySelectorAll(".qslot"))}
function recalc(w){var kind=w.getAttribute("data-kind");
  if(kind==="match")slotsOf(w).forEach(function(s){var i=+s.getAttribute("data-q"),t=s.querySelector(".qtile");if(!t){if(ANS[i]!==null||EX[i]!==undefined)set(i,null,undefined);return}var v=t.getAttribute("data-v");set(i,idxOf(Q[i].opts,v),v)});
  else [].forEach.call(w.querySelectorAll(".qtile"),function(t){var i=+t.getAttribute("data-q"),s=t.closest(".qslot");if(!s){if(ANS[i]!==null||EX[i]!==undefined)set(i,null,undefined);return}var v=s.getAttribute("data-v");set(i,idxOf(Q[i].opts,v),v)})}
function place(t,s){var w=t.closest(".mw");if(!w||(s&&s.closest(".mw")!==w))return;var qbank=w.querySelector(".qbank");
  if(s){var old=s.querySelector(".qtile");if(old&&old!==t)qbank.appendChild(old);s.appendChild(t)}else qbank.appendChild(t);
  unsel();recalc(w);pop()}
function unsel(){if(SEL){SEL.classList.remove("sel");SEL=null}[].forEach.call(FORM.querySelectorAll(".qslot.hot"),function(s){s.classList.remove("hot")})}
function select(t){if(SEL===t){unsel();return}unsel();SEL=t;t.classList.add("sel");[].forEach.call(t.closest(".mw").querySelectorAll(".qslot"),function(s){s.classList.add("hot")});pop(1)}
function ordState(i){var q=Q[i],box=FORM.querySelector('.ord-ans[data-q="'+i+'"]'),seq=[].map.call(box.querySelectorAll(".otile"),function(b){return +b.getAttribute("data-p")});
  if(seq.length<q.pcs.length){set(i,null,seq.length?seq:undefined);return}
  var s=seq.map(function(p){return q.pcs[p]}).join(q.join);set(i,idxOf(q.opts,s),seq)}
function ordTap(b){if(DONE)return;var i=+b.getAttribute("data-q"),o=b.closest(".ord"),ans=o.querySelector(".ord-ans"),qbank=o.querySelector(".ord-bank");
  if(b.parentNode===ans)qbank.appendChild(b);else ans.appendChild(b);ordState(i);pop()}
function ordReset(i){if(DONE)return;var o=FORM.querySelector('.ord[data-q="'+i+'"]'),qbank=o.querySelector(".ord-bank");
  [].slice.call(o.querySelectorAll(".otile")).sort(function(x,y){return x.getAttribute("data-p")-y.getAttribute("data-p")}).forEach(function(b){qbank.appendChild(b)});ordState(i)}

function restore(){
  Q.forEach(function(q,i){var u=uiOf(q),a=ANS[i],raw=EX[i];
    if(u==="order"){if(raw&&raw.length){var o=FORM.querySelector('.ord[data-q="'+i+'"]');raw.forEach(function(p){var b=o.querySelector('.otile[data-p="'+p+'"]');if(b)o.querySelector(".ord-ans").appendChild(b)})}return}
    if(u==="match"){var v=raw!==undefined?raw:(a!=null&&a>=0?q.opts[a]:null);if(v==null)return;var s=FORM.querySelector('.qslot[data-q="'+i+'"]'),w=s.closest(".mw");
      var t=[].filter.call(w.querySelectorAll(".qbank .qtile"),function(x){return same(x.getAttribute("data-v"),v)})[0];if(t)s.appendChild(t);return}
    if(u==="place"){var v2=raw!==undefined?raw:(a!=null&&a>=0?q.opts[a]:null);if(v2==null)return;var t2=FORM.querySelector('.qtile[data-q="'+i+'"]'),w2=t2.closest(".mw");
      var s2=[].filter.call(w2.querySelectorAll(".qslot"),function(x){return same(x.getAttribute("data-v"),v2)&&!x.querySelector(".qtile")})[0];if(s2)s2.appendChild(t2);return}
    if(a!=null&&a>=0){var b2=document.getElementById("o"+i+"_"+a);if(b2)b2.classList.add("on");var bl=document.getElementById("b"+i);if(bl){bl.innerHTML=optHtml(q.opts[a]);bl.classList.add("on")}}
  })}

/* ---------- chạm / kéo thả ---------- */
var DR=null;
function bind(){if(FORM.__qzBound)return;FORM.__qzBound=1;
  FORM.addEventListener("click",function(e){if(DONE)return;var el=e.target;
    var ch=el.closest(".ch");if(ch){e.preventDefault();var i=+ch.getAttribute("data-q"),j=+ch.getAttribute("data-o");pick(i,ANS[i]===j&&uiOf(Q[i])==="fill"?null:j);return}
    var ot=el.closest(".otile");if(ot){ordTap(ot);return}
    var rs=el.closest(".ord-reset");if(rs){ordReset(+rs.getAttribute("data-q"));return}
    if(DR&&DR.moved)return;
    var t=el.closest(".qtile");if(t&&t.closest(".mw")){if(t.closest(".qslot")){place(t,null);return}select(t);return}
    var s=el.closest(".qslot");if(s){if(SEL&&SEL.closest(".mw")===s.closest(".mw"))place(SEL,s);else{var in1=s.querySelector(".qtile");if(in1)place(in1,null)}return}
    if(!el.closest(".mw"))unsel()});
  FORM.addEventListener("pointerdown",function(e){if(DONE)return;var t=e.target.closest(".qtile");if(!t||!t.closest(".mw"))return;DR={t:t,x:e.clientX,y:e.clientY,moved:false,g:null,id:e.pointerId}});
  document.addEventListener("pointermove",function(e){if(!DR||e.pointerId!==DR.id)return;var dx=e.clientX-DR.x,dy=e.clientY-DR.y;
    if(!DR.moved&&dx*dx+dy*dy>64){DR.moved=true;var r=DR.t.getBoundingClientRect();var g=DR.t.cloneNode(true);g.className+=" ghost";g.style.width=r.width+"px";g.style.left=r.left+"px";g.style.top=r.top+"px";DR.ox=e.clientX-r.left;DR.oy=e.clientY-r.top;document.body.appendChild(g);DR.g=g;DR.t.classList.add("dragging");unsel()}
    if(DR.moved){e.preventDefault();DR.g.style.left=(e.clientX-DR.ox)+"px";DR.g.style.top=(e.clientY-DR.oy)+"px";
      var under=document.elementFromPoint(e.clientX,e.clientY),s=under&&under.closest(".qslot");[].forEach.call(FORM.querySelectorAll(".qslot.over"),function(x){if(x!==s)x.classList.remove("over")});if(s)s.classList.add("over")}},{passive:false});
  var end=function(e){if(!DR||(e.pointerId!==undefined&&e.pointerId!==DR.id))return;var d=DR;
    if(d.moved){if(d.g)d.g.remove();d.t.classList.remove("dragging");[].forEach.call(FORM.querySelectorAll(".qslot.over"),function(x){x.classList.remove("over")});
      var under=document.elementFromPoint(e.clientX,e.clientY),s=under&&under.closest(".qslot"),bk=under&&under.closest(".qbank");
      if(s)place(d.t,s);else if(bk)place(d.t,null);setTimeout(function(){DR=null},0)}else DR=null};
  document.addEventListener("pointerup",end);document.addEventListener("pointercancel",function(){if(DR&&DR.g){DR.g.remove();DR.t.classList.remove("dragging")}DR=null});
}
function pop(hi){try{var A=window.__AC;if(!A)return;var o=A.createOscillator(),g=A.createGain();o.type="sine";o.frequency.value=hi?660:520;g.gain.setValueAtTime(.06,A.currentTime);g.gain.exponentialRampToValueAtTime(.0001,A.currentTime+.12);o.connect(g);g.connect(A.destination);o.start();o.stop(A.currentTime+.13)}catch(e){}}

/* ---------- chấm xong ---------- */
function mark(key){DONE=true;KEY=key;unsel();FORM.classList.add("done");
  [].forEach.call(FORM.querySelectorAll("details.script"),function(d){d.hidden=false;d.open=true});
  Q.forEach(function(q,i){var k=key[i],a=ANS[i],ok=a===k,u=uiOf(q),card=document.getElementById("q"+(i+1));
    if(u==="match"){var row=card;row.classList.add(ok?"right":"wrong");if(!ok){var f=document.getElementById("f"+i);f.innerHTML="✔ "+optHtml(q.opts[k]);f.hidden=false}return}
    if(u==="place"){card.classList.add(ok?"right":"wrong");return}
    if(card)card.classList.add(ok?"right":"wrong");
    if(u==="order"){var f2=document.getElementById("f"+i);f2.innerHTML=ok?"✔ Đúng rồi!":"✔ Đáp án: <b>"+esc(q.opts[k])+"</b>";f2.hidden=false;return}
    var kb=document.getElementById("o"+i+"_"+k);if(kb)kb.classList.add("is-key");
    if(!ok&&a!=null&&a>=0){var mb=document.getElementById("o"+i+"_"+a);if(mb)mb.classList.add("is-miss")}
    var bl=document.getElementById("b"+i);if(bl){bl.innerHTML=optHtml(q.opts[k]);bl.classList.add(ok?"good":"bad")}
  });
  Q.forEach(function(q){if(q.pg){var f=document.getElementById("fp"+q.pg[0]);f.innerHTML="✔ Đáp án: "+q.pg.map(function(i){return '<b>'+esc(Q[i].tg.text.replace(/^number\s*/i,""))+'</b> → '+esc(Q[i].opts[key[i]])}).join(" · ");f.hidden=false}});
}
window.HKQ={build:build,mark:mark,ex:function(){return EX},tags:tags};
})();
