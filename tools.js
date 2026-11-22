/* Ha Kate Test Center – Class Tools (mục riêng của giáo viên, mở bằng #tools) */
(function () {
"use strict";
var TOOLS = [
  { id: "goi-ten", icon: "📣", name: "Gọi tên lên bảng", dir: "TAI-LEN-GITHUB/tools/goi-ten-len-bang/",
    desc: "Bộ 4 trò chơi chọn ngẫu nhiên, công bằng 1–5 học sinh lên bảng, có hiệu ứng, âm thanh và đồng hồ trả lời. Nhập danh sách lớp một lần (dán từ Excel/Word), dùng chung cho cả 4 trò.",
    open: "0-Trang-chu.html", openTxt: "Mở trang chọn trò chơi",
    games: [["🛸", "Phi thuyền bắt người", "1-Phi-thuyen-bat-nguoi.html"], ["🧸", "Máy gắp thú", "2-May-gap-thu.html"], ["🎣", "Câu cá vàng", "3-Cau-ca-vang.html"], ["🎱", "Lồng cầu may mắn", "4-Long-cau-may-man.html"]],
    keys: "Space: gọi tên · D: danh sách · T: đồng hồ · Enter: xong",
    files: [["📘", "Hướng dẫn sử dụng (PDF)", "Huong-dan-su-dung.pdf"], ["📊", "Danh sách lớp mẫu (Excel)", "Danh-sach-lop-mau.xlsx"]] },
  { id: "manh-ghep", icon: "🧩", name: "Mảnh ghép bí mật", dir: "TAI-LEN-GITHUB/tools/manh-ghep-bi-mat/",
    desc: "Trò chơi lật ô – đoán ảnh – tìm từ khoá cho cả lớp. Soạn bộ câu hỏi (dán từ Word/Excel), chọn ảnh bí mật và từ khoá; các đội chọn ô, trả lời đúng thì lộ thêm một phần ảnh.",
    open: "Manh-ghep-bi-mat.html", openTxt: "Mở trò chơi",
    tip: "Màn soạn có đáp án – nên soạn trước giờ học, không bật máy chiếu khi đang soạn.",
    files: [["📘", "Hướng dẫn sử dụng (PDF)", "Huong-dan-su-dung.pdf"], ["📝", "Câu hỏi mẫu Hệ Mặt Trời (Word)", "Tai-lieu-mau/Mau-cau-hoi-He-Mat-Troi.docx"], ["📊", "Câu hỏi mẫu Hệ Mặt Trời (Excel)", "Tai-lieu-mau/Mau-cau-hoi-He-Mat-Troi.xlsx"], ["🌍", "Ảnh mẫu Trái Đất", "Tai-lieu-mau/Anh-mau-Trai-Dat.jpg"]] }
];
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
var CSS = ".ct-grid{display:grid;gap:18px}.ct-card{background:var(--sheet);border:1px solid var(--line);border-radius:20px;padding:20px;display:grid;gap:14px}"
  + ".ct-head{display:flex;gap:14px;align-items:center}.ct-ico{font-size:2.4rem;line-height:1;width:64px;height:64px;border-radius:18px;display:grid;place-items:center;background:var(--c5-bg,#fff1c9);flex:none}"
  + ".ct-head h2{margin:0;font-size:1.35rem}.ct-card p{margin:0}.ct-games{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:10px}"
  + ".ct-game{display:flex;gap:10px;align-items:center;padding:12px 14px;border-radius:14px;border:1.5px solid var(--line);background:var(--bg);text-decoration:none;color:var(--ink);font-weight:800}"
  + ".ct-game:hover{border-color:var(--accent)}.ct-game span{font-size:1.6rem}.ct-files{display:flex;flex-wrap:wrap;gap:8px}"
  + ".ct-files a{font-weight:700;font-size:.9rem;text-decoration:none;border:1px solid var(--line);border-radius:99px;padding:6px 12px;color:var(--ink);background:var(--bg)}.ct-files a:hover{border-color:var(--accent)}"
  + ".ct-note{font-size:.88rem;color:var(--muted)}.ct-warn{background:var(--c5-bg,#fff1c9);color:var(--c5-ink,#7a5300);border-radius:12px;padding:10px 14px;font-size:.9rem}";
function render(box) {
  if (!document.getElementById("ct-css")) { var st = document.createElement("style"); st.id = "ct-css"; st.textContent = CSS; document.head.appendChild(st); }
  box.innerHTML = '<div class="crumbs"><a data-go="home" target="_self" href="#">Bài kiểm tra</a> / Class Tools</div>'
    + '<div class="hello"><div><h1>🧰 Class Tools</h1><p>Công cụ dạy học trên lớp dành cho cô Hà Kate: mở trên máy chiếu hoặc màn hình lớp. Mỗi công cụ mở trong thẻ mới, chạy ngay trên trình duyệt.</p></div></div>'
    + '<div class="ct-grid">' + TOOLS.map(function (t) {
      return '<section class="ct-card" id="ct-' + t.id + '"><div class="ct-head"><div class="ct-ico">' + t.icon + '</div><div><h2>' + esc(t.name) + '</h2></div></div>'
        + '<p>' + esc(t.desc) + '</p>'
        + '<div><a class="btn sun" href="' + t.dir + t.open + '" target="_blank" rel="noopener">▶ ' + esc(t.openTxt) + '</a></div>'
        + (t.games ? '<div class="ct-games">' + t.games.map(function (g) { return '<a class="ct-game" href="' + t.dir + g[2] + '" target="_blank" rel="noopener"><span>' + g[0] + '</span>' + esc(g[1]) + '</a>'; }).join("") + '</div>' : "")
        + (t.keys ? '<p class="ct-note">Phím tắt: ' + esc(t.keys) + '</p>' : "")
        + (t.tip ? '<div class="ct-warn">⚠️ ' + esc(t.tip) + '</div>' : "")
        + '<div class="ct-files">' + t.files.map(function (f) { return '<a href="' + t.dir + f[2] + '" target="_blank" rel="noopener">' + f[0] + " " + esc(f[1]) + '</a>'; }).join("") + '</div>'
        + '</section>';
    }).join("") + '</div>'
    + '<p class="ct-note" style="margin-top:18px">Danh sách lớp và bộ câu hỏi cô soạn được lưu trong trình duyệt của máy đang dùng (không gửi lên mạng). Đổi máy hoặc xoá dữ liệu trình duyệt thì cần nhập lại.</p>';
}
window.HKTOOLS = { render: render, tools: TOOLS };
})();
