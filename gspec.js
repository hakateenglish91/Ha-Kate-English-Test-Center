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
"drawling dawning darning drowning dining dinning spinning sinning panting pointing signing sim coo waling walkin wrier dick deck dock dack oed re penn pencel lx px bax ton tow bx far ied redd rd pe bel rx fam fo o bo gm cit tee eight loft let pin pan pun bill ball bull rod rid fix fax ax ex firm form fax").split(" ").forEach(function (w) { REAL[w] = 1; });
function pools(key, letters) {
var S = SPEC[key], R = rng(key + "|pool|" + (letters || "")), P = { 1: [], 2: [], 3: [], 4: [], 5: [] };
var grp = function (w) { return (S.grp && S.grp[w]) || "a"; };
var W = S.w.filter(function (w) { return !letters || letters.indexOf(w[3]) >= 0; });
var picOf = {}; S.w.forEach(function (w) { picOf[w[0]] = w[2]; }); S.r.forEach(function (r) { picOf[r[0]] = r[1]; });
/* phương án nhiễu: từ cùng nhóm trong unit + từ ôn tập; bỏ từ chứa nhau (fish / fish and chips) */
var clash = function (a, b) { return a === b || a.indexOf(b) >= 0 || b.indexOf(a) >= 0; };
var wordsFor = function (word) { return S.w.filter(function (x) { return grp(x[0]) === grp(word); }).map(function (x) { return x[0]; }).concat(S.r.map(function (r) { return r[0]; }))
.filter(function (x) { return !clash(x, word) && !clash(picOf[x], picOf[word]); }); };
var picsFor = function (word) { return wordsFor(word).map(function (x) { return picOf[x]; }); };
var single = W.filter(function (w) { return w[0].indexOf(" ") < 0; });
var vowels = "aeiou".split("");
W.forEach(function (w) {
var word = w[0], pic = w[2], c;
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
var word = w[0], first = word[0], isV = vowels.indexOf(first) >= 0;
var pool = (isV ? CONS : vowels).filter(function (x) { return x !== first && !REAL[x + word.slice(1)]; });
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
if (!S.kinder) single.forEach(function (w) { P[5].push({ k: "type", lv: 5, p: w[2], q: "Write the word.", say: w[0], target: w[0], word: "typew-" + w[0] }); });
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
