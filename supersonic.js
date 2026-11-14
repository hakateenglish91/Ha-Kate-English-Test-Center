/* Ha Kate Test Center – Supersonic Spelling Friends (UK phonics, higher levels)
   Thẻ từ + 3 game (dễ → khó) + 1 bài test cho mỗi chủ đề. Nạp sau gspec.js và gui.js. */
(function () {
"use strict";
var BOOK = "Supersonic Spelling Friends";
/* [gốc, từ mới, nghĩa, hình] – phần đầu lấy từ phiếu của trường, phần sau là từ bổ sung khó hơn */
var U = [
{ n: 1, t: "Suffix -ed", s: "-ed", rule: "To change to the past, add -ed.", suf: "ed", kind: "ed",
  w: [["melt","melted","tan chảy","🫠"],["jump","jumped","nhảy","🦘"],["work","worked","làm việc","💼"],["grasp","grasped","nắm chặt","✊"],["wash","washed","rửa","🧼"],["crash","crashed","đâm sầm","💥"],
      ["relax","relaxed","thư giãn","🛋️"],["play","played","chơi","⚽"],["shock","shocked","làm sốc","😱"],["frown","frowned","cau mày","😠"],["shout","shouted","hét to","📢"],["mix","mixed","trộn","🥣"],
      ["land","landed","hạ cánh","🛬"],["quack","quacked","kêu quạc quạc","🦆"],["buzz","buzzed","kêu vo vo","🐝"],["bark","barked","sủa","🐕"],["thrill","thrilled","làm hồi hộp, phấn khích","🤩"],["start","started","bắt đầu","🏁"],
      ["whisper","whispered","thì thầm","🤫"],["splash","splashed","té nước","💦"],["scream","screamed","hét lên","😫"],["crunch","crunched","nhai rôm rốp","🥕"],["squeak","squeaked","kêu chít chít","🐭"],["twist","twisted","vặn, xoắn","🌀"],
      ["sprint","sprinted","chạy nước rút","🏃"],["groan","groaned","rên rỉ","😩"],["scratch","scratched","cào, gãi","🐈"],["explain","explained","giải thích","🧑‍🏫"],
      ["phone","phoned","gọi điện","📞"],["bake","baked","nướng bánh","🧁"],["smile","smiled","mỉm cười","😊"],["dance","danced","nhảy múa","💃"],["hope","hoped","hy vọng","🤞"],["live","lived","sống","🏡"],["surprise","surprised","làm ngạc nhiên","🎁"],["change","changed","thay đổi","🔄"],["arrive","arrived","đến nơi","🚉"],["tie","tied","buộc","🎀"]],
  sen: [["Grandma [phoned] me on my birthday.","📞"],["We [baked] a chocolate cake.","🧁"],["The train [arrived] on time.","🚉"],["Mum [smiled] at the baby.","😊"],["The snowman [melted] in the sun.","⛄"],["The dog [barked] at the postman.","🐕"],["We [played] football after school.","⚽"],["The plane [landed] at the airport.","🛬"],["The duck [quacked] loudly.","🦆"],["Mum [mixed] the eggs and flour.","🥣"],["The bee [buzzed] around the flowers.","🐝"],["The cars [crashed] into each other.","💥"],["She [whispered] a secret to her friend.","🤫"],["The mouse [squeaked] and ran away.","🐭"],["The teacher [explained] the spelling rule.","🧑‍🏫"],["He [splashed] in the puddles.","💦"]] },
{ n: 2, t: "Suffix -ing", s: "-ing", rule: "You don't have to do anything – simply just add -ing.", suf: "ing", kind: "ing",
  w: [["buzz","buzzing","kêu vo vo","🐝"],["jump","jumping","nhảy","🦘"],["hack","hacking","chặt, đốn","🪓"],["huff","huffing","thở phì phò","😤"],["mix","mixing","trộn","🥣"],["yell","yelling","la hét","🗣️"],
      ["quack","quacking","kêu quạc quạc","🦆"],["sing","singing","hát","🎤"],["float","floating","nổi","🛟"],["paint","painting","vẽ, sơn","🎨"],["cook","cooking","nấu ăn","🍳"],["frown","frowning","cau mày","😠"],
      ["blink","blinking","chớp mắt","😉"],["repair","repairing","sửa chữa","🔧"],["think","thinking","suy nghĩ","💭"],["snow","snowing","có tuyết rơi","🌨️"],["growl","growling","gầm gừ","🐻"],["glow","glowing","phát sáng","✨"],
      ["whistle","whistling","huýt sáo","😗"],["splash","splashing","té nước","💦"],["squeak","squeaking","kêu chít chít","🐭"],["crunch","crunching","nhai rôm rốp","🥕"],["scratch","scratching","cào, gãi","🐈"],["dream","dreaming","mơ","😴"],
      ["roast","roasting","nướng","🍗"],["groan","groaning","rên rỉ","😩"],["shout","shouting","hét to","📢"],["sprint","sprinting","chạy nước rút","🏃"],
      ["phone","phoning","gọi điện","📞"],["bake","baking","nướng bánh","🧁"],["smile","smiling","mỉm cười","😊"],["dance","dancing","nhảy múa","💃"],["hope","hoping","hy vọng","🤞"],["change","changing","thay đổi","🔄"],["arrive","arriving","đến nơi","🚉"],["lie","lying","nằm","🛌"],["tie","tying","buộc","🎀"],["fly","flying","bay","🦅"],["cry","crying","khóc","😢"]].filter(function (x) { return x[0] !== "whistle"; }),
  sen: [["The bee is [buzzing] near the window.","🐝"],["Dad is [cooking] pancakes.","🍳"],["It is [snowing] outside!","🌨️"],["The bear is [growling] at the wolf.","🐻"],["Look! The boat is [floating] on the lake.","🛟"],["She is [painting] a rainbow.","🎨"],["The fireflies are [glowing] in the dark.","✨"],["Grandad is [repairing] my bike.","🔧"],["I am [thinking] about my answer.","💭"],["The children are [splashing] in the pool.","💦"],["The cat is [scratching] the sofa.","🐈"],["We are [singing] a song.","🎤"],["Holly and James are [dancing] at the party.","💃"],["The baby is [crying] for milk.","😢"],["Look! The kite is [flying] high.","🪁"],["We are [baking] bread today.","🧁"]] },
{ n: 3, t: "Suffix -er", s: "-er", rule: "Add -er to compare two things (taller), or to make a person who does something (worker).", suf: "er", kind: "er",
  w: [["tall","taller","cao hơn","🦒"],["small","smaller","nhỏ hơn","🐜"],["fast","faster","nhanh hơn","🐆"],["loud","louder","to (tiếng) hơn","📢"],["long","longer","dài hơn","🐍"],["cold","colder","lạnh hơn","🥶"],
      ["dark","darker","tối hơn","🌑"],["bright","brighter","sáng hơn","☀️"],["smooth","smoother","mịn hơn","🧈"],["sharp","sharper","sắc hơn","🔪"],["quick","quicker","nhanh hơn","⚡"],["rich","richer","giàu hơn","💰"],
      ["soft","softer","mềm hơn","🧸"],["neat","neater","gọn gàng hơn","🧹"],["green","greener","xanh hơn","🌿"],["young","younger","trẻ hơn","👶"],["strong","stronger","khỏe hơn","💪"],["thick","thicker","dày hơn","📚"],
      ["deep","deeper","sâu hơn","🌊"],["fresh","fresher","tươi hơn","🍓"],["slow","slower","chậm hơn","🐢"],["kind","kinder","tốt bụng hơn","💗"],["damp","damper","ẩm hơn","💧"],["clean","cleaner","sạch hơn","🫧"],
      ["work","worker","người lao động","👷","agent"],["play","player","người chơi, cầu thủ","⚽","agent"],["dance","dancer","vũ công","💃","agent"],["bake","baker","thợ làm bánh","🧑‍🍳","agent"],["paint","painter","họa sĩ, thợ sơn","🎨","agent"],["sing","singer","ca sĩ","🎤","agent"],["teach","teacher","giáo viên","🧑‍🏫","agent"],["farm","farmer","nông dân","🧑‍🌾","agent"]],
  sen: [["My Dad was the best [dancer] at the disco.","💃"],["My brother is a very hard [worker] at school.","👷"],["We were short of one netball [player] for our team.","🏐"],["The [baker] makes fresh bread every morning.","🧑‍🍳"],["A giraffe is [taller] than a horse.","🦒"],["A cheetah is [faster] than a dog.","🐆"],["A snake is [longer] than a worm.","🐍"],["The sea is [deeper] than a pond.","🌊"],["A tortoise is [slower] than a rabbit.","🐢"],["An ant is [smaller] than a mouse.","🐜"],["Winter is [colder] than summer.","🥶"],["The sun is [brighter] than the moon.","☀️"],["My baby brother is [younger] than me.","👶"],["A teddy is [softer] than a rock.","🧸"],["An elephant is [stronger] than a cat.","🐘"],["A drum is [louder] than a whisper.","🥁"]] },
{ n: 4, t: "Suffix -est", s: "-est", rule: "To make the root word mean the most, simple just add -est.", suf: "est", kind: "est",
  w: [["young","youngest","trẻ nhất","👶"],["cold","coldest","lạnh nhất","🥶"],["long","longest","dài nhất","🐍"],["rich","richest","giàu nhất","💰"],["smart","smartest","thông minh nhất","🎓"],["soft","softest","mềm nhất","🧸"],
      ["sharp","sharpest","sắc nhất","🔪"],["small","smallest","nhỏ nhất","🐜"],["bright","brightest","sáng nhất","☀️"],["tall","tallest","cao nhất","🦒"],["quick","quickest","nhanh nhất","⚡"],["loud","loudest","to (tiếng) nhất","📢"],
      ["green","greenest","xanh nhất","🌿"],["dark","darkest","tối nhất","🌑"],["dull","dullest","buồn tẻ / xỉn màu nhất","🌫️"],["neat","neatest","gọn gàng nhất","🧹"],["smooth","smoothest","mịn nhất","🧈"],["damp","dampest","ẩm nhất","💧"],
      ["strong","strongest","khỏe nhất","💪"],["deep","deepest","sâu nhất","🌊"],["fresh","freshest","tươi nhất","🍓"],["thick","thickest","dày nhất","📚"],["kind","kindest","tốt bụng nhất","💗"],["clean","cleanest","sạch nhất","🫧"]],
  sen: [["The blue whale is the [longest] animal in the sea.","🐋"],["The giraffe is the [tallest] animal in the zoo.","🦒"],["The baby is the [youngest] in the family.","👶"],["Winter is the [coldest] season.","🥶"],["The sun is the [brightest] star in our sky.","☀️"],["The ant is the [smallest] bug in the picture.","🐜"],["The lion has the [loudest] roar.","🦁"],["Midnight is the [darkest] time of night.","🌑"],["The teddy is the [softest] toy I have.","🧸"],["This knife is the [sharpest] in the kitchen.","🔪"],["The king is the [richest] man in the land.","👑"],["The Pacific is the [deepest] ocean.","🌊"]] },
{ n: 5, t: "Plurals: s, es, ies, ves", s: "s · es · ies · ves · irregular", rule: "Add -s. Fizzy words (s, ss, x, z, zz, sh, ch) add -es. Consonant + y → ies. f / fe → ves. Some plurals are irregular.", kind: "pl",
  w: [["dog","dogs","những con chó","🐶"],["cat","cats","những con mèo","🐱"],["rock","rocks","những hòn đá","🪨"],["chair","chairs","những cái ghế","🪑"],["frog","frogs","những con ếch","🐸"],["bee","bees","những con ong","🐝"],
      ["eye","eyes","đôi mắt","👀"],["tree","trees","những cái cây","🌳"],["snake","snakes","những con rắn","🐍"],["present","presents","những món quà","🎁"],["bear","bears","những con gấu","🐻"],["dream","dreams","những giấc mơ","💭"],
      ["dish","dishes","những cái đĩa","🍽️"],["glass","glasses","những cái cốc thủy tinh","🥛"],["stitch","stitches","những mũi khâu","🧵"],["lunch","lunches","những bữa trưa","🍱"],["kiss","kisses","những nụ hôn","😘"],["fox","foxes","những con cáo","🦊"],
      ["bench","benches","những ghế dài","🪵"],["watch","watches","những đồng hồ đeo tay","⌚"],["box","boxes","những cái hộp","📦"],["match","matches","những que diêm","🔥"],["buzz","buzzes","những tiếng vo vo","🔊"],["wish","wishes","những điều ước","🌠"],
      ["church","churches","những nhà thờ","⛪"],["torch","torches","những đèn pin","🔦"],["bunch","bunches","những bó (hoa)","💐"],["sandwich","sandwiches","những cái bánh kẹp","🥪"],["beach","beaches","những bãi biển","🏖️"],["quiz","quizzes","những bài đố","❓"],["peach","peaches","những quả đào","🍑"],["flash","flashes","những tia chớp","⚡"],["waltz","waltzes","những điệu van","💃"],["tax","taxes","những khoản thuế","🧾"],["crash","crashes","những vụ va chạm","💥"],
      ["baby","babies","những em bé","👶"],["city","cities","những thành phố","🏙️"],["berry","berries","những quả mọng","🫐"],["fly","flies","những con ruồi","🪰"],["story","stories","những câu chuyện","📖"],["party","parties","những bữa tiệc","🎉"],
      ["leaf","leaves","những chiếc lá","🍂"],["wolf","wolves","những con sói","🐺"],["knife","knives","những con dao","🔪"],["loaf","loaves","những ổ bánh mì","🍞"],["shelf","shelves","những cái kệ","📚"],["half","halves","những nửa","🌗"],
      ["child","children","những đứa trẻ","🧒"],["mouse","mice","những con chuột","🐭"],["tooth","teeth","những cái răng","🦷"],["foot","feet","đôi bàn chân","🦶"],["man","men","những người đàn ông","👨"],["woman","women","những người phụ nữ","👩"],["goose","geese","những con ngỗng","🪿"],["person","people","mọi người","🧑‍🤝‍🧑"],["sheep","sheep","những con cừu","🐑"]],
  irr: { child: ["childs","childrens","childes"], mouse: ["mouses","mices","mousies"], tooth: ["tooths","teeths","toothes"], foot: ["foots","feets","footes"], man: ["mans","mens","manes"], woman: ["womans","womens","womanes"], goose: ["gooses","geeses","goosies"], person: ["persones","peoples","persons"], sheep: ["sheeps","sheepes","shoop"] },
  sen: [["I can see three [foxes] in the wood.","🦊"],["There are two [babies] in the pram.","👶"],["The [leaves] fall in autumn.","🍂"],["We ate our [sandwiches] at the beach.","🥪"],["The dentist checked my [teeth].","🦷"],["Five [wolves] howled at the moon.","🐺"],["The [children] played in the park.","🧒"],["Mum washed all the [dishes].","🍽️"],["Three [mice] ran under the bed.","🐭"],["We read two [stories] at bedtime.","📖"],["There are lots of [benches] in the park.","🪑"],["The farmer has ten [sheep].","🐑"]] },
{ n: 6, t: "Suffixes -ful and -less", s: "-ful · -less", rule: "Add -ful to mean 'full of'. Add -less to mean 'without'.", kind: "fl",
  w: [["smile","smileless","không cười","😐"],["sleep","sleepless","mất ngủ","🥱"],["love","loveless","không có tình yêu","💔"],["home","homeless","vô gia cư","🏚️"],["cloud","cloudless","không mây","☀️"],["thought","thoughtless","thiếu suy nghĩ","🙈"],
      ["fear","fearless","không sợ hãi","🦸"],["taste","tasteless","nhạt nhẽo","😑"],["sun","sunless","không có nắng","🌥️"],["hair","hairless","không có tóc","👨‍🦲"],["self","selfless","vị tha","🤝"],["joy","joyless","buồn bã, không niềm vui","😞"],
      ["spot","spotless","sạch bong","✨"],["speech","speechless","không nói nên lời","😶"],["odour","odourless","không mùi","👃"],["motion","motionless","bất động","🗿"],["harm","harmless","vô hại","🐛"],["luck","luckless","không may mắn","🍀"],
      ["care","careful","cẩn thận","⚠️"],["help","helpful","hay giúp đỡ","🙋"],["hope","hopeful","đầy hy vọng","🌈"],["play","playful","tinh nghịch","🐶"],["colour","colourful","nhiều màu sắc","🎨"],["pain","painful","đau đớn","🤕"],
      ["thank","thankful","biết ơn","🙏"],["joy","joyful","vui sướng","😄"],["power","powerful","mạnh mẽ","⚡"],["peace","peaceful","yên bình","🕊️"],["use","useful","hữu ích","🧰"],["wonder","wonderful","tuyệt vời","🌟"],
      ["cheer","cheerful","vui vẻ","😊"],["truth","truthful","trung thực","🗣️"],["fear","fearful","sợ hãi","😨"],["harm","harmful","có hại","☠️"],["care","careless","bất cẩn","🙀"],["hope","hopeless","vô vọng","😔"],
      ["mercy","merciful","nhân từ","😇"],["penny","penniless","không một xu dính túi","🪙"],["beauty","beautiful","xinh đẹp","🌸"],["pity","pitiful","đáng thương","🥺"],["plenty","plentiful","dồi dào","🧺"],["force","forceful","mạnh mẽ, quyết liệt","💥"],["thought","thoughtful","chu đáo","💝"]],
  mean: { "careful": "full of care", "careless": "without care", "helpful": "full of help", "hopeful": "full of hope", "hopeless": "without hope", "homeless": "without a home", "fearless": "without fear", "fearful": "full of fear", "harmless": "without harm", "harmful": "full of harm", "cloudless": "without clouds", "sleepless": "without sleep", "painful": "full of pain", "colourful": "full of colour", "joyful": "full of joy", "joyless": "without joy", "speechless": "without speech", "spotless": "without spots", "hairless": "without hair", "powerful": "full of power", "peaceful": "full of peace", "thankful": "full of thanks", "tasteless": "without taste", "odourless": "without odour", "motionless": "without motion", "playful": "full of play", "useful": "full of use", "cheerful": "full of cheer", "truthful": "full of truth", "merciful": "full of mercy", "penniless": "without a penny", "beautiful": "full of beauty", "plentiful": "full of plenty", "thoughtful": "full of thought", "thoughtless": "without thought" },
  sen: [["Be [careful] when you cross the road.","⚠️"],["The sky was blue and [cloudless].","☀️"],["Thank you for being so [helpful].","🙋"],["The [fearless] knight fought the dragon.","🦸"],["The kitten is very [playful].","🐱"],["My new jumper is bright and [colourful].","🎨"],["The ladybird is [harmless].","🐞"],["The cat sat [motionless], watching the bird.","🐈"],["I had a [sleepless] night before my birthday.","🥱"],["Falling off my bike was [painful].","🤕"],["The kitchen was clean and [spotless].","✨"],["The view from the hill was [wonderful].","🌟"],["The injection was [painless].","💉"],["My mum always thinks about other people. She is very [thoughtful].","💝"],["I helped Dad to wash the car. He said I was very [helpful].","🚗"]] },
{ n: 7, t: "Digraphs and diphthongs", s: "ai ay a-e · ee ea · igh ie · oa ow · oo ew ue · ar or ur ir · ow ou · oi oy · air ear ure", kind: "ph",
  /* [từ, nghĩa, hình, âm/chữ, 3 cách viết sai nghe giống] */
  w: [["rain","mưa","🌧️","ai",["rane","rayn","rean"]],["play","chơi","⚽","ay",["plai","plae","pley"]],["snake","con rắn","🐍","a-e",["snaik","snayk","snak"]],["sheep","con cừu","🐑","ee",["sheap","shepe","shiep"]],["beach","bãi biển","🏖️","ea",["beech","beche","biech"]],
      ["night","ban đêm","🌃","igh",["nite","niet","nyte"]],["pie","bánh nướng","🥧","ie",["pigh","pye","piy"]],["boat","con thuyền","⛵","oa",["bote","bowt","boet"]],["snow","tuyết","❄️","ow",["snoa","snoe","sno"]],["bone","xương","🦴","o-e",["boan","bown","bon"]],
      ["moon","mặt trăng","🌙","oo",["mune","mewn","moun"]],["screw","đinh vít","🔩","ew",["scroo","scrue","scrw"]],["blue","màu xanh dương","🔵","ue",["bloo","blu","bloe"]],["star","ngôi sao","⭐","ar",["staar","stur","stor"]],["fork","cái nĩa","🍴","or",["fawk","furk","fourk"]],
      ["burn","đốt cháy","🔥","ur",["bern","birn","burne"]],["bird","con chim","🐦","ir",["burd","berd","bierd"]],["cow","con bò","🐄","ow",["cou","cowe","coe"]],["cloud","đám mây","☁️","ou",["clowd","claud","clood"]],["coin","đồng xu","🪙","oi",["coyn","coen","cion"]],
      ["boy","cậu bé","👦","oy",["boi","boe","bouy"]],["chair","cái ghế","🪑","air",["chare","chear","chaer"]],["hear","nghe","👂","ear",["heer","hiar","hiere"]],["sure","chắc chắn","✅","ure",["shure","shur","suer"]],["shell","vỏ sò","🐚","sh",["chell","shel","sell"]],
      ["chin","cằm","🧔","ch",["shin","tchin","chinn"]],["thumb","ngón cái","👍","th",["fumb","thum","tumb"]],["king","nhà vua","🤴","ng",["kink","kin","kingg"]],["toy","đồ chơi","🧸","oy",["toi","toye","tooy"]],["sauce","nước sốt","🥫","au",["sorce","sawce","soss"]],
      ["claw","móng vuốt","🐾","aw",["clor","clau","claa"]],["cube","khối lập phương","🧊","u-e",["cueb","kewb","cuub"]],["tie","cà vạt","👔","ie",["tigh","tye","tiy"]],["throat","cổ họng","🗣️","oa",["throte","throwt","throt"]],["shirt","áo sơ mi","👔","ir",["shurt","shert","shiet"]],["stair","bậc cầu thang","🪜","air",["stayr","stear","staer"]]],
  sen: [["The [rain] made big puddles.","🌧️"],["The [moon] is shining in the [night] sky.","🌙"],["We built a castle on the [beach].","🏖️"],["The [cow] said moo.","🐄"],["A [bird] is singing in the tree.","🐦"],["I sat on the [chair] at the table.","🪑"],["The dog dug up a [bone].","🦴"],["I found a [shell] on the sand.","🐚"],["The [boat] sailed across the lake.","⛵"],["My favourite colour is [blue].","🔵"]] },
{ n: 8, t: "Difficult sight words", s: "Year 2 common exception words", kind: "sw",
  /* [từ, nghĩa, hình, câu, 3 cách viết sai] */
  w: [["because","bởi vì","❓","I wore a coat [because] it was cold.",["becos","becuase","beacause"]],["beautiful","đẹp","🌸","The garden is [beautiful] in spring.",["butiful","beutiful","beautifull"]],["children","những đứa trẻ","🧒","The [children] played in the snow.",["childrun","chilldren","childern"]],["Christmas","Giáng sinh","🎄","We open presents on [Christmas] Day.",["Crismas","Chrismas","Christmass"]],["clothes","quần áo","👕","Put your [clothes] in the drawer.",["cloathes","cloaths","clothz"]],
      ["could","có thể (quá khứ)","🤔","I [could] see the sea from my window.",["cood","culd","coud"]],["should","nên","☝️","You [should] brush your teeth twice a day.",["shood","shuld","shoud"]],["would","sẽ / muốn","🙂","[Would] you like some juice?",["wud","wuld","woud"]],["people","mọi người","🧑‍🤝‍🧑","Lots of [people] came to the party.",["peple","peeple","poeple"]],["water","nước","💧","Plants need [water] to grow.",["warter","watter","wotter"]],
      ["again","lại, lần nữa","🔁","Can we play that game [again]?",["agen","agian","agane"]],["every","mỗi, mọi","📅","I read a book [every] night.",["evry","evrey","everry"]],["everybody","mọi người","🙌","[Everybody] clapped at the end.",["everbody","evrybody","everybodie"]],["break","nghỉ giải lao","☕","We play outside at [break] time.",["braek","breake","braik"]],["great","tuyệt","👍","We had a [great] day at the zoo.",["grayt","graet","grait"]],
      ["climb","leo, trèo","🧗","Monkeys [climb] trees.",["clime","clim","climbe"]],["parents","bố mẹ","👪","My [parents] took me to the park.",["parints","perents","parrents"]],["improve","cải thiện","📈","Reading every day will [improve] your spelling.",["impruve","improov","imprve"]],["money","tiền","💷","I saved my [money] in a piggy bank.",["muny","mony","monney"]],["whole","toàn bộ","🍕","He ate the [whole] pizza!",["holle","hoal","wole"]],
      ["busy","bận rộn","🏃","Mum is very [busy] today.",["bizzy","bisy","buzy"]],["hour","giờ","⏰","The film lasted one [hour].",["owr","howr","hower"]],["half","một nửa","🌗","I ate [half] of the cake.",["harf","haff","halph"]],["sugar","đường","🍬","Don't put too much [sugar] in your tea.",["shugar","suger","shuger"]],["move","di chuyển","➡️","Please [move] your chair.",["moove","muve","moov"]],
      ["eye","con mắt","👁️","I have something in my [eye].",["ie","eie","eey"]],["pretty","xinh đẹp","🎀","She has a [pretty] dress.",["pritty","prety","pritey"]],["behind","phía sau","🙈","The cat is hiding [behind] the sofa.",["behynd","beehind","bihind"]],["improve","cải thiện","📈","",[]],["wild","hoang dã","🐯","Tigers are [wild] animals.",["wiled","wyld","wilde"]],["poor","nghèo","🥺","The [poor] man had no money.",["pooer","pur","poar"]],["sure","chắc chắn","👌","Are you [sure] it's right?",["shure","shur","suer"]],["steak","miếng thịt bò","🥩","Dad cooked a [steak] for dinner.",["stayk","staek","steik"]]].filter(function (x, i, a) { return x[3]; })
}
];
/* ---------- thẻ từ ---------- */
var cards = [], books = [{ b: BOOK, u: [] }];
U.forEach(function (u) {
  var list;
  if (u.kind === "ph" || u.kind === "sw") list = u.w.map(function (w) { return [BOOK, String(u.n), w[0], w[1] + (u.kind === "ph" ? "  ·  " + w[3] : ""), w[2]]; });
  else list = u.w.map(function (w) { return [BOOK, String(u.n), w[1], w[0] + " + " + (u.kind === "pl" ? "plural" : u.kind === "fl" ? (/ful$/.test(w[1]) ? "ful" : "less") : u.suf) + "  ·  " + w[2], w[3]]; });
  cards = cards.concat(list);
  books[0].u.push({ n: String(u.n), t: u.t, s: u.s, c: list.length });
});
/* ---------- tiện ích ---------- */
function rng(seed) { var a = 0; for (var i = 0; i < seed.length; i++) a = (Math.imul(a ^ seed.charCodeAt(i), 2654435761) >>> 0); a = a || 1;
  return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function shuffle(a, R) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(R() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function uniq(a) { var s = {}; return a.filter(function (x) { if (s[x]) return false; s[x] = 1; return true; }); }
function opts4(R, right, wrong) { wrong = uniq(wrong.filter(function (w) { return w && w !== right; })); var o = shuffle([right].concat(shuffle(wrong, R).slice(0, 3)), R); return { opts: o, ans: o.indexOf(right) }; }
var BAD = /(dick|fuck|shit|piss|cock|cunt|damn|ass|tit|sex|fag|crap|porn|nig|die|kill)/;
var VOW = "aeiou";
function last(w) { return w[w.length - 1]; }
/* cách viết sai hay gặp cho từng loại hậu tố (không trùng từ đúng) */
function wrongForms(u, w) {
  var r = w[0], nw = w[1], L = last(r), out = [];
  if (u.kind === "ed") out = [r + L + "ed", r + "t", r + "d", r + "id", nw.replace(/ed$/, "ted")];
  else if (u.kind === "ing") out = [r + L + "ing", r + "in", r + "eing", r + "ign", r + "ng"];
  else if (u.kind === "er") out = [r + L + "er", r + "ar", r + "or", r + "ur", r + "re"];
  else if (u.kind === "est") out = [r + L + "est", r + "ist", r + "ast", r + "st", r + "esst"];
  else if (u.kind === "pl") {
    if (u.irr[r]) out = u.irr[r].slice();
    else out = [r + "s", r + "es", r.replace(/y$/, "ies"), r.replace(/fe?$/, "ves"), r + "ys", r + "ss", r + "ses", r + "ez"];
  } else if (u.kind === "fl") {
    var suf = /ful$/.test(nw) ? "ful" : "less", base = nw.slice(0, -suf.length);
    out = suf === "ful" ? [base + "full", base.replace(/e$/, "") + "ful", base + "fol", base + "fulle"] : [base + "les", base.replace(/e$/, "") + "less", base + "lis", base + "lesse"];
  }
  if (u.suf) out.push(r + u.suf);
  if (u.kind === "fl") out.push(r + (/ful$/.test(nw) ? "ful" : "less"));
  if (/e$/.test(r) && u.suf) out.push(r + r.slice(-2, -1) + u.suf);
  return out.filter(function (x) { return x !== nw && !BAD.test(x) && ALL[x] !== 1; });
}
var ALL = {}; U.forEach(function (u) { u.w.forEach(function (w) { if (u.kind !== "ph" && u.kind !== "sw") ALL[w[1]] = 1; ALL[w[0]] = 1; }); });
function edSound(r) { var OV = { surprise: "/d/", tie: "/d/" }; if (OV[r]) return OV[r]; r = r.replace(/e$/, ""); var L = last(r); if (/c$/.test(r)) return "/t/"; if (L === "t" || L === "d") return "/id/"; if (/(p|k|ss|s|x|sh|ch|f|ck)$/.test(r)) return "/t/"; return "/d/"; }
/* ---------- ngân hàng câu hỏi theo cấp độ 1–4 ---------- */
function pools(u) {
  var R = rng("ss|" + u.n), P = { 1: [], 2: [], 3: [], 4: [] };
  var add = function (lv, q) { q.lv = lv; q.young = false; q.ask = q.say || ""; P[lv].push(q); };
  var isWord = u.kind === "ph" || u.kind === "sw";
  u.w.forEach(function (w) {
    var word = isWord ? w[0] : w[1], pic = isWord ? w[2] : w[3], c;
    var wr = isWord ? w[4] : wrongForms(u, w);
    if (wr.length < 3) return;
    /* 1. nghe – chọn cách viết đúng */
    c = opts4(R, word, wr);
    add(1, { k: "l2w", p: "", q: "Listen and choose.", ins: "Listen and choose the correct spelling.", say: word, opts: c.opts, ans: c.ans, word: word, listen: true });
    /* 1. nhìn tranh – chọn từ */
    var others = u.w.filter(function (x) { return x !== w; }).map(function (x) { return isWord ? x[0] : x[1]; });
    c = opts4(R, word, others);
    if (/^(ed|ing|pl|ph)$/.test(u.kind)) add(1, { k: "p2w", p: pic, q: isWord ? "What is it?" : "Which word matches the picture?", ins: "Look at the picture and choose the word.", say: "", opts: c.opts, ans: c.ans, word: word });
    if (!isWord) {
      /* 1. gốc + hậu tố = ? */
      var sufTxt = u.kind === "pl" ? "" : (u.kind === "fl" ? (/ful$/.test(w[1]) ? "ful" : "less") : u.suf);
      c = opts4(R, w[1], wr);
      add(1, { k: "sfill", p: pic, q: u.kind === "pl" ? "one " + w[0] + ", two ____" : w[0] + " + " + sufTxt + " = ____", ins: u.kind === "pl" ? "Choose the plural." : "Add the suffix. Choose the new word.", say: "", opts: c.opts, ans: c.ans, word: word });
      /* 2. tìm từ gốc */
      var roots = u.w.filter(function (x) { return x[0] !== w[0]; }).map(function (x) { return x[0]; });
      var tricky = [w[1].slice(0, -1), w[0] + last(w[0]), w[0].slice(0, -1)].filter(function (x) { return x !== w[0] && x.length > 1; });
      c = opts4(R, w[0], tricky.concat(shuffle(roots, R).slice(0, 3)));
      add(2, { k: "root", p: "", q: u.kind === "pl" ? "“" + w[1] + "” – what is the singular (one)?" : "What is the root word of “" + w[1] + "”?", ins: u.kind === "pl" ? "Choose the word for one." : "Find the root word.", say: w[1], opts: c.opts, ans: c.ans, word: word });
    } else {
      /* 2. chữ cái / âm còn thiếu */
      if (u.kind === "ph") {
        var g = w[3].replace("-e", ""), idx = w[0].indexOf(g);
        if (idx >= 0 && g.length < w[0].length) {
          var alts = { ai: ["ay", "a", "ea"], ay: ["ai", "a", "ey"], a: ["ai", "ay", "ea"], ee: ["ea", "ie", "e"], ea: ["ee", "e", "ie"], igh: ["ie", "i", "y"], ie: ["igh", "y", "i"], i: ["igh", "ie", "y"], oa: ["o", "ow", "oe"], ow: ["oa", "ou", "o"], o: ["oa", "ow", "oo"], oo: ["ew", "ue", "ou"], ew: ["oo", "ue", "u"], ue: ["oo", "ew", "u"], ar: ["or", "ur", "er"], or: ["ar", "ur", "aw"], ur: ["ir", "er", "or"], ir: ["ur", "er", "ar"], ou: ["ow", "oo", "u"], oi: ["oy", "o", "io"], oy: ["oi", "o", "ou"], air: ["are", "ear", "ar"], ear: ["eer", "air", "ere"], ure: ["ur", "oor", "ore"], sh: ["ch", "s", "th"], ch: ["sh", "c", "tch"], th: ["f", "t", "sh"], ng: ["nk", "n", "g"], au: ["or", "aw", "ow"], aw: ["or", "au", "ar"], u: ["oo", "ew", "o"] };
          var al = alts[g] || ["ee", "oa", "ar"];
          c = opts4(R, g, al);
          var gap = w[0].slice(0, idx) + "_".repeat(Math.min(2, g.length)) + w[0].slice(idx + g.length);
          add(2, { k: "miss", p: pic, q: gap, ins: "Which letters are missing?", say: w[0], opts: c.opts, ans: c.ans, word: word });
        }
      } else {
        var i2 = 1 + Math.floor(R() * Math.max(1, w[0].length - 3)), part = w[0].substr(i2, 2);
        c = opts4(R, part, ["ae", "ou", "ea", "ie", "oo", "ar", "er", "ur", "al", "ul"].filter(function (x) { return x !== part; }));
        add(2, { k: "miss", p: "", q: w[0].slice(0, i2) + "__" + w[0].slice(i2 + 2), ins: "Which letters are missing?", say: w[0], opts: c.opts, ans: c.ans, word: word });
      }
    }
    /* 2. chọn từ viết đúng (không nghe) */
    c = opts4(R, word, wr);
    add(2, { k: "spell", p: pic, q: "Which word is spelt correctly?", ins: "Which word is spelt correctly?", say: "", opts: c.opts, ans: c.ans, word: word });
    /* 3. xếp chữ */
    if (word.length <= 11 && word.indexOf(" ") < 0) {
      var t, n = 0; do { t = shuffle(word.split(""), R); } while ((t.join("") === word || BAD.test(t.join(""))) && ++n < 30);
      add(3, { k: "tiles", p: pic, q: "Make the word.", ins: "Listen and put the letters in order.", listen: true, say: word, tiles: t, target: word, word: word });
    }
    /* 4. nghe – viết (chính tả) */
    add(4, { k: "type", p: pic, q: isWord ? "Listen and write the word." : "Write: " + (u.kind === "pl" ? "one " + w[0] + " → many …" : w[0] + " + " + (u.kind === "fl" ? (/ful$/.test(w[1]) ? "ful" : "less") : u.suf)), ins: "Listen and write the word.", listen: true, say: word, target: word, word: "type-" + word });
  });
  /* 3. điền từ vào câu */
  (u.sen || []).concat(u.kind === "sw" ? u.w.map(function (w) { return [w[3], w[2]]; }) : []).forEach(function (s) {
    var m = s[0].match(/\[([^\]]+)\]/), right = m[1], ex = s[0].replace(/\[([^\]]+)\]/g, "$1");
    var stem = s[0].replace(m[0], "____").replace(/\[([^\]]+)\]/g, "$1");
    var item = null; u.w.forEach(function (w) { if ((u.kind === "ph" || u.kind === "sw" ? w[0] : w[1]).toLowerCase() === right.toLowerCase()) item = w; });
    var wr = item ? (u.kind === "ph" || u.kind === "sw" ? item[4] : wrongForms(u, item).concat([item[0]])) : [];
    if (u.kind === "er" && item) wr = [item[0] + "est", item[0]].concat(wr);
    if (u.kind === "est" && item) wr = [item[0] + "er", item[0]].concat(wr);
    if (u.kind === "ing" && item) wr = [item[0] + "ed", item[0] + "s"].concat(wr);
    if (u.kind === "ed" && item) wr = [item[0] + "ing", item[0] + "s"].concat(wr);
    if (u.kind === "fl" && item) { var other = /ful$/.test(right) ? right.replace(/ful$/, "less") : right.replace(/less$/, "ful"); wr = [other].concat(wr); }
    if (wr.length < 3) return;
    if (right[0] !== right[0].toLowerCase()) wr = wr.map(function (x) { return x[0].toUpperCase() + x.slice(1); });
    var c = opts4(R, right, wr);
    P[3].push({ k: "sfill", lv: 3, young: false, p: s[1], q: stem, ins: "Choose the word to finish the sentence.", say: "", ask: "", opts: c.opts, ans: c.ans, word: "s-" + right });
    /* 4. viết từ còn thiếu trong câu */
    P[4].push({ k: "type", lv: 4, young: false, p: s[1], q: stem, ins: "Listen and write the missing word.", listen: true, say: ex, ask: ex, target: right, word: "t-" + right });
  });
  /* các dạng riêng */
  if (u.kind === "ed") u.w.forEach(function (w) {
    var sd = edSound(w[0]), o = ["/t/", "/d/", "/id/"];
    P[3].push({ k: "snd", lv: 3, young: false, p: w[3], q: w[1], ins: "Listen. What sound does -ed make?", listen: true, say: w[1], ask: w[1], opts: o, ans: o.indexOf(sd), word: "snd-" + w[1] });
  });
  if (u.kind === "fl") u.w.forEach(function (w) {
    var mm = u.mean[w[1]]; if (!mm) return;
    var o = Object.keys(u.mean).filter(function (k) { return k !== w[1]; }), c = opts4(R, w[1], [mm.indexOf("full") === 0 ? w[1].replace(/ful$/, "less") : w[1].replace(/less$/, "ful")].concat(shuffle(o, R)));
    P[2].push({ k: "fmean", lv: 2, young: false, p: "", q: "Which word means “" + mm + "”?", ins: "Choose the word that matches the meaning.", say: "", ask: "", opts: c.opts, ans: c.ans, word: "m-" + w[1] });
  });
  if (u.kind === "pl") u.w.forEach(function (w) {
    var rule = u.irr[w[0]] ? "irregular" : (/ies$/.test(w[1]) && /y$/.test(w[0])) ? "+ ies" : (/ves$/.test(w[1]) && /fe?$/.test(w[0])) ? "+ ves" : (/(s|x|z|sh|ch)es$/.test(w[1]) && w[1] !== w[0] + "s") ? "+ es" : "+ s";
    var o = ["+ s", "+ es", "+ ies", "+ ves", "irregular"].filter(function (x) { return x !== rule; }); var c = opts4(R, rule, o);
    P[3].push({ k: "rule", lv: 3, young: false, p: w[3], q: w[0] + " → ?", ins: "How do we make the plural?", say: w[0], ask: w[0], opts: c.opts, ans: c.ans, word: "r-" + w[0] });
  });
  if (u.kind === "er" || u.kind === "est") u.w.forEach(function (w) {
    if (w[4] === "agent") return;
    var o = [w[0] + "er", w[0] + "est", w[0]], right = u.kind === "er" ? w[0] + "er" : w[0] + "est";
    var stem = u.kind === "er" ? "Which word compares TWO things?" : "Which word means THE MOST?";
    var c = { opts: shuffle(o, R) }; c.ans = c.opts.indexOf(right);
    P[2].push({ k: "cmp", lv: 2, young: false, p: w[3], q: stem, ins: stem, say: "", ask: "", opts: c.opts, ans: c.ans, word: "c-" + w[0] });
  });
  return P;
}
function pickN(P, lv, n, seed) {
  var pool = P[lv], d = lv; while (!pool.length && --d >= 1) pool = P[d];
  var list = [], round = 0;
  while (list.length < n && pool.length) { var sh = shuffle(pool, rng(seed + "|" + lv + "|" + round++)); for (var i = 0; i < sh.length && list.length < n; i++) list.push(sh[i]); }
  for (var j = 1; j < list.length; j++) if (list[j].word === list[j - 1].word) for (var k = j + 1; k < list.length; k++) if (list[k].word !== list[j - 1].word) { var t = list[j]; list[j] = list[k]; list[k] = t; break; }
  return list;
}
var GAMES = [
  { n: 1, skin: "fish", name: "Game 1 · Câu cá chính tả (dễ)", plan: [[14, 1], [6, 2]], optsOnly: true },
  { n: 2, skin: "path", name: "Game 2 · Phiêu lưu đảo khủng long (vừa)", plan: [[6, 1], [10, 2], [9, 3]] },
  { n: 3, skin: "boss", name: "Game 3 · Đấu trùm Vương quốc kẹo (khó)", plan: [[8, 2], [12, 3], [10, 4]] },
  { n: 4, skin: "tug", name: "📝 Bài test cuối chủ đề (30 câu)", plan: [[6, 1], [8, 2], [8, 3], [8, 4]], test: true }
];
function build(u, g) {
  var P = pools(u), out = [];
  if (g.optsOnly) [1, 2].forEach(function (lv) { P[lv] = P[lv].filter(function (q) { return q.opts; }); });
  g.plan.forEach(function (pl) { out = out.concat(pickN(P, pl[1], pl[0], "ss|" + u.n + "|" + g.n)); });
  return out.map(function (q, i) { var c = JSON.parse(JSON.stringify(q)); c.i = i; delete c.answered; return c; });
}
function unitOfKey(key) { var m = /^ss\|[^|]+\|(\d+)$/.exec(key || ""); if (!m) return null; for (var i = 0; i < U.length; i++) if (String(U[i].n) === m[1]) return U[i]; return null; }
/* ---------- gắn vào hệ thống game sẵn có ---------- */
var GS = window.HKGS;
if (GS) {
  U.forEach(function (u) { GS.SPEC["ss|" + BOOK + "|" + u.n] = { title: u.t, sound: u.s, games: GAMES, ss: true }; });
  var oBuild = GS.build;
  GS.build = function (key, game) { var u = unitOfKey(key); return u ? build(u, game) : oBuild.apply(this, arguments); };
}
if (window.HKG && window.HKG.count) { var oc = window.HKG.count; window.HKG.count = function (x) { return x && x.k === "ss" ? 3 : oc(x); }; }
window.HKSS = { folder: { k: "ss", n: "Supersonic", e: "UK Phonics · Spelling Friends", c: 6 }, books: books, cards: cards, units: U, build: build, games: GAMES, pools: pools };
})();
