/* Ha Kate Test Center – nội dung & bộ sinh câu hỏi game (dùng chung cho trang và cho kiểm tra) */
(function (root) {
"use strict";
/* ---------- nội dung từng unit ----------
w: [từ, nghĩa, hình]   r: từ ôn tập (làm phương án nhiễu) [từ, hình]
s: câu có chỗ trống [đáp án] + hình gợi ý
g: câu ngữ pháp [đúng|sai1,sai2,sai3] (+ hình nếu cần)
q: hỏi – đáp: q câu hỏi, a đáp án đúng, x các đáp án sai (chắc chắn sai)
o: câu xếp thứ tự (chỉ một cách xếp đúng)
t: câu gõ từ còn thiếu [đáp án] + hình
*/
var SPEC = {
"g1|Global Success 1|5": {
title: "At the fish and chip shop", sound: "I i", young: true,
w: [["chicken","thịt gà","🍗"],["chips","khoai tây chiên","🍟"],["fish","cá","🐟"],["milk","sữa","🥛"],["fish and chips","cá và khoai tây chiên","🐟🍟"]],
r: [["ball","⚽"],["bike","🚲"],["book","📖"],["cake","🍰"],["car","🚗"],["cat","🐱"],["cup","☕"],["apple","🍎"],["bag","👜"],["hat","👒"],["dog","🐶"],["duck","🦆"],["door","🚪"]],
s: [["I like [chicken].","🍗"],["I like [chips].","🍟"],["I like [fish].","🐟"],["I like [milk].","🥛"],["I like [fish and chips].","🐟🍟"]],
g: [["I [like|likes,liking] milk.","🥛"],["I [like|likes,liking] chicken.","🍗"],["[I|Me,My] like chips.","🍟"],["I like fish [and|so,to] chips.","🐟🍟"]],
q: [],
o: ["I like fish.","I like milk.","I like chips.","I like chicken."],
t: [["I like [milk].","🥛"],["I like [fish].","🐟"],["I like [chips].","🍟"],["I like [chicken].","🍗"]]
},
"g2|Global Success 2|5": {
title: "In the classroom", sound: "Q q", young: true,
w: [["question","câu hỏi","❓"],["square","hình vuông","🟦"],["quiz","bài kiểm tra nhanh","📝"]],
r: [["pizza","🍕"],["popcorn","🍿"],["pasta","🍝"],["kite","🪁"],["bike","🚲"],["kitten","🐱"],["sea","🌊"],["sand","🏖️"],["sail","⛵"],["rainbow","🌈"],["river","🏞️"],["road","🛣️"]],
s: [["She's drawing a [square].","👧✏️🟦"],["He's doing a [quiz].","👦📝"],["She's asking a [question].","👧❓"],["He's drawing a [square].","👦✏️🟦"],["She's doing a [quiz].","👧📝"],["He's asking a [question].","👦❓"]],
g: [["She's [drawing|draw,draws] a square.","👧✏️🟦"],["He's [doing|do,does] a quiz.","👦📝"],["She's [asking|ask,asks] a question.","👧❓"],["What's [he|you,they] doing? – He's doing a quiz.","👦📝"],["[He's|She's] drawing a square.","👦✏️🟦"],["[She's|He's] asking a question.","👧❓"]],
q: [{q:"What's she doing?",p:"👧✏️🟦",a:"She's drawing a square.",x:["She's doing a quiz.","He's drawing a square.","She's asking a question."]},
{q:"What's he doing?",p:"👦📝",a:"He's doing a quiz.",x:["He's drawing a square.","She's doing a quiz.","He's asking a question."]},
{q:"What's she doing?",p:"👧❓",a:"She's asking a question.",x:["She's drawing a square.","He's asking a question.","She's doing a quiz."]}],
o: ["She's drawing a square.","He's doing a quiz.","She's asking a question.","What's he doing?","What's she doing?"],
t: [["He's doing a [quiz].","👦📝"],["She's drawing a [square].","👧✏️🟦"],["He's asking a [question].","👦❓"]]
},
"g3|Global Success 3|5": {
title: "My hobbies", sound: "",
w: [["singing","hát","🎤"],["dancing","nhảy múa","💃"],["drawing","vẽ","🖍️"],["swimming","bơi","🏊"],["running","chạy","🏃"],["painting","tô màu","🎨"],["walking","đi bộ","🚶"],["cooking","nấu ăn","🍳"]],
r: [["hello","👋"],["friend","🧑‍🤝‍🧑"],["eyes","👀"],["ears","👂"],["hand","✋"],["mouth","👄"],["nose","👃"],["teacher","🧑‍🏫"]],
s: [["What's your hobby? – It's [singing].","🎤"],["What's your hobby? – It's [dancing].","💃"],["What's your hobby? – It's [drawing].","🖍️"],["What's your hobby? – It's [swimming].","🏊"],["What's your hobby? – I like [running].","🏃"],["What's your hobby? – I like [painting].","🎨"],["What's your hobby? – I like [walking].","🚶"],["What's your hobby? – I like [cooking].","🍳"]],
g: [["What's [your|you,yours] hobby?",""],["It's [singing|sing,sings].","🎤"],["I like [swimming|swim,swims].","🏊"],["What's your hobby? – [It's|It,Its] drawing.","🖍️"],["I [like|likes,liking] running.","🏃"],["[What's|Who's,Where's] your hobby? – It's cooking.","🍳"],["What's your [hobby|hobbies,hobbys]? – It's dancing.","💃"]],
q: [{q:"What's your hobby?",p:"",a:"It's dancing.",x:["I'm fine, thank you.","My name's Mary.","Yes, it is."]},
{q:"What's your hobby?",p:"",a:"I like swimming.",x:["I'm eight years old.","Nice to meet you.","No, I don't."]},
{q:"What's your hobby?",p:"",a:"It's painting.",x:["It's a pen.","I'm Nam.","Goodbye."]}],
o: ["What's your hobby?","I like dancing.","I like cooking.","I like painting.","I like walking."],
t: [["It's [singing].","🎤"],["I like [swimming].","🏊"],["It's [dancing].","💃"],["I like [cooking].","🍳"],["It's [running].","🏃"],["I like [drawing].","🖍️"]]
},
"g4|Global Success 4|5": {
title: "Things we can do", sound: "",
w: [["cook","nấu ăn","🍳"],["play the piano","chơi đàn piano","🎹"],["play the guitar","chơi đàn ghi-ta","🎸"],["ride a bike","đạp xe","🚲"],["ride a horse","cưỡi ngựa","🏇"],["roller skate","trượt patin","🛼"],["swim","bơi","🏊"]],
r: [["get up","⏰"],["have breakfast","🥣"],["listen to music","🎧"],["birthday","🎂"],["party","🎉"],["chips","🍟"],["grapes","🍇"],["lemonade","🍋"]],
s: [["I can [swim].","🏊"],["Can you [ride a bike]? – Yes, I can.","🚲"],["She can [play the piano].","👧🎹"],["He can't ride a horse, but he can [cook].","👦🍳"],["I can [play the guitar].","🎸"],["Can you [roller skate]? – Yes, I can.","🛼"],["He can [ride a horse].","👦🏇"]],
g: [["Can you swim? – Yes, I [can|can't,do].","🏊"],["Can you cook? – No, I [can't|can,don't].",""],["Can he ride a bike? – Yes, [he|she,I] can.","👦🚲"],["She [can|cans,is] play the guitar.","👧🎸"],["I can [ride|rides,riding] a horse.","🏇"],["Can she [play|plays,playing] the piano?","👧🎹"],["No, he can't, [but|or,so] he can swim.",""]],
q: [{q:"Can you roller skate?",p:"",a:"Yes, I can.",x:["Yes, I am.","No, I don't.","Yes, it is."]},
{q:"What can you do?",p:"🏊",a:"I can swim.",x:["Yes, I can.","It's a bike.","I'm swimming."]},
{q:"Can she play the piano?",p:"👧🎹",a:"Yes, she can.",x:["Yes, he can.","Yes, she does.","No, I can't."]},
{q:"Can he ride a horse?",p:"",a:"No, he can't.",x:["No, she can't.","No, he isn't.","No, I don't."]}],
o: ["I can ride a bike.","Can you play the guitar?","She can play the piano.","He can roller skate.","What can you do?"],
t: [["I can [swim].","🏊"],["I can [cook].","🍳"],["Can you [roller skate]?","🛼"],["She can [ride a bike].","👧🚲"],["He can [play the piano].","👦🎹"]]
},
"g5|Global Success 5|5": {
title: "My future job", sound: "",
grp: {"grow flowers":"act","report the news":"act","teach children":"act","write stories":"act"},
w: [["firefighter","lính cứu hỏa","🧑‍🚒"],["gardener","người làm vườn","🧑‍🌾"],["reporter","phóng viên","🎙️📰"],["writer","nhà văn","✍️📖"],["teacher","giáo viên","🧑‍🏫"],["grow flowers","trồng hoa","🌱🌷"],["report the news","đưa tin","📰"],["teach children","dạy trẻ em","🧒📚"],["write stories","viết truyện","📝"]],
r: [["building","🏢"],["flat","🏬"],["dolphin","🐬"],["sandwich","🥪"],["table tennis","🏓"],["clever","🧠"],["friendly","😊"],["go for a walk","🚶"]],
s: [["I'd like to be a [firefighter].","🧑‍🚒"],["I'd like to be a [gardener].","🧑‍🌾"],["I'd like to be a [reporter].","🎙️📰"],["I'd like to be a [writer].","✍️📖"],["Why would you like to be a gardener? – Because I'd like to [grow flowers].","🌱🌷"],["Why would you like to be a reporter? – Because I'd like to [report the news].","📰"],["Why would you like to be a teacher? – Because I'd like to [teach children].","🧒📚"],["Why would you like to be a writer? – Because I'd like to [write stories].","📝"]],
g: [["What would you like to be [in|on,at] the future?",""],["I'd like [to be|be,being] a writer.","✍️📖"],["[Why|Where,When] would you like to be a reporter? – Because I'd like to report the news.",""],["I'd like to be [a|an,two] gardener.","🧑‍🌾"],["What [would|do,are] you like to be in the future?",""],["Why would you like to be a teacher? – [Because|But,So] I'd like to teach children.",""],["I'd [like|likes,liking] to be a firefighter.","🧑‍🚒"]],
q: [{q:"What would you like to be in the future?",p:"✍️📖",a:"I'd like to be a writer.",x:["Because I'd like to write stories.","Yes, I would.","I'm a pupil."]},
{q:"Why would you like to be a teacher?",p:"",a:"Because I'd like to teach children.",x:["Because I'd like to grow flowers.","I'd like to be a teacher.","Yes, I do."]},
{q:"Why would you like to be a gardener?",p:"",a:"Because I'd like to grow flowers.",x:["Because I'd like to report the news.","I'd like to be a gardener.","No, I wouldn't."]},
{q:"What would you like to be in the future?",p:"🧑‍🚒",a:"I'd like to be a firefighter.",x:["I like firefighters.","Because I'd like to help people.","I'm ten years old."]}],
o: ["I'd like to be a firefighter.","What would you like to be in the future?","Why would you like to be a writer?","Because I'd like to write stories.","I'd like to be a reporter."],
t: [["I'd like to be a [writer].","✍️📖"],["I'd like to be a [gardener].","🧑‍🌾"],["I'd like to [grow flowers].","🌱🌷"],["I'd like to be a [teacher].","🧑‍🏫"],["Because I'd like to [write stories].","📝"]]
},
"kinder|Oxford Phonics World 1|2": {
title: "Dd Ee Ff", sound: "d, e, f", kinder: true, young: true,
w: [["desk","bàn học","svg:desk","d"],["dog","con chó","🐶","d"],["doll","búp bê","🪆","d"],["duck","con vịt","🦆","d"],
["egg","quả trứng","🥚","e"],["elbow","khuỷu tay","svg:elbow","e"],["elephant","con voi","🐘","e"],["envelope","phong bì","✉️","e"],
["fan","cái quạt","🪭","f"],["farm","trang trại","🐄🌾🏡","f","nostart"],["fish","con cá","🐟","f"],["fork","cái dĩa","svg:fork","f"]],
r: [["apple","🍎"],["ant","🐜"],["bear","🐻"],["banana","🍌"],["bird","🐦"],["cat","🐱"],["car","🚗"],["cup","☕"],["bed","🛏️"],["ball","⚽"],["sun","☀️"],["tree","🌳"]],
s: [], g: [], q: [], o: [], t: []
},
"g1|Global Success 1|6": {
title: "In the classroom", sound: "E e", young: true,
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[30, 1], [20, 2]] },
{ n: 2, skin: "path", name: "Phiêu lưu đảo khủng long (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
w: [["bell","cái chuông","🔔"],["pen","bút mực","🖊️"],["pencil","bút chì","✏️"],["red","màu đỏ","🟥"]],
r: [["ball","⚽"],["bike","🚲"],["book","📖"],["cake","🍰"],["car","🚗"],["cat","🐱"],["cup","☕"],["apple","🍎"],["bag","👜"],["hat","👒"],["dog","🐶"],["duck","🦆"],["door","🚪"],["chicken","🍗"],["chips","🍟"],["fish","🐟"],["milk","🥛"]],
s: [["It's a red [pen].","🟥🖊️"],["It's a red [pencil].","🟥✏️"],["It's a red [bell].","🟥🔔"]],
g: [["It's [a|an] red pen.","🟥🖊️"],["[It's|Its,It] a red bell.","🟥🔔"],["It's a [red|reds] pencil.","🟥✏️"]],
q: [],
o: ["It's a red pen.","It's a red bell.","It's a red pencil."],
t: [["It's a red [pen].","🟥🖊️"],["It's a [red] bell.","🟥🔔"],["It's a red [pencil].","🟥✏️"]]
},
"g2|Global Success 2|6": {
title: "On the farm", sound: "X x", young: true,
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[30, 1], [20, 2]] },
{ n: 2, skin: "path", name: "Phiêu lưu đảo khủng long (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
w: [["farm","trang trại","🚜"],["box","cái hộp","📦"],["fox","con cáo","🦊"],["ox","con bò đực","🐂"]],
r: [["pizza","🍕"],["popcorn","🍿"],["kite","🪁"],["bike","🚲"],["kitten","🐱"],["sea","🌊"],["sand","🏖️"],["rainbow","🌈"],["river","🏞️"],["road","🛣️"],["question","❓"],["square","🟦"],["quiz","📝"]],
s: [["I can see a [fox].","🦊"],["I can see a [box].","📦"],["I can see an [ox].","🐂"],["I can see a fox on the [farm].","🚜🦊"]],
g: [["I can see [an|a] ox.","🐂"],["I can see [a|an] fox.","🦊"],["I can [see|sees,seeing] a box.","📦"],["[What|Who,How] can you see? – I can see a fox.","🦊"]],
q: [{q:"What can you see?",p:"🦊",a:"I can see a fox.",x:["I can see a box.","I can see an ox.","Yes, I can."]},
{q:"What can you see?",p:"🐂",a:"I can see an ox.",x:["I can see a fox.","I can see a box.","Yes, I can."]},
{q:"What can you see?",p:"📦",a:"I can see a box.",x:["I can see an ox.","I can see a fox.","Yes, I can."]}],
o: ["I can see a fox.","I can see an ox.","What can you see?","I can see a box."],
t: [["I can see a [fox].","🦊"],["I can see an [ox].","🐂"],["I can see a [box].","📦"]]
},
"g3|Global Success 3|6": {
title: "Our school",
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[30, 1], [20, 2]] },
{ n: 2, skin: "tug", name: "Kéo co tri thức (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
w: [["school","trường học","🏫"],["classroom","lớp học","🧑‍🏫"],["library","thư viện","📚"],["playground","sân chơi","🛝"],["computer room","phòng máy tính","💻"],["art room","phòng mỹ thuật","🎨"],["music room","phòng âm nhạc","🎵"],["gym","phòng thể dục","🤸"]],
r: [["eye","👁️"],["ear","👂"],["nose","👃"],["mouth","👄"],["hand","✋"],["face","🙂"],["dancing","💃"],["singing","🎤"],["painting","🖌️"],["swimming","🏊"],["cooking","🍳"]],
s: [["Let's go to the [library].","📚"],["Is this our [gym]? – Yes, it is.","🤸"],["Let's go to the [art room].","🎨"],["This is our [classroom].","🧑‍🏫"],["Let's go to the [music room].","🎵"],["Is that our [computer room]? – Yes, it is.","💻"],["Let's go to the [playground].","🛝"]],
g: [["Is this our school? – Yes, it [is|isn't,are].","🏫"],["Is this our gym? – No, it [isn't|is,aren't].","🎨"],["[Let's|Let,Lets] go to the playground.","🛝"],["Let's go [to|at,on] the library.","📚"],["Is [this|these,those] our art room? – Yes, it is.","🎨"]],
q: [{q:"Is this our library?",p:"📚",a:"Yes, it is.",x:["No, it isn't.","Yes, I am.","OK, let's go."]},
{q:"Is this our music room?",p:"🎨",a:"No, it isn't.",x:["Yes, it is.","Yes, I do.","OK, let's go."]},
{q:"Let's go to the gym.",p:"🤸",a:"OK, let's go.",x:["Yes, it is.","No, it isn't.","I'm fine, thank you."]},
{q:"Is this our computer room?",p:"💻",a:"Yes, it is.",x:["No, it isn't.","Yes, they are.","Let's go."]}],
o: ["Let's go to the library.","Is this our school?","Let's go to the playground.","This is our classroom."],
t: [["Let's go to the [gym].","🤸"],["This is our [library].","📚"],["Is this our [classroom]?","🧑‍🏫"],["Let's go to the [playground].","🛝"]]
},
"g4|Global Success 4|6": {
title: "Our school facilities",
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[25, 1], [25, 2]] },
{ n: 2, skin: "tug", name: "Kéo co tri thức (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
grp: {"city":"p","town":"p","village":"p","mountains":"p","countryside":"p","farm":"p","building":"s","classroom":"s","computer room":"s","garden":"s","playground":"s","library":"s","tree":"n","flower":"n","classmate":"n"},
w: [["city","thành phố","🏙️"],["town","thị trấn","🏘️"],["village","làng","🛖"],["mountains","núi","⛰️"],["countryside","miền quê","🌾"],["farm","nông trại","🚜"],["building","tòa nhà","🏢"],["classroom","phòng học","🧑‍🏫"],["computer room","phòng máy tính","💻"],["garden","vườn","🌷"],["playground","sân chơi","🛝"],["library","thư viện","📚"],["tree","cây","🌳"],["flower","hoa","🌸"],["classmate","bạn cùng lớp","🧒"]],
r: [["swim","🏊"],["cook","🍳"],["dance","💃"],["sing","🎤"],["ride a bike","🚲"],["play the piano","🎹"],["birthday","🎂"],["cake","🍰"],["clock","⏰"]],
s: [["My school is in the [city].","🏙️"],["Her school is in the [mountains].","⛰️"],["His school is in the [village].","🛖"],["There is one [garden] at my school.","🌷"],["There is a big [library] at my school.","📚"],["We play in the [playground] at break time.","🛝"],["There are many trees in the school [garden].","🌳🌷"]],
g: [["Where's your school? – It's [in|on,at] the city.","🏙️"],["How many classrooms [are|is,am] there?","🧑‍🏫"],["There [is|are,am] one garden at my school.","🌷"],["There [are|is,am] three buildings at my school.","🏢🏢🏢"],["[Where's|Who's,What's] your school? – It's in the village.","🛖"],["How many [buildings|building] are there at your school?","🏢"],["There is one [garden|gardens].","🌷"]],
q: [{q:"Where's your school?",p:"⛰️",a:"It's in the mountains.",x:["It's in the city.","There are two.","Yes, it is."]},
{q:"How many gardens are there at your school?",p:"🌷",a:"There is one.",x:["There are one.","It's in the town.","Yes, there is."]},
{q:"Is there a library at your school?",p:"📚",a:"Yes, there is.",x:["Yes, it is.","There are two.","It's in the city."]},
{q:"Where's your school?",p:"🏙️",a:"It's in the city.",x:["It's in the village.","It's big.","There is one."]},
{q:"How many buildings are there?",p:"🏢🏢🏢",a:"There are three.",x:["There is three.","It's in the town.","Yes, there are."]}],
o: ["Where's your school?","It's in the mountains.","How many classrooms are there?","There is one garden.","There are two playgrounds."],
t: [["My school is in the [town].","🏘️"],["There is one [garden] at my school.","🌷"],["Her school is in the [village].","🛖"],["There is a big [library].","📚"]]
},
"g5|Global Success 5|6": {
title: "Our school rooms",
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[25, 1], [25, 2]] },
{ n: 2, skin: "tug", name: "Kéo co tri thức (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
grp: {"art room":"r","computer room":"r","library":"r","music room":"r","gym":"r","ground floor":"f","first floor":"f","second floor":"f","third floor":"f","upstairs":"d","downstairs":"d","corridor":"r","left":"d","right":"d"},
w: [["art room","phòng mỹ thuật","🎨"],["computer room","phòng máy tính","💻"],["library","thư viện","📚"],["music room","phòng âm nhạc","🎵"],["gym","phòng thể dục","🤸"],["ground floor","tầng trệt","0️⃣"],["first floor","tầng một","1️⃣"],["second floor","tầng hai","2️⃣"],["third floor","tầng ba","3️⃣"],["upstairs","lên tầng trên","⬆️"],["downstairs","xuống tầng dưới","⬇️"],["corridor","hành lang","🚪"],["left","bên trái","⬅️"],["right","bên phải","➡️"]],
r: [["teacher","👩‍🏫"],["doctor","👨‍⚕️"],["farmer","👨‍🌾"],["firefighter","👨‍🚒"],["pilot","👨‍✈️"],["cook","👨‍🍳"]],
s: [["The library is on the [ground floor].","📚0️⃣"],["The art room is on the [second floor].","🎨2️⃣"],["Go [upstairs] and turn left.","⬆️⬅️"],["We paint pictures in the [art room].","🎨"],["We sing songs in the [music room].","🎵"],["Go along the [corridor] and turn right.","🚪➡️"],["We use computers in the [computer room].","💻"]],
g: [["[Where's|What's,Who's] the art room? – It's on the second floor.","🎨2️⃣"],["It's [on|in,at] the second floor.","2️⃣"],["Go upstairs and [turn|turns,turning] left.","⬆️⬅️"],["The computer room is on the [third|three,thirty] floor.","💻3️⃣"],["My classroom is on the [first|one,once] floor.","1️⃣"],["Could you tell me the [way|ways] to the gym, please?","🤸"]],
q: [{q:"Where's the library?",p:"📚0️⃣",a:"It's on the ground floor.",x:["It's on the third floor.","Go to the library.","Yes, it is."]},
{q:"Could you tell me the way to the gym, please?",p:"⬆️⬅️",a:"Go upstairs and turn left.",x:["Go downstairs and turn right.","It's a big gym.","Yes, I can."]},
{q:"Which floor is the art room on?",p:"🎨2️⃣",a:"The second floor.",x:["The third floor.","The art room.","Turn left."]},
{q:"Where's the music room?",p:"🎵1️⃣",a:"It's on the first floor.",x:["It's on the second floor.","I like music.","Go upstairs."]}],
o: ["Where's the music room?","It's on the first floor.","Go along the corridor.","Could you tell me the way to the library?"],
t: [["The gym is on the [ground floor].","🤸0️⃣"],["Go upstairs and turn [left].","⬆️⬅️"],["We read books in the [library].","📚"],["The art room is on the [second floor].","🎨2️⃣"]]
},
"g6|Global Success 6|3": {
title: "My friends",
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[25, 1], [25, 2]] },
{ n: 2, skin: "tug", name: "Kéo co tri thức (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
grp: {"hair":"b","face":"b","eye":"b","ear":"b","nose":"b","cheek":"b","mouth":"b","shoulder":"b","arm":"b","hand":"b","leg":"b","foot":"b",
"tall":"ap","short":"ap","long":"ap","round":"ap","curly":"ap","straight":"ap","blonde":"ap",
"caring":"p","clever":"p","confident":"p","creative":"p","friendly":"p","funny":"p","hard-working":"p","kind":"p","active":"p","shy":"p","careful":"p","honest":"p","patient":"p","generous":"p",
"summer camp":"e","picnic":"e","field trip":"e","school fair":"e","yearbook":"e","glasses":"e"},
w: [["hair","tóc","💇"],["face","khuôn mặt","🙂"],["eye","mắt","👁️"],["ear","tai","👂"],["nose","mũi","👃"],["mouth","miệng","👄"],["shoulder","vai","🤷"],["arm","cánh tay","💪"],["hand","bàn tay","✋"],["leg","chân","🦵"],["foot","bàn chân","🦶"],
["tall","cao","🦒"],["long","dài","👱‍♀️"],["round","tròn","⭕"],["curly","xoăn","👨‍🦱"],["straight","thẳng","💁"],["blonde","vàng (tóc)","👱"],
["caring","chu đáo, quan tâm","","nopic"],["clever","thông minh, lanh lợi","","nopic"],["confident","tự tin","","nopic"],["creative","sáng tạo","","nopic"],["friendly","thân thiện","","nopic"],["funny","vui tính, hài hước","","nopic"],["hard-working","chăm chỉ","","nopic"],["kind","tốt bụng","","nopic"],["active","năng động","","nopic"],["shy","nhút nhát","","nopic"],["careful","cẩn thận","","nopic"],["honest","trung thực","","nopic"],["patient","kiên nhẫn","","nopic"],["generous","hào phóng","","nopic"],
["summer camp","trại hè","🏕️"],["picnic","dã ngoại","🧺"],["field trip","chuyến đi thực tế","🚌"],["school fair","hội chợ trường học","🎪"],["yearbook","kỷ yếu","📒"],["glasses","kính mắt","👓"]],
r: [["house","🏠"],["flat","🏢"],["kitchen","🍳"],["sofa","🛋️"],["fridge","🧊"],["lamp","💡"],["school bag","🎒"],["uniform","👔"],["calculator","🧮"],["bicycle","🚲"]],
s: [["She has long [straight] hair. It isn't curly.","💁"],["He has short [curly] hair.","👨‍🦱"],["I smell with my [nose].","👃"],["She's very [kind]. She helps everyone.",""],["He tells jokes all the time. He's [funny].",""],["She isn't shy. She's [confident].",""],["He always has new ideas. He's [creative].",""],["He always tells the truth. He's [honest].",""],["We're having a [picnic] in the park on Sunday.","🧺"],["Our class is going on a [field trip] to the museum.","🚌"]],
g: [["She [has|have,is] long black hair.","👩"],["My friends [are|is,has] very kind.",""],["[What|How,Who] does he look like? – He's tall.","🦒"],["What [is|does,do] your best friend like? – She's clever.",""],["We [are having|have,had] a party next Sunday.","🎉"],["What are you [doing|do,does] this weekend?",""],["Look! Nam [is wearing|wears,wear] a red T-shirt.","👕"],["My brother usually [wears|is wearing,wear] glasses.","👓"],["They [are playing|play,plays] football at the moment.","⚽"],["He has [a|an] round face.","⭕"]],
q: [{q:"What does your best friend look like?",p:"👱‍♀️",a:"She's tall and has long hair.",x:["She's kind and clever.","She likes reading.","She's eleven years old."]},
{q:"What is your brother like?",p:"",a:"He's friendly and funny.",x:["He's got short hair.","He's playing football.","He's from Ha Noi."]},
{q:"What are you doing this Saturday?",p:"🧺",a:"I'm having a picnic with my family.",x:["I had a picnic.","I often have picnics.","Yes, I am."]},
{q:"Would you like to come to my party?",p:"🎉",a:"I'd love to. Thanks!",x:["Yes, I do.","I'm fine, thank you.","It's on Sunday."]},
{q:"Is your sister shy?",p:"",a:"No, she isn't. She's very confident.",x:["No, she doesn't.","Yes, she has.","She has long hair."]}],
o: ["She has long black hair.","What does he look like?","We are having a picnic tomorrow.","My best friend is kind and funny.","He is wearing glasses today."],
t: [["She has long curly [hair].","👩‍🦱"],["He always tells the truth. He's [honest].",""],["We hear with our [ears].","👂"],["She is very [creative]. She has lots of new ideas.",""],["We are going to a summer [camp].","🏕️"]]
},
"g7|Global Success 7|3": {
title: "Community service",
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[25, 1], [25, 2]] },
{ n: 2, skin: "tug", name: "Kéo co tri thức (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
grp: {"clean":"v","donate":"v","plant":"v","recycle":"v","reuse":"v","pick up":"v","water":"v","feed":"v","tutor":"v","volunteer":"v","raise money":"v","protect":"v","exchange":"v",
"nursing home":"pl","orphanage":"pl","flooded area":"pl","mountainous area":"pl","community library":"pl","rural area":"pl","playground":"pl",
"bottle":"o","clothes":"o","gloves":"o","litter":"o","plastic":"o","poster":"o","textbook":"o","used paper":"o","vegetable":"o","postcard":"o",
"lonely":"adj","proud":"adj","useful":"adj","elderly":"pe","homeless":"pe","teenager":"pe","community":"pe"},
w: [["clean","dọn dẹp, làm sạch","🧹"],["donate","quyên góp, tặng","🎁"],["plant","trồng (cây)","🌱"],["recycle","tái chế","♻️"],["pick up","nhặt lên, thu gom","🗑️"],["water","tưới nước","🚿"],["feed","cho ăn","🍚"],["tutor","dạy kèm","👩‍🏫"],["raise money","gây quỹ, quyên tiền","💰"],["protect","bảo vệ","🛡️"],["reuse","tái sử dụng","","nopic"],["exchange","trao đổi","","nopic"],["volunteer","tình nguyện","","nopic"],
["nursing home","viện dưỡng lão","🏠"],["orphanage","trại trẻ mồ côi","","nopic"],["flooded area","khu vực bị ngập lụt","🌊"],["mountainous area","vùng núi","⛰️"],["community library","thư viện cộng đồng","🏛️"],["rural area","vùng nông thôn","🌾"],
["bottle","chai, lọ","🍼"],["clothes","quần áo","👕"],["gloves","găng tay","🧤"],["litter","rác (vứt bừa bãi)","🚯"],["poster","áp phích","📜"],["textbook","sách giáo khoa","📘"],["vegetable","rau củ","🥕"],["postcard","bưu thiếp","🖼️"],
["lonely","cô đơn","","nopic"],["proud","tự hào","","nopic"],["useful","hữu ích","","nopic"],["elderly","người già; già","","nopic"],["homeless","vô gia cư","","nopic"],["teenager","thanh thiếu niên","","nopic"],["community","cộng đồng","","nopic"]],
r: [["camera","📷"],["guitar","🎸"],["horse","🐴"],["bike","🚲"],["dollhouse","🏠"],["book","📖"],["stamp","📮"],["cake","🍰"],["coffee","☕"],["juice","🧃"]],
s: [["Last Sunday, we picked up [litter] in the park.","🚯"],["Wear [gloves] when you pick up rubbish.","🧤"],["We collected plastic [bottles] for recycling.","🍼"],["They visited old people at a [nursing home].","🏠"],["We sent clothes to people in a [flooded area].","🌊"],["We [recycle] old paper to make new things.","♻️"],["She tutors children in a [mountainous area].","⛰️"],["I felt [proud] after I helped them.",""],["Volunteering is very [useful] for teenagers.",""],["We donated old [clothes] to the children.","👕"]],
g: [["Last Sunday, we [planted|plant,plants] trees in the park.","🌳"],["She [gave|gives,gived] old clothes to the children last month.","👕"],["[Did|Do,Were] you join the clean-up activity yesterday? – Yes, I did.","🧹"],["They [didn't|don't,weren't] go to the nursing home last weekend.","🏠"],["My brother [taught|teached,teaches] English to primary students last year.","👩‍🏫"],["We [were|was,are] very proud after the project.",""],["The volunteers [found|finded,find] a lot of litter on the beach.","🚯"],["Did you [visit|visited,visiting] the nursing home last Sunday?","🏠"],["Our club [raised|raises,rose] money for the flooded area last year.","💰"],["Yesterday the children [wrote|writed,write] thank-you cards.","💌"]],
q: [{q:"What did you do last weekend?",p:"🚯",a:"I picked up litter in the park.",x:["I pick up litter every day.","I'm picking up litter.","Yes, I did."]},
{q:"Why do you do volunteer work?",p:"",a:"Because I like helping people.",x:["Last Sunday.","At the nursing home.","With my friends."]},
{q:"Where did you volunteer last summer?",p:"🌾",a:"In a rural area.",x:["Last summer.","With my class.","Because it's useful."]},
{q:"Did you donate books to the community library?",p:"🏛️",a:"Yes, I did.",x:["Yes, I do.","No, I wasn't.","Yes, they are."]},
{q:"How did you feel after helping the old people?",p:"",a:"I felt very proud.",x:["I feel proud every day.","At the nursing home.","Yes, I did."]}],
o: ["We donated old clothes last month.","What did you do last summer?","She didn't join the trip.","They planted trees in the park.","We picked up litter on the beach."],
t: [["Last Sunday, we picked up [litter] in the park.","🚯"],["We [recycle] plastic bottles.","♻️"],["They visited a nursing [home].","🏠"],["Wear [gloves] when you clean the beach.","🧤"],["I felt [proud] after I helped them.",""]]
},
"g1|Global Success 1|7": {
title: "In the garden", sound: "G g", young: true,
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[30, 1], [20, 2]] },
{ n: 2, skin: "path", name: "Phiêu lưu đảo khủng long (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
w: [["garden","khu vườn","🌷"],["gate","cái cổng","🚧"],["girl","bé gái","👧"],["goat","con dê","🐐"]],
r: [["bell","🔔"],["pen","🖊️"],["pencil","✏️"],["chicken","🍗"],["chips","🍟"],["fish","🐟"],["milk","🥛"],["ball","⚽"],["bike","🚲"],["cat","🐱"],["dog","🐶"],["duck","🦆"],["hat","👒"]],
s: [["There's a [goat].","🐐"],["There's a [girl].","👧"],["There's a [gate].","🚧"],["There's a [garden].","🌷"]],
g: [["[There's|There,They] a goat.","🐐"],["There's [a|an] girl.","👧"],["There's a [gate|gates].","🚧"]],
q: [],
o: ["There's a goat.","There's a girl.","There's a gate.","There's a garden."],
t: [["There's a [goat].","🐐"],["There's a [girl].","👧"],["There's a [gate].","🚧"]]
},
"g1|Global Success 1|8": {
title: "In the park", sound: "H h", young: true,
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[30, 1], [20, 2]] },
{ n: 2, skin: "path", name: "Phiêu lưu đảo khủng long (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
w: [["hair","tóc","💇"],["hand","bàn tay","✋"],["head","cái đầu","🙂"],["horse","con ngựa","🐴"]],
r: [["garden","🌷"],["gate","🚧"],["girl","👧"],["goat","🐐"],["bell","🔔"],["pen","🖊️"],["fish","🐟"],["milk","🥛"],["ball","⚽"],["cat","🐱"],["dog","🐶"],["duck","🦆"],["cake","🍰"]],
s: [["Touch your [hair].","💇"],["Touch your [hand].","✋"],["Touch your [head].","🙂"],["There's a [horse].","🐴"]],
g: [["[Touch|Touches,Touching] your head.","🙂"],["Touch [your|you,yours] hand.","✋"],["There's [a|an] horse.","🐴"]],
q: [],
o: ["Touch your hair.","Touch your hand.","Touch your head.","There's a horse."],
t: [["Touch your [hair].","💇"],["Touch your [hand].","✋"],["Touch your [head].","🙂"]]
},
"g2|Global Success 2|7": {
title: "In the kitchen", sound: "J j", young: true,
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[30, 1], [20, 2]] },
{ n: 2, skin: "path", name: "Phiêu lưu đảo khủng long (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
w: [["kitchen","nhà bếp","🍳"],["jam","mứt","🍓"],["juice","nước ép","🧃"],["jelly","thạch","🍮"],["water","nước","💧"]],
r: [["farm","🚜"],["box","📦"],["fox","🦊"],["ox","🐂"],["pizza","🍕"],["popcorn","🍿"],["kite","🪁"],["bike","🚲"],["kitten","🐱"],["sea","🌊"],["rainbow","🌈"],["question","❓"],["quiz","📝"]],
s: [["I like [jam].","🍓"],["I like [juice].","🧃"],["I like [jelly].","🍮"],["I like [water].","💧"],["Pass me the [juice], please.","🧃"]],
g: [["What do you like? – I [like|likes,liking] jelly.","🍮"],["[What|Who,How] do you like? – I like juice.","🧃"],["What [do|does,are] you like? – I like jam.","🍓"],["I like jelly [and|but,or] jam.","🍮🍓"]],
q: [{q:"What do you like?",p:"🧃",a:"I like juice.",x:["I like jam.","I like jelly.","Yes, I do."]},
{q:"What do you like?",p:"🍓",a:"I like jam.",x:["I like water.","I like juice.","Yes, I can."]},
{q:"What do you like?",p:"🍮",a:"I like jelly.",x:["I like jam.","I like water.","I can see a fox."]}],
o: ["I like jam.","What do you like?","I like juice.","I like jelly and jam."],
t: [["I like [jam].","🍓"],["I like [juice].","🧃"],["I like [jelly].","🍮"]]
},
"g2|Global Success 2|8": {
title: "In the village", sound: "V v", young: true,
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[30, 1], [20, 2]] },
{ n: 2, skin: "path", name: "Phiêu lưu đảo khủng long (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
w: [["village","ngôi làng","🏘️"],["van","xe tải nhỏ","🚐"],["volleyball","bóng chuyền","🏐"],["draw","vẽ","✏️"]],
r: [["kitchen","🍳"],["jam","🍓"],["juice","🧃"],["jelly","🍮"],["farm","🚜"],["box","📦"],["fox","🦊"],["ox","🐂"],["pizza","🍕"],["kite","🪁"],["bike","🚲"],["sea","🌊"]],
s: [["Can you draw a [van]? – Yes, I can.","🚐"],["Can you draw a [village]? – Yes, I can.","🏘️"],["Can you draw a [volleyball]? – No, I can't.","🏐"],["I can [draw] a van.","✏️🚐"]],
g: [["Can you draw a van? – Yes, I [can|can't,do].","🚐👍"],["Can you draw a village? – No, I [can't|can,don't].","🏘️👎"],["[Can|Do,Are] you draw a volleyball?","🏐"],["Can you [draw|draws,drawing] a farm?","🚜"]],
q: [{q:"Can you draw a van?",p:"🚐👍",a:"Yes, I can.",x:["No, I can't.","Yes, I do.","I like jam."]},
{q:"Can you draw a volleyball?",p:"🏐👎",a:"No, I can't.",x:["Yes, I can.","No, I don't.","It's a ball."]},
{q:"Can you draw a village?",p:"🏘️👍",a:"Yes, I can.",x:["No, I can't.","Yes, it is.","I can see a fox."]}],
o: ["Can you draw a van?","Yes, I can.","No, I can't.","Can you draw a village?"],
t: [["Can you draw a [van]?","🚐"],["I can draw a [village].","🏘️"],["Can you [draw] a volleyball?","✏️🏐"]]
},
"g3|Global Success 3|7": {
title: "Classroom instructions",
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[30, 1], [20, 2]] },
{ n: 2, skin: "tug", name: "Kéo co tri thức (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
w: [["open your book","mở sách ra","📖"],["close your book","gấp sách lại","📕"],["stand up","đứng lên","🧍"],["sit down","ngồi xuống","🪑"],["go out","đi ra ngoài","🚪"],["come in","đi vào","🚶"],["speak English","nói tiếng Anh","🗣️"]],
r: [["school","🏫"],["library","📚"],["playground","🛝"],["gym","🤸"],["art room","🎨"],["music room","🎵"],["computer room","💻"],["dancing","💃"],["singing","🎤"],["swimming","🏊"]],
s: [["Please [stand up].","🧍"],["Please [sit down].","🪑"],["Please [open your book].","📖"],["Please [close your book].","📕"],["May I [go out]? – Yes, you can.","🚪"],["May I [come in]? – Yes, you can.","🚶"]],
g: [["May I go out? – Yes, you [can|can't,do].","🚪👍"],["May I speak Vietnamese? – No, you [can't|can,don't].","👎"],["[May|Do,Am] I come in?","🚶"],["Please [open|opens,opening] your book.","📖"],["[Sit|Sits,Sitting] down, please.","🪑"],["Don't [talk|talks,talking], please.","🤫"]],
q: [{q:"May I go out?",p:"🚪👍",a:"Yes, you can.",x:["No, you can't.","Yes, I am.","Sit down, please."]},
{q:"May I come in?",p:"🚶👍",a:"Yes, you can.",x:["No, you can't.","Yes, it is.","Stand up, please."]},
{q:"May I speak Vietnamese?",p:"👎",a:"No, you can't.",x:["Yes, you can.","No, it isn't.","Open your book."]}],
o: ["Stand up, please.","May I go out?","Please open your book.","Yes, you can.","Sit down, please."],
t: [["[Stand] up, please.","🧍"],["Please [close] your book.","📕"],["May I go [out]?","🚪"],["[Sit] down, please.","🪑"]]
},
"g3|Global Success 3|8": {
title: "My school things",
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[30, 1], [20, 2]] },
{ n: 2, skin: "tug", name: "Kéo co tri thức (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
w: [["pen","bút mực","🖊️"],["ruler","thước kẻ","📏"],["book","quyển sách","📖"],["school bag","cặp sách","🎒"],["pencil","bút chì","✏️"],["pencil case","hộp bút","👝"],["notebook","quyển vở","📓"],["eraser","cục tẩy","🧽"]],
r: [["school","🏫"],["library","📚"],["playground","🛝"],["gym","🤸"],["eye","👁️"],["ear","👂"],["nose","👃"],["hand","✋"],["dancing","💃"],["swimming","🏊"]],
s: [["I have a [ruler].","📏"],["Do you have a [pencil]? – Yes, I do.","✏️"],["This is my [school bag].","🎒"],["Do you have an [eraser]? – No, I don't.","🧽"],["I have a [notebook].","📓"],["My pens are in my [pencil case].","👝"]],
g: [["Do you have a ruler? – Yes, I [do|don't,am].","📏👍"],["Do you have a pen? – No, I [don't|do,can't].","🖊️👎"],["[Do|Are,Does] you have a notebook?","📓"],["I have [an|a] eraser.","🧽"],["I have [a|an] school bag.","🎒"],["These [are|is,am] my books.","📖📖"]],
q: [{q:"Do you have a ruler?",p:"📏👍",a:"Yes, I do.",x:["No, I don't.","Yes, I am.","It's a ruler."]},
{q:"Do you have an eraser?",p:"🧽👎",a:"No, I don't.",x:["Yes, I do.","No, I'm not.","Yes, you can."]},
{q:"What's this?",p:"🎒",a:"It's a school bag.",x:["It's a pencil case.","Yes, it is.","They're books."]}],
o: ["I have a ruler.","Do you have a pencil?","Yes, I do.","No, I don't.","This is my school bag."],
t: [["I have a [ruler].","📏"],["Do you have an [eraser]?","🧽"],["I have a [notebook].","📓"],["This is my [pen].","🖊️"]]
},
"g4|Global Success 4|7": {
title: "Our timetables",
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[25, 1], [25, 2]] },
{ n: 2, skin: "tug", name: "Kéo co tri thức (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
grp: {"art":"s","English":"s","history and geography":"s","maths":"s","music":"s","science":"s","Vietnamese":"s","Monday":"d","Tuesday":"d","Wednesday":"d","Thursday":"d","Friday":"d"},
w: [["art","môn Mỹ thuật","🎨"],["English","môn Tiếng Anh","🔤"],["history and geography","môn Lịch sử và Địa lí","🌏"],["maths","môn Toán","➗"],["music","môn Âm nhạc","🎵"],["science","môn Khoa học","🔬"],["Vietnamese","môn Tiếng Việt","📝"],["Monday","thứ Hai","","nopic"],["Tuesday","thứ Ba","","nopic"],["Wednesday","thứ Tư","","nopic"],["Thursday","thứ Năm","","nopic"],["Friday","thứ Sáu","","nopic"]],
r: [["city","🏙️"],["village","🛖"],["mountains","⛰️"],["garden","🌷"],["playground","🛝"],["library","📚"],["building","🏢"],["computer room","💻"]],
s: [["We draw pictures in [art] lessons.","🎨"],["We count numbers in [maths] lessons.","➗"],["We sing songs in [music] lessons.","🎵"],["We do experiments in [science] lessons.","🔬"],["I have [English] on Mondays and Wednesdays.","🔤"]],
g: [["What subjects [do|does,are] you have today?","📅"],["I [have|has,having] maths and English today.","➗🔤"],["When do you have music? – I have it [on|in,at] Tuesdays.","🎵"],["[When|What,Who] do you have science? – On Fridays.","🔬"],["She [has|have,is] art on Thursdays.","🎨"],["We have English [on|in,at] Monday.","🔤"]],
q: [{q:"What subjects do you have today?",p:"➗🔤",a:"I have maths and English.",x:["I have it on Mondays.","It's Monday.","I like music."]},
{q:"When do you have music?",p:"🎵",a:"I have it on Tuesdays.",x:["I have music and art.","At school.","It's my favourite."]},
{q:"What day is it today?",p:"📅",a:"It's Wednesday.",x:["I have English.","On Wednesday.","Yes, it is."]},
{q:"Do you have science today?",p:"🔬👍",a:"Yes, I do.",x:["Yes, I am.","On Fridays.","No, it isn't."]}],
o: ["What subjects do you have today?","I have maths and English.","When do you have art?","I have it on Fridays."],
t: [["We sing songs in [music] lessons.","🎵"],["I have [maths] today.","➗"],["We draw in [art] lessons.","🎨"],["I have English on [Mondays].",""]]
},
"g4|Global Success 4|8": {
title: "My favourite subjects",
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[25, 1], [25, 2]] },
{ n: 2, skin: "tug", name: "Kéo co tri thức (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
grp: {"IT":"s","PE":"s","art":"s","English":"s","maths":"s","music":"s","science":"s","Vietnamese":"s","English teacher":"t","maths teacher":"t","music teacher":"t","art teacher":"t"},
w: [["IT","môn Tin học","💻","","abbr"],["PE","môn Giáo dục thể chất","🤸","","abbr"],["art","môn Mỹ thuật","🎨"],["English","môn Tiếng Anh","🔤"],["maths","môn Toán","➗"],["music","môn Âm nhạc","🎵"],["science","môn Khoa học","🔬"],["English teacher","giáo viên Tiếng Anh","","nopic"],["maths teacher","giáo viên Toán","","nopic"],["music teacher","giáo viên Âm nhạc","","nopic"]],
r: [["Monday","📅"],["city","🏙️"],["village","🛖"],["garden","🌷"],["library","📚"],["swim","🏊"],["cook","🍳"],["dance","💃"]],
s: [["My favourite subject is [IT]. I like computers.","💻"],["I like [PE] because I like sports.","🤸"],["I want to be a singer. I like [music].","🎵"],["We use computers in [IT] lessons.","💻"],["I like [maths] because I like numbers.","➗"]],
g: [["What's your favourite [subject|subjects,lesson]? – It's IT.","💻"],["Why do you like English? – [Because|So,And] I want to be an English teacher.","🔤"],["I like PE because I [like|likes,liking] sports.","🤸"],["[What's|Why,Who's] your favourite subject? – It's maths.","➗"],["[Why|What,When] do you like music? – Because I like singing.","🎵"],["I want to be [an|a] English teacher.","🔤"]],
q: [{q:"What's your favourite subject?",p:"💻",a:"It's IT.",x:["Because I like computers.","I have it on Mondays.","Yes, it is."]},
{q:"Why do you like PE?",p:"🤸",a:"Because I like sports.",x:["It's PE.","On Tuesdays.","I have PE today."]},
{q:"Why do you like English?",p:"🔤",a:"Because I want to be an English teacher.",x:["It's English.","On Fridays.","I have English and maths."]},
{q:"What's your favourite subject?",p:"🎵",a:"It's music.",x:["Because I like singing.","I have it on Wednesdays.","My music teacher."]}],
o: ["What's your favourite subject?","It's IT.","Why do you like PE?","Because I like sports."],
t: [["My favourite subject is [IT].","💻"],["I like [PE] because I like sports.","🤸"],["I like [music] because I like singing.","🎵"],["I want to be an English [teacher].",""]]
},
"g5|Global Success 5|7": {
title: "Our favourite school activities",
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[25, 1], [25, 2]] },
{ n: 2, skin: "tug", name: "Kéo co tri thức (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
grp: {"doing projects":"a","playing games":"a","reading books":"a","solving maths problems":"a","fun":"j","interesting":"j","useful":"j","exciting":"j"},
w: [["doing projects","làm dự án","📊"],["playing games","chơi trò chơi","🎲"],["reading books","đọc sách","📚"],["solving maths problems","giải toán","➗"],["fun","vui","","nopic"],["interesting","thú vị","","nopic"],["useful","hữu ích","","nopic"],["exciting","hào hứng","","nopic"]],
r: [["art room","🎨"],["computer room","💻"],["library","📚"],["music room","🎵"],["gym","🤸"],["teacher","👩‍🏫"],["doctor","👨‍⚕️"],["farmer","👨‍🌾"]],
s: [["I like [reading books] in the library.","📚"],["My favourite activity is [solving maths problems].","➗"],["We like [playing games] at break time.","🎲"],["She likes [doing projects] with her friends.","📊"],["I like playing games because it's [fun].",""],["I like reading books because they're [interesting].",""]],
g: [["What's your favourite school activity? – I like [doing|do,does] projects.","📊"],["Why do you like reading books? – Because they're [interesting|interest,interested].","📚"],["[Why|What,Where] do you like solving maths problems? – Because it's useful.","➗"],["She [likes|like,liking] playing games.","🎲"],["[What's|Why's,Where's] your favourite school activity?","🏫"],["They like reading books [because|so,but] it's fun.","📚"]],
q: [{q:"What's your favourite school activity?",p:"📊",a:"I like doing projects.",x:["Because it's fun.","At school.","Yes, I do."]},
{q:"Why do you like playing games?",p:"🎲",a:"Because it's fun.",x:["I like playing games.","At break time.","With my friends."]},
{q:"Why do you like solving maths problems?",p:"➗",a:"Because it's useful.",x:["I like maths.","In the classroom.","Yes, it is."]},
{q:"What's your favourite school activity?",p:"📚",a:"I like reading books.",x:["Because they're interesting.","In the library.","No, I don't."]}],
o: ["What's your favourite school activity?","I like doing projects.","Why do you like reading books?","Because they're interesting."],
t: [["I like [reading] books.","📚"],["My favourite activity is playing [games].","🎲"],["Solving maths problems is [useful].",""],["We like doing [projects].","📊"]]
},
"g5|Global Success 5|8": {
title: "In our classroom",
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[25, 1], [25, 2]] },
{ n: 2, skin: "tug", name: "Kéo co tri thức (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
grp: {"crayon":"o","glue stick":"o","pencil sharpener":"o","set square":"o","ruler":"o","above":"p","under":"p","beside":"p","in front of":"p","behind":"p"},
w: [["crayon","bút sáp màu","🖍️"],["glue stick","keo dán dạng thỏi","🧴"],["pencil sharpener","cái gọt bút chì","✏️🔧"],["set square","thước ê-ke","📐"],["ruler","thước kẻ","📏"],["above","ở phía trên","","nopic"],["under","ở phía dưới","","nopic"],["beside","bên cạnh","","nopic"],["in front of","ở phía trước","","nopic"],["behind","ở phía sau","","nopic"]],
r: [["art room","🎨"],["library","📚"],["gym","🤸"],["teacher","👩‍🏫"],["doctor","👨‍⚕️"],["farmer","👨‍🌾"],["play games","🎲"],["read books","📚"]],
s: [["I colour pictures with a [crayon].","🖍️"],["I sharpen my pencil with a [pencil sharpener].","✏️🔧"],["I draw triangles with a [set square].","📐"],["I stick paper with a [glue stick].","🧴"]],
g: [["Where's the crayon? – It's [beside|besides,between] the ruler.","🖍️📏"],["[Where's|Where,Whose] the glue stick? – It's on the desk.","🧴"],["Where are the crayons? – [They're|It's,Their] under the book.","🖍️"],["The bag is in front [of|to,at] the door.","🎒🚪"],["Whose set square is this? – It's [Mary's|Mary,Marys].","📐"],["The clock is [above|on top,up] the board.","⏰"]],
q: [{q:"Where's the set square?",p:"📐",a:"It's beside the ruler.",x:["It's a set square.","Yes, it is.","They're beside the ruler."]},
{q:"Where are the crayons?",p:"🖍️",a:"They're under the book.",x:["It's under the book.","They're crayons.","Yes, they are."]},
{q:"Whose glue stick is this?",p:"🧴",a:"It's Nam's.",x:["It's on the desk.","It's a glue stick.","Yes, it is."]},
{q:"Where's the pencil sharpener?",p:"✏️🔧",a:"It's in the pencil case.",x:["They're in the pencil case.","It's my pencil.","No, it isn't a pen."]}],
o: ["Where's the crayon?","It's beside the ruler.","Where are the crayons?","They're under the book."],
t: [["I colour with a [crayon].","🖍️"],["I draw with a set [square].","📐"],["I stick paper with a glue [stick].","🧴"]]
},
"g6|Global Success 6|4": {
title: "My neighbourhood",
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[25, 1], [25, 2]] },
{ n: 2, skin: "path", name: "Đường đến khu phố (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
grp: {"cinema":"pl","post office":"pl","museum":"pl","temple":"pl","pagoda":"o","cathedral":"pl","railway station":"pl","restaurant":"pl","factory":"pl","office":"pl","shop":"pl","market":"o","square":"pl","art gallery":"o","countryside":"pl","street":"pl","suburbs":"pl",
"turn left":"dir","turn right":"dir","go straight":"dir","cross the road":"dir","go along":"dir","get lost":"dir","ask the way":"dir","show the way":"dir",
"quiet":"adj","noisy":"adj","crowded":"adj","modern":"adj","boring":"adj","exciting":"adj","cheap":"adj","expensive":"adj","clean":"adj","dirty":"adj","convenient":"adj","wide":"adj","beautiful":"adj",
"neighbour":"o","weather":"o","seafood":"o","present":"o","traffic":"o","workshop":"o"},
w: [["cinema","rạp chiếu phim","🎬"],["post office","bưu điện","🏤"],["museum","bảo tàng","🏛️"],["temple","đền, miếu","🛕"],["cathedral","nhà thờ lớn","⛪"],["railway station","nhà ga xe lửa","🚉"],["restaurant","nhà hàng","🍽️"],["factory","nhà máy","🏭"],["office","văn phòng","🏢"],["shop","cửa hàng","🏪"],["countryside","vùng nông thôn","🌾"],["art gallery","phòng trưng bày nghệ thuật","","nopic"],
["pagoda","chùa","","nopic"],["market","chợ","","nopic"],["square","quảng trường","","nopic"],["street","đường phố","","nopic"],["suburbs","vùng ngoại ô","","nopic"],
["turn left","rẽ trái","⬅️"],["turn right","rẽ phải","➡️"],["go straight","đi thẳng","⬆️"],["cross the road","băng qua đường","🚸"],["go along","đi dọc theo","","nopic"],["get lost","bị lạc","","nopic"],["ask the way","hỏi đường","","nopic"],["show the way","chỉ đường","","nopic"],
["quiet","yên tĩnh","","nopic"],["noisy","ồn ào","","nopic"],["crowded","đông đúc","","nopic"],["modern","hiện đại","","nopic"],["boring","nhàm chán","","nopic"],["exciting","thú vị, hào hứng","","nopic"],["cheap","rẻ","","nopic"],["expensive","đắt","","nopic"],["clean","sạch sẽ","","nopic"],["dirty","bẩn","","nopic"],["convenient","tiện lợi","","nopic"],["wide","rộng","","nopic"],["beautiful","đẹp","","nopic"],
["weather","thời tiết","⛅"],["seafood","hải sản","🦐"],["present","món quà","🎁"],["neighbour","hàng xóm","","nopic"],["traffic","giao thông","","nopic"],["workshop","hội thảo, xưởng","","nopic"]],
r: [["house","🏠"],["bedroom","🛏️"],["bike","🚲"],["uniform","👔"],["calculator","🧮"],["lamp","💡"],["sofa","🛋️"],["fridge","🧊"]],
s: [["We watch films at the [cinema].","🎬"],["I send letters and packages at the [post office].","🏤"],["Trains arrive and leave at the [railway station].","🚉"],["People make cars and machines in a [factory].","🏭"],["Look left and right before you [cross the road].","🚸"],["Go to the end of the street and [turn left].","⬅️"],
["This shirt costs only 50,000 dong. It's [cheap].",""],["This bag costs five million dong. It's very [expensive].",""],["There is rubbish everywhere in the street. It's [dirty].",""],["There is no noise here at night. It's very [quiet].",""],["There's a supermarket and a bus stop near my house. It's very [convenient].",""],
["We often eat [seafood] like fish and shrimp at the beach.","🦐"],["My [neighbour] lives next door to me.",""]],
g: [["My village is [quieter|quiet,more quiet] than the city.",""],["The city is [noisier|noisy,more noisy] than the countryside.",""],["Life in the city is [more expensive|expensiver,expensive] than life in the countryside.",""],["Ha Noi is [bigger|biger,more big] than Hoi An.",""],["My village is [cleaner|clean,more clean] than the city.",""],["Is your neighbourhood [busier|busyer,more busy] than mine?",""],["The new cinema is [better|gooder,more good] than the old one.","🎬"],["Living here is [more convenient|convenienter,convenient] than living in the countryside.",""],["This street is wider [than|that,then] that street.",""],["Excuse me, can you [tell|telling,tells] me the way to the post office?","🏤"],["[Turn|Turning,Turns] left at the end of the street.","⬅️"],["[Is there|Are there,There is] a museum near here?","🏛️"]],
q: [{q:"Excuse me, where's the post office?",p:"🏤",a:"Go straight and turn left. It's on your right.",x:["It's very noisy.","Yes, it is.","I go there by bus."]},
{q:"What's your neighbourhood like?",p:"",a:"It's quiet and clean.",x:["It's on Tran Phu Street.","Yes, I do.","I live there with my family."]},
{q:"Is your neighbourhood noisier than the city centre?",p:"",a:"No, it isn't. It's quieter.",x:["No, it doesn't.","Yes, it does.","It's noisy than the centre."]},
{q:"Is there a cinema in your neighbourhood?",p:"🎬",a:"Yes, there is.",x:["Yes, it is.","Yes, there are.","No, it isn't."]},
{q:"What do you like about your neighbourhood?",p:"",a:"The people are very friendly.",x:["It's on the left.","I don't know the way.","Turn right."]}],
o: ["My village is quieter than the city.","Go straight and turn left.","Can you show me the way to the cinema?","Is there a museum near here?","There is a big market in my neighbourhood."],
t: [["We watch films at the [cinema].","🎬"],["Look left and right before you cross the [road].","🚸"],["My street has no noise. It is [quieter] than your street.",""],["My [neighbour] lives next door.",""],["Excuse me, can you show me the [way] to the museum?","🏛️"]]
},
"g6|Global Success 6|5": {
title: "Natural wonders of Viet Nam",
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[25, 1], [25, 2]] },
{ n: 2, skin: "tug", name: "Kéo co tri thức (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
grp: {"mountain":"n","forest":"n","desert":"n","island":"n","national park":"n","river":"n","waterfall":"n","cave":"n","bay":"n","scenery":"n","natural wonder":"n","rock":"n",
"compass":"it","suncream":"it","plaster":"it","scissors":"it","waterproof coat":"it","mobile phone":"it","luggage":"it","backpack":"it","sleeping bag":"it",
"go camping":"ac","go hiking":"ac","ride a bike":"ac","fly kites":"ac","travel":"ac","explore":"ac","visit":"ac",
"beautiful":"adj","famous":"adj","dangerous":"adj","necessary":"adj","man-made":"adj","natural":"adj","important":"adj",
"rainy":"we","sunny":"we","dry":"we","warm":"we"},
w: [["mountain","núi","⛰️"],["forest","rừng","🌲"],["desert","sa mạc","🏜️"],["island","đảo","🏝️"],["national park","vườn quốc gia","","nopic"],["river","sông","","nopic"],["waterfall","thác nước","","nopic"],["cave","hang động","","nopic"],["bay","vịnh","","nopic"],["scenery","phong cảnh","","nopic"],["natural wonder","kỳ quan thiên nhiên","","nopic"],["rock","đá, tảng đá","","nopic"],
["compass","la bàn","🧭"],["suncream","kem chống nắng","🧴"],["plaster","băng cá nhân","🩹"],["scissors","cái kéo","✂️"],["waterproof coat","áo khoác chống nước","🧥"],["mobile phone","điện thoại di động","📱"],["luggage","hành lý","🧳"],["backpack","ba lô","🎒"],["sleeping bag","túi ngủ","","nopic"],
["go camping","đi cắm trại","⛺"],["go hiking","đi bộ đường dài","🥾"],["ride a bike","đi xe đạp","🚴"],["fly kites","thả diều","🪁"],["travel","đi du lịch","✈️"],["explore","khám phá","","nopic"],["visit","thăm, tham quan","","nopic"],
["beautiful","đẹp","","nopic"],["famous","nổi tiếng","","nopic"],["dangerous","nguy hiểm","","nopic"],["necessary","cần thiết","","nopic"],["man-made","nhân tạo","","nopic"],["natural","tự nhiên","","nopic"],["important","quan trọng","","nopic"],
["rainy","có mưa","🌧️"],["sunny","nắng","☀️"],["dry","khô","","nopic"],["warm","ấm áp","","nopic"]],
r: [["cinema","🎬"],["factory","🏭"],["post office","🏤"],["railway station","🚉"],["house","🏠"],["sofa","🛋️"],["lamp","💡"],["calculator","🧮"]],
s: [["The [desert] is very hot and dry. There is a lot of sand.","🏜️"],["There is a small [island] in the middle of the lake.","🏝️"],["Water falls down from the top of the rocks. It's a [waterfall].",""],["Son Doong is a very big [cave] inside a mountain.",""],["We walk under tall trees in the [forest].","🌲"],
["It's very sunny. Put on some [suncream].","🧴"],["A [compass] shows you which way is north.","🧭"],["I cut my finger. I need a [plaster].","🩹"],["It's raining. Wear your [waterproof coat].","🧥"],["We sleep in a [sleeping bag] when we go camping.",""],
["Swimming in that river is [dangerous]. The water is very fast.",""],["Ha Long Bay is a [natural] wonder. People didn't make it.",""],["Everyone knows Ha Long Bay. It's very [famous].",""],["Take an umbrella. It's [rainy] today.","🌧️"]],
g: [["You [must|mustn't,musts] take a compass with you. You may get lost.","🧭"],["You [mustn't|must,don't must] swim in this river. It's dangerous.",""],["We [must|mustn't,can't] bring suncream. It's very sunny.","🧴"],["You [mustn't|must,need] leave litter at the campsite.",""],["I need [some|a,an] water for the trip.",""],["There are [many|much,a] islands in Ha Long Bay.","🏝️"],["How [much|many,a lot] water do we need?",""],["How [many|much,any] backpacks do you have?","🎒"],["We need [a|an,some] sleeping bag.",""],["Take [an|a,some] umbrella. It's rainy.","🌧️"],["Fansipan is the [highest|higher,high] mountain in Viet Nam.","⛰️"]],
q: [{q:"What must we take for the trip?",p:"🧭",a:"We must take a compass and a sleeping bag.",x:["We mustn't swim here.","It's in Quang Binh.","Yes, we must."]},
{q:"Where is Ha Long Bay?",p:"",a:"It's in Quang Ninh Province.",x:["It's very beautiful.","Yes, it is.","We go there by car."]},
{q:"What's Ha Long Bay like?",p:"🏝️",a:"It's beautiful, with many islands.",x:["It's in Quang Ninh.","I'd like to go there.","Yes, I like it."]},
{q:"How many islands are there in Ha Long Bay?",p:"🏝️",a:"There are nearly 2,000 islands.",x:["There is much water.","Yes, there are.","It's very big."]},
{q:"Can we swim in this river?",p:"",a:"No, we can't. It's dangerous.",x:["Yes, we are.","No, they don't.","It's a big river."]}],
o: ["You must take a compass.","We mustn't leave litter here.","Ha Long Bay is a natural wonder.","We need some water for the trip.","There are many islands in the bay."],
t: [["Put on some [suncream]. It's very sunny.","🧴"],["Water falls down from the top of the rocks. It's a [waterfall].",""],["Son Doong is a very big [cave] inside a mountain.",""],["We sleep in a sleeping [bag] when we go camping.",""],["Ha Long [Bay] is in Quang Ninh.",""]]
},
"g7|Global Success 7|4": {
title: "Music and arts",
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[25, 1], [25, 2]] },
{ n: 2, skin: "path", name: "Con đường nghệ thuật (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
grp: {"piano":"mu","guitar":"mu","violin":"mu","drum":"mu","choir":"mu","concert":"mu","anthem":"mu","orchestra":"mu","folk music":"mu","classical music":"mu","country music":"mu",
"composer":"pe","actor":"pe","actress":"pe","character":"pe",
"camera":"ar","paintbrush":"ar","painting":"ar","portrait":"ar2","sculpture":"ar2","puppet":"ar","water puppetry":"ar","exhibition":"ar","photography":"ar2",
"art gallery":"pl","concert hall":"pl","museum":"pl","festival":"pl",
"creative":"adj","artistic":"adj","impressive":"adj","traditional":"adj","compulsory":"adj","optional":"adj",
"compose":"v","perform":"v","originate":"v","control":"v"},
w: [["piano","đàn piano","🎹"],["guitar","đàn ghi-ta","🎸"],["violin","đàn vi-ô-lông","🎻"],["drum","cái trống","🥁"],["choir","dàn hợp xướng","","nopic"],["concert","buổi hòa nhạc","","nopic"],["anthem","quốc ca","","nopic"],["orchestra","dàn nhạc giao hưởng","","nopic"],["folk music","nhạc dân gian","","nopic"],["classical music","nhạc cổ điển","","nopic"],["country music","nhạc đồng quê","","nopic"],
["composer","nhà soạn nhạc","","nopic"],["actor","nam diễn viên","","nopic"],["actress","nữ diễn viên","","nopic"],["character","nhân vật","","nopic"],
["camera","máy ảnh","📷"],["paintbrush","cọ vẽ","🖌️"],["painting","bức tranh, hội họa","🖼️"],["portrait","chân dung","","nopic"],["sculpture","tác phẩm điêu khắc","","nopic"],["puppet","con rối","","nopic"],["water puppetry","nghệ thuật múa rối nước","","nopic"],["exhibition","triển lãm","","nopic"],["photography","nhiếp ảnh","","nopic"],
["art gallery","phòng trưng bày nghệ thuật","","nopic"],["concert hall","phòng hòa nhạc","","nopic"],["museum","bảo tàng","🏛️"],["festival","lễ hội","","nopic"],
["creative","sáng tạo","","nopic"],["artistic","có tính nghệ thuật","","nopic"],["impressive","ấn tượng","","nopic"],["traditional","truyền thống","","nopic"],["compulsory","bắt buộc","","nopic"],["optional","không bắt buộc, tùy chọn","","nopic"],
["compose","soạn, sáng tác (nhạc)","","nopic"],["perform","biểu diễn","","nopic"],["originate","bắt nguồn","","nopic"],["control","điều khiển","","nopic"]],
r: [["horse","🐴"],["bike","🚲"],["stamp","📮"],["cake","🍰"],["bottle","🍼"],["gloves","🧤"],["poster","📜"],["textbook","📘"]],
s: [["She plays the [piano] in the school concert. It has black and white keys.","🎹"],["A [choir] is a group of people who sing together.",""],["Tien Quan Ca is the national [anthem] of Viet Nam.",""],
["Van Cao wrote the national anthem. He was a great [composer].",""],["He is a famous [actor]. He plays in many films.",""],
["Use a [paintbrush] to paint the picture.","🖌️"],["Take a photo with your [camera].","📷"],
["Music is a [compulsory] subject. All students must study it.",""],["The art club is [optional]. You can choose to join it or not.",""],["Water puppetry is a [traditional] art form. It started about a thousand years ago.",""],
["The band will [perform] at the festival tonight.",""]],
g: [["My painting is [as|so,more] beautiful as yours.","🖼️"],["This song is different [from|as,like] that one.",""],["Her drawing is the same [as|from,than] mine.",""],["The concert wasn't as [exciting|excited,more exciting] as we expected.",""],["Water puppetry [is|are,am] a traditional art form in Viet Nam.",""],["Nam plays the guitar [as well as|as good as,as better as] his brother.","🎸"],["[Did|Were,Do] you go to the concert last night?",""],["Van Cao [composed|composes,compose] the national anthem Tien Quan Ca.",""],["The music today is not [the same as|same as,the same like] the music in the past.",""],["My brother is a good [musician|music,musical].","🎸"],["I'm not as [good|well,better] at painting as my sister.","🖌️"]],
q: [{q:"Do you like country music?",p:"",a:"No, I don't. I prefer classical music.",x:["No, I'm not.","Yes, I am.","It's very old."]},
{q:"What's your favourite kind of music?",p:"",a:"I like folk music.",x:["I play the piano.","Yes, I do.","At the concert hall."]},
{q:"Is your painting the same as mine?",p:"🖼️",a:"No, it's different from yours.",x:["No, it's different as yours.","Yes, I am.","It's my painting."]},
{q:"Where can we see a water puppet show?",p:"",a:"At the Thang Long Water Puppet Theatre.",x:["Last Sunday.","Because it's interesting.","With my parents."]},
{q:"When did you go to the art exhibition?",p:"",a:"Last weekend.",x:["At the museum.","With my class.","Yes, I did."]}],
o: ["Her painting is as beautiful as yours.","This song is different from that one.","Water puppetry is a traditional art form.","My brother can play the guitar.","I like folk music very much."],
t: [["Tien Quan Ca is the national [anthem] of Viet Nam.",""],["Use a [paintbrush] to paint.","🖌️"],["My drawing is the same [as] yours.",""],["She plays the [piano]. It has black and white keys.","🎹"],["We watched a water puppet [show] at the theatre.",""]]
},
"g7|Global Success 7|5": {
title: "Food and drink",
games: [
{ n: 1, skin: "fish", name: "Câu cá từ vựng (dễ)", plan: [[25, 1], [25, 2]] },
{ n: 2, skin: "tug", name: "Kéo co tri thức (vừa)", plan: [[10, 1], [15, 2], [15, 3], [10, 4]] },
{ n: 3, skin: "boss", name: "Đấu trùm Vương quốc kẹo (khó)", plan: [[10, 2], [10, 3], [15, 4], [15, 5]] }],
grp: {"beef noodle soup":"di","eel soup":"di","fried tofu":"di","omelette":"di","pancake":"di","spring roll":"di","toast":"di","roast chicken":"di","rice":"di","apple pie":"di",
"green tea":"dr","juice":"dr","lemonade":"dr","mineral water":"dr","milk":"dr",
"apple":"in","beef":"in","butter":"in","chicken":"in","egg":"in","fish":"in","fish sauce":"in","flour":"in","onion":"in","pepper":"in","salt":"in","shrimp":"in","sugar":"in","tomato":"in","pork":"in",
"gram":"me","kilo":"me","litre":"me","teaspoon":"me","tablespoon":"me","bowl":"me","slice":"me",
"boil":"x","taste":"x","recipe":"x","broth":"x","boneless":"x","mealtime":"x"},
w: [["beef noodle soup","phở bò","🍜"],["omelette","trứng tráng","🍳"],["pancake","bánh kếp","🥞"],["roast chicken","gà quay","🍗"],["rice","cơm","🍚"],["apple pie","bánh táo","🥧"],["eel soup","súp lươn","","nopic"],["fried tofu","đậu phụ rán","","nopic"],["spring roll","chả giò, nem rán","","nopic"],["toast","bánh mì nướng","","nopic"],
["green tea","trà xanh","🍵"],["juice","nước ép","🧃"],["milk","sữa","🥛"],["lemonade","nước chanh","","nopic"],["mineral water","nước khoáng","","nopic"],
["apple","quả táo","🍎"],["beef","thịt bò","","nopic"],["butter","bơ","🧈"],["egg","quả trứng","🥚"],["fish","cá","🐟"],["onion","hành tây","🧅"],["salt","muối","🧂"],["shrimp","tôm","🦐"],["tomato","cà chua","🍅"],["chicken","thịt gà","","nopic"],["fish sauce","nước mắm","","nopic"],["flour","bột mì","","nopic"],["pepper","hạt tiêu","","nopic"],["sugar","đường","","nopic"],["pork","thịt lợn","","nopic"],
["bowl","cái bát","🥣"],["gram","gam","","nopic"],["kilo","ki-lô-gam","","nopic"],["litre","lít","","nopic"],["teaspoon","thìa cà phê","","nopic"],["tablespoon","thìa canh","","nopic"],["slice","lát mỏng","","nopic"],
["boil","đun sôi","","nopic"],["taste","hương vị; nếm","","nopic"],["recipe","công thức nấu ăn","","nopic"],["broth","nước dùng","","nopic"],["boneless","không xương","","nopic"],["mealtime","giờ ăn","","nopic"]],
r: [["piano","🎹"],["guitar","🎸"],["camera","📷"],["paintbrush","🖌️"],["bike","🚲"],["book","📖"],["horse","🐴"],["stamp","📮"]],
s: [["Sea water has a lot of [salt] in it.","🧂"],["An [onion] can make you cry when you cut it.","🧅"],["When you cook [shrimp], they turn pink.","🦐"],["In English, \"nước mắm\" is [fish sauce].",""],
["My favourite hot drink made from leaves is [green tea].","🍵"],["A drink made from lemons, water and sugar is called [lemonade].",""],
["Pho, or [beef noodle soup], is a famous Vietnamese dish.","🍜"],["We make [apple pie] with apples, butter and flour.","🥧"],
["A [litre] of water weighs about one kilo.",""],["There are 1,000 grams in a [kilo].",""]],
g: [["How [much|many,lot] flour do we need?",""],["How [many|much,lot] eggs do you want?","🥚"],["We need [some|a,an] fish sauce.",""],["There are [lots of|much,a] tomatoes in the fridge.","🍅"],["There isn't [much|many,a] milk left.","🥛"],["I eat [an|a,some] apple every day.","🍎"],["Put [two|a,an] teaspoons of sugar in the tea.",""],["How much [is|are,am] a bowl of beef noodle soup?","🍜"],["My mother [often cooks|cooks often,often cook] spring rolls at the weekend.",""],["Would you like [some|many,a] green tea? – Yes, please.","🍵"]],
q: [{q:"How much beef do we need?",p:"🥩",a:"We need 300 grams.",x:["We need three.","Yes, we do.","It's in the fridge."]},
{q:"How many eggs are there in the fridge?",p:"🥚",a:"There are six.",x:["There is a lot of milk.","Yes, there are.","They're 20,000 dong."]},
{q:"What's your favourite food?",p:"",a:"I love spring rolls.",x:["Yes, I like it.","I'm hungry.","At 7 o'clock."]},
{q:"Would you like some juice?",p:"🧃",a:"Yes, please.",x:["Yes, I would like.","No, I don't.","It's juice."]},
{q:"How do you make an omelette?",p:"🍳",a:"First, beat some eggs.",x:["It's delicious.","I make it every day.","With my mother."]}],
o: ["How much flour do we need?","There are lots of eggs in the fridge.","We need some fish sauce.","My favourite drink is green tea.","Beef noodle soup is delicious."],
t: [["Pho is a Vietnamese beef noodle [soup].","🍜"],["Cows give us [milk].","🥛"],["An [onion] can make you cry when you cut it.","🧅"],["How [much] sugar do you want?",""],["Would you like a glass of orange [juice]?","🧃"]]
}
};
/* ---------- danh sách game mỗi unit ---------- */
var SKINS = {
fish:   { name: "Câu cá chọn tranh", ic: "🎣" },
monster:{ name: "Bắn quái vật", ic: "👾" },
path:   { name: "Phiêu lưu đảo khủng long", ic: "🗺️" },
tug:    { name: "Kéo co tri thức", ic: "🪢" },
boss:   { name: "Đấu trùm Vương quốc kẹo", ic: "🍭" },
build:  { name: "Xây chữ", ic: "🧱" }
};
function gamesFor(key) {
var S = SPEC[key]; if (!S) return [];
if (S.games) return S.games;
if (S.kinder) return [
{ n: 1, skin: "fish",    name: "Câu cá chữ D",            letters: "d",   plan: [[20, 1]] },
{ n: 2, skin: "build",   name: "Xây chữ D – nâng cao",    letters: "d",   plan: [[6, 1], [14, 2]] },
{ n: 3, skin: "monster", name: "Bắn quái vật chữ E",      letters: "e",   plan: [[20, 1]] },
{ n: 4, skin: "path",    name: "Phiêu lưu chữ D và E",    letters: "de",  plan: [[20, 1], [10, 2]] },
{ n: 5, skin: "fish",    name: "Câu cá chữ F",            letters: "f",   plan: [[20, 1]] },
{ n: 6, skin: "boss",    name: "Đấu trùm chữ D, E, F",    letters: "def", plan: [[20, 1], [20, 2]] }
];
return [
{ n: 1, skin: "fish",    name: "Câu cá từ vựng",          plan: [[20, 1]] },
{ n: 2, skin: "monster", name: "Bắn quái vật",            plan: [[8, 1], [12, 2]] },
{ n: 3, skin: "path",    name: "Phiêu lưu đảo khủng long",plan: [[8, 1], [12, 2], [10, 3]] },
{ n: 4, skin: "tug",     name: "Kéo co tri thức",         plan: [[8, 1], [10, 2], [12, 3], [10, 4]] },
{ n: 5, skin: "boss",    name: "Đấu trùm Vương quốc kẹo", plan: [[8, 1], [10, 2], [10, 3], [12, 4], [10, 5]] }
];
}
/* ---------- tiện ích ---------- */
function rng(seed) { var a = 0; for (var i = 0; i < seed.length; i++) a = (Math.imul(a ^ seed.charCodeAt(i), 2654435761) >>> 0); a = a || 1;
return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function shuffle(a, R) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(R() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function pick(a, n, R) { return shuffle(a, R).slice(0, n); }
function uniq(a) { var s = {}, o = []; a.forEach(function (x) { var k = typeof x === "string" ? x : JSON.stringify(x); if (!s[k]) { s[k] = 1; o.push(x); } }); return o; }
function blank(t) { return t.replace(/\[([^\]]+)\]/, "____"); }
function fill(t) { return t.replace(/\[([^\]|]+)(\|[^\]]*)?\]/, "$1"); }
function inside(t) { var m = t.match(/\[([^\]]+)\]/); return m ? m[1] : ""; }
/* 4 phương án: đúng + nhiễu, xáo trộn */
function choice(R, correct, wrongs, key) {
wrongs = uniq(wrongs.filter(function (w) { return (key ? key(w) : w) !== (key ? key(correct) : correct); }));
var opts = shuffle([correct].concat(pick(wrongs, 3, R)), R);
return { opts: opts, ans: opts.indexOf(correct) };
}
var VOW = "aeiou";
var BADW = /(dick|fuck|shit|piss|cock|cunt|damn|ass|tit|sex|fag|crap|porn|nig|die|kill|gun)/;
function misspell(w, R) {
var out = [], letters = w.split(""), i;
for (i = 1; i < w.length - 1; i++) if (w[i] !== w[i + 1] && w[i + 1] !== " " && w[i] !== " ") { var a = letters.slice(); var t = a[i]; a[i] = a[i + 1]; a[i + 1] = t; out.push(a.join("")); }
for (i = 1; i < w.length; i++) if (w[i] !== " ") out.push(w.slice(0, i) + w.slice(i + 1));
for (i = 0; i < w.length; i++) if (VOW.indexOf(w[i]) >= 0) { var v = VOW.replace(w[i], ""); out.push(w.slice(0, i) + v[Math.floor(R() * 4)] + w.slice(i + 1)); }
for (i = 1; i < w.length; i++) if (w[i] !== " " && VOW.indexOf(w[i]) < 0) out.push(w.slice(0, i) + w[i] + w.slice(i));
return uniq(out).filter(function (x) { return x !== w && !BADW.test(x); });
}
var CONS = "bcdfghklmnprstvwz".split("");
/* ---------- sinh câu hỏi theo cấp độ ----------
Mỗi câu: {k:kiểu, lv, p:hình gợi ý, q:câu hỏi (chữ), say:đọc, opts:[...], ans, optPic:true nếu phương án là hình,
tiles:[...], target:"...", accept:[...]} */
var REAL = {}; /* từ tiếng Anh có thật – không dùng làm phương án sai */
("chaps chops chap chop fist fig fin fish dish wish mill mile milk silk chick check chin chip ship shop sip lip hip " +
"dig dug dog dot log fog hog bog jog cog doll dull dell duck deck dock luck buck tuck suck desk disk dusk egg ego " +
"fan fun fin fen farm firm form fork pork cork fish quiz quit squire sware swear swore scare share spare cook cock " +
"swim slim skim swam swum wing sing ring king song sung cooking looking booking riding hiding siding driving " +
"diving sliding singing dancing drawing running walking painting swimming talking waking ruining reporter writer " +
"waiter garden gardener fighter teacher reacher stories stores story store grow glow flowers flower news new " +
"chicken kitchen chickens milk mink mike fishes pizza question squares quizzes envelope elephant elbow elbows " +
"drawling dawning darning drowning dining dinning spinning sinning panting pointing signing sim coo waling walkin wrier dick deck dock dack oed re penn pencel lx px bax ton tow bx far cleon eeg gar haar had han moth sh curl finny letter par war carly dar heir mar pouter fac lar car bar clan eater liter var ar boo gil got hose ian ja jim meths oaths rule uam at eam fenny gat mats va aam drew moths daw jell alice bee bol dy eave eg eide flor fluor four tempe aide dr sal ample both floor sat angle bow popper ied redd rd pe bel rx fam fo o bo gm cit tee eight loft let pin pan pun bill ball bull rod rid fix fax ax ex firm form fax").split(" ").forEach(function (w) { REAL[w] = 1; });
function pools(key, letters) {
var S = SPEC[key], R = rng(key + "|pool|" + (letters || "")), P = { 1: [], 2: [], 3: [], 4: [], 5: [] };
var grp = function (w) { return (S.grp && S.grp[w]) || "a"; };
var W = S.w.filter(function (w) { return !letters || letters.indexOf(w[3]) >= 0; });
var picOf = {}; S.w.forEach(function (w) { picOf[w[0]] = w[2]; }); S.r.forEach(function (r) { picOf[r[0]] = r[1]; });
/* phương án nhiễu: từ cùng nhóm trong unit + từ ôn tập; bỏ từ chứa nhau (fish / fish and chips) */
var clash = function (a, b) { return a === b || a.indexOf(b) >= 0 || b.indexOf(a) >= 0; };
var wordsFor = function (word) { return S.w.filter(function (x) { return grp(x[0]) === grp(word); }).map(function (x) { return x[0]; }).concat(S.r.map(function (r) { return r[0]; }))
.filter(function (x) { return !clash(x, word) && !(picOf[x] && picOf[word] && clash(picOf[x], picOf[word])); }); };
var picsFor = function (word) { return wordsFor(word).map(function (x) { return picOf[x]; }).filter(function (p) { return !!p; }); };
var single = W.filter(function (w) { return w[0].indexOf(" ") < 0 && w[4] !== "abbr"; });
var vowels = "aeiou".split("");
W.forEach(function (w) {
var word = w[0], pic = w[2], c;
if (!S.kinder && w[3] === "nopic") { /* từ khó vẽ (tính từ chỉ tính cách…): chỉ hỏi bằng nghe và nghĩa, không hỏi bằng tranh */
c = choice(R, word, wordsFor(word));
P[1].push({ k: "l2w", lv: 1, p: "", q: "Listen and choose.", say: word, opts: c.opts, ans: c.ans, word: word, listen: true });
var ms0 = S.w.filter(function (x) { return x[0] !== word && grp(x[0]) === grp(word) && !clash(x[1], w[1]); }).map(function (x) { return x[1]; });
if (ms0.length >= 2) { c = choice(R, w[1], ms0); P[1].push({ k: "mean", lv: 1, p: "", q: "What does “" + word + "” mean?", say: word, opts: c.opts, ans: c.ans, word: word }); }
c = choice(R, word, wordsFor(word));
P[2].push({ k: "vm", lv: 2, p: "", q: "Which word means “" + w[1] + "”?", say: "", opts: c.opts, ans: c.ans, word: word });
return;
}
c = choice(R, word, wordsFor(word));
if (!S.kinder) P[1].push({ k: "p2w", lv: 1, p: pic, q: "What is it?", say: "", opts: c.opts, ans: c.ans, word: word });
c = choice(R, pic, picsFor(word));
P[1].push({ k: "w2p", lv: 1, p: "", q: word, say: word, opts: c.opts, ans: c.ans, optPic: true, word: word });
c = choice(R, pic, picsFor(word));
P[1].push({ k: "l2p", lv: 1, p: "", q: "Listen and choose.", say: word, opts: c.opts, ans: c.ans, optPic: true, word: word, listen: true });
var other = pick(wordsFor(word), 1, R)[0];
P[1].push({ k: "yn", lv: 1, p: pic, q: word, say: word, opts: ["Yes ✔", "No ✘"], ans: 0, word: word });
P[1].push({ k: "yn", lv: 1, p: picOf[other], q: word, say: word, opts: ["Yes ✔", "No ✘"], ans: 1, word: word });
c = choice(R, word, wordsFor(word));
P[2].push({ k: "l2w", lv: 2, p: "", q: "Listen and choose.", say: word, opts: c.opts, ans: c.ans, word: word, listen: true });
if (!S.young) {
var ms = S.w.filter(function (x) { return x[0] !== word && grp(x[0]) === grp(word) && !clash(x[1], w[1]); }).map(function (x) { return x[1]; });
if (ms.length >= 2) { c = choice(R, w[1], ms); P[2].push({ k: "mean", lv: 2, p: "", q: "What does “" + word + "” mean?", say: word, opts: c.opts, ans: c.ans, word: word }); }
c = choice(R, word, wordsFor(word));
P[2].push({ k: "vm", lv: 2, p: "", q: "Which word means “" + w[1] + "”?", say: "", opts: c.opts, ans: c.ans, word: word });
}
if (W.length < 5) pick(wordsFor(word).filter(function (x) { return x !== other; }), 2, R).forEach(function (o2) {
P[1].push({ k: "yn", lv: 1, p: picOf[o2], q: word, say: word, opts: ["Yes ✔", "No ✘"], ans: 1, word: word });
});
});
/* chữ cái đầu còn thiếu: phương án sai luôn tạo ra "từ" không có thật */
single.forEach(function (w) {
var word = w[0], first = word[0], isV = vowels.indexOf(first.toLowerCase()) >= 0;
var pool = (isV ? CONS : vowels).filter(function (x) { return x !== first && !REAL[x + word.slice(1)]; });
var up = first !== first.toLowerCase(); if (up) { pool = pool.map(function (x) { return x.toUpperCase(); }); }
var opts = shuffle([first].concat(pick(pool, 3, R)), R);
P[2].push({ k: "first", lv: 2, p: w[2], q: "_" + word.slice(1), say: word, opts: opts, ans: opts.indexOf(first), word: word });
});
if (S.kinder) {
W.forEach(function (w) {
var first = w[3], opts = shuffle([first].concat(pick(CONS.filter(function (x) { return x !== first; }), 3, R)), R);
P[1].push({ k: "letter", lv: 1, p: w[2], q: "First letter?", say: w[0], opts: opts, ans: opts.indexOf(first), word: w[0] });
if (w[4] === "nostart") return;
var nonPics = S.r.map(function (r) { return r[1]; }).concat(S.w.filter(function (x) { return x[3] !== w[3]; }).map(function (x) { return x[2]; }));
var c = choice(R, w[2], nonPics);
P[1].push({ k: "start", lv: 1, p: "", q: w[3].toUpperCase() + " " + w[3], say: w[0], opts: c.opts, ans: c.ans, optPic: true, word: w[0] });
});
if (letters && letters.length > 1) W.forEach(function (w) {
var ls = letters.split("");
P[2].push({ k: "sort", lv: 2, p: w[2], q: w[0], say: w[0], opts: ls.map(function (l) { return l.toUpperCase() + " " + l; }), ans: ls.indexOf(w[3]), word: w[0] });
});
(letters || "").split("").forEach(function (l) {
var wr = pick("bcdfghjklmnpqrstuvwxyz".split("").filter(function (x) { return x !== l; }), 3, R);
var o1 = shuffle([l].concat(wr), R), o2 = shuffle([l.toUpperCase()].concat(wr.map(function (x) { return x.toUpperCase(); })), R);
P[2].push({ k: "case", lv: 2, p: "", q: l.toUpperCase() + " → ?", say: l, opts: o1, ans: o1.indexOf(l), word: "case-" + l + "1" });
P[2].push({ k: "case", lv: 2, p: "", q: l + " → ?", say: l, opts: o2, ans: o2.indexOf(l.toUpperCase()), word: "case-" + l + "2" });
});
}
/* chọn từ viết đúng (phương án sai không phải từ có thật) */
single.forEach(function (w) {
var word = w[0], bad = misspell(word, R).filter(function (x) { return !REAL[x] && !picOf[x]; });
if (bad.length < 3) return;
var c = choice(R, word, bad), lv = S.kinder ? 2 : 3;
P[lv].push({ k: "spell", lv: lv, p: w[2], q: "Which is right?", say: word, opts: c.opts, ans: c.ans, word: word });
});
/* điền từ vào câu (có tranh gợi ý, phương án cùng nhóm) */
S.s.forEach(function (s) {
var ans = inside(s[0]), same = S.w.filter(function (x) { return grp(x[0]) === grp(ans) && !clash(x[0], ans); }).map(function (x) { return x[0]; });
var c = choice(R, ans, same);
P[3].push({ k: "sfill", lv: 3, p: s[1], q: blank(s[0]), say: fill(s[0]), opts: c.opts, ans: c.ans, word: ans });
});
/* thiếu hai chữ cái liền nhau */
single.filter(function (w) { return w[0].length >= 5; }).forEach(function (w) {
var word = w[0], i = 1 + Math.floor(R() * (word.length - 3)), part = word.substr(i, 2);
var wrong = ["ae", "oi", "ue", "ia", "ou", "ea", "rl", "ln", "rt", "sk", "mp", "ng"].filter(function (x) { return x !== part && !REAL[word.slice(0, i) + x + word.slice(i + 2)]; });
var c = choice(R, part, wrong), lv = S.kinder ? 2 : 3;
P[lv].push({ k: "miss", lv: lv, p: w[2], q: word.slice(0, i) + "__" + word.slice(i + 2), say: word, opts: c.opts, ans: c.ans, word: word });
});
S.g.forEach(function (g) {
var m = g[0].match(/\[([^\]|]+)\|([^\]]+)\]/), ok = m[1], opts = shuffle([ok].concat(m[2].split(",")), R);
P[4].push({ k: "gram", lv: 4, p: g[1], q: g[0].replace(m[0], "____"), say: g[0].replace(m[0], ok), opts: opts, ans: opts.indexOf(ok), word: g[0] });
});
S.q.forEach(function (q) {
var opts = shuffle([q.a].concat(q.x), R);
P[4].push({ k: "qa", lv: 4, p: q.p, q: q.q, say: q.q, opts: opts, ans: opts.indexOf(q.a), word: q.q + q.a });
});
single.filter(function (w) { return w[0].length <= 9; }).forEach(function (w) {
var t, n = 0; do { t = shuffle(w[0].split(""), R); } while ((t.join("") === w[0] || BADW.test(t.join(""))) && ++n < 30);
var lv = S.kinder ? 2 : 4;
P[lv].push({ k: "tiles", lv: lv, p: w[2], q: "Make the word.", say: w[0], tiles: t, target: w[0], word: w[0] });
});
S.o.forEach(function (o) {
var end = o.slice(-1), toks = o.slice(0, -1).split(" "), t, n = 0;
do { t = shuffle(toks, R); } while (t.join(" ") === toks.join(" ") && ++n < 20);
P[5].push({ k: "order", lv: 5, p: "", q: "Put the words in order.", say: o, tiles: t, target: toks.join(" "), end: end, word: o });
});
S.t.forEach(function (t) {
var ans = inside(t[0]);
P[5].push({ k: "type", lv: 5, p: t[1], q: blank(t[0]), say: fill(t[0]), target: ans, word: "type-" + t[0] });
});
/* gõ từ theo tranh (khó nhất cho khối lớn) */
if (!S.kinder) single.forEach(function (w) { if (w[3] === "nopic") return; P[5].push({ k: "type", lv: 5, p: w[2], q: "Write the word.", say: w[0], target: w[0], word: "typew-" + w[0] }); });
/* lệnh ngắn (hiện chữ) + câu đọc to (khối nhỏ tự đọc) */
var INS = { p2w: ["What is it?", "What is it?"], w2p: ["Find it!", "Choose the picture."], l2p: ["Listen. Find it!", "Listen and choose the picture."],
yn: ["Yes or no?", "Yes or no?"], l2w: ["Listen. Choose!", "Listen and choose the word."], mean: ["", "Choose the meaning."], vm: ["", "Choose the English word."],
first: ["Which letter?", "Which letter is missing?"], letter: ["First letter?", "What is the first letter?"], start: ["Find it!", "Which picture starts with this letter?"],
sort: ["Which letter?", "Which letter does it start with?"], "case": ["Find it!", "Find the letter."], spell: ["Which is right?", "Which word is spelt correctly?"],
sfill: ["Choose!", "Complete the sentence."], miss: ["Which letters?", "Which letters are missing?"], gram: ["Choose!", "Choose the correct word."],
qa: ["Choose!", "Choose the best answer."], tiles: ["Make the word!", "Put the letters in order."], order: ["Make the sentence!", "Put the words in order."], type: ["Write it!", "Write the missing word."] };
[1, 2, 3, 4, 5].forEach(function (lv) { P[lv].forEach(function (q) {
var ins = INS[q.k] || ["", ""]; q.ins = S.young ? ins[0] : ins[1]; q.young = !!S.young;
var w = q.say || "";
if (q.k === "p2w") q.ask = "What is it?";
else if (q.k === "yn") q.ask = w + ". Yes or no?";
else if (q.k === "first" || q.k === "letter") q.ask = w + ". Which letter?";
else if (q.k === "start") q.ask = "Which one starts with " + q.q.split(" ")[0] + "?";
else if (q.k === "sort") q.ask = w + ". Which letter?";
else if (q.k === "case") q.ask = /1$/.test(q.word) ? "Find small " + q.say + "." : "Find big " + q.say.toUpperCase() + ".";
else if (q.k === "tiles") q.ask = "Make the word: " + w + ".";
else if (q.k === "order") q.ask = "Make the sentence.";
else q.ask = w;
if (["What is it?", "Listen and choose.", "First letter?", "Make the word.", "Which is right?", "Put the words in order.", "Write the word."].indexOf(q.q) >= 0 && q.ins) q.q = q.ins;
}); });
return P;
}
/* plan: [[số câu, cấp độ], ...] – dễ trước, khó sau; hạn chế lặp lại cùng một từ liền nhau */
function build(key, game) {
var P = pools(key, game.letters), out = [];
game.plan.forEach(function (pl) {
var n = pl[0], lv = pl[1], pool = P[lv], d = lv;
while (!pool.length && --d >= 1) pool = P[d];
var list = [], round = 0;
while (list.length < n && pool.length) {
var sh = shuffle(pool, rng(key + "|" + game.n + "|" + lv + "|" + round++));
for (var i = 0; i < sh.length && list.length < n; i++) list.push(sh[i]);
}
for (var j = 1; j < list.length; j++) if (list[j].word === list[j - 1].word) {
for (var k = j + 1; k < list.length; k++) if (list[k].word !== list[j - 1].word && (!list[k + 1] || list[k + 1].word !== list[j].word)) { var t = list[j]; list[j] = list[k]; list[k] = t; break; }
}
out = out.concat(list);
});
return out.map(function (q, i) { var c = JSON.parse(JSON.stringify(q)); c.i = i; return c; });
}
var API = { SPEC: SPEC, SKINS: SKINS, gamesFor: gamesFor, build: build, pools: pools };
if (typeof module !== "undefined" && module.exports) module.exports = API; else root.HKGS = API;
})(this);
