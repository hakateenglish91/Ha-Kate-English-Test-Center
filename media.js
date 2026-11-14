/* Ha Kate Test Center – Songs, Stories, Holidays & Festivals (dữ liệu nhẹ, dùng bộ máy game gspec.js) */
(function () {
"use strict";
/* w: "từ|nghĩa|hình;..." (xếp từ quan trọng/xuất hiện nhiều trước)  s: câu điền [từ]  g: [đúng|sai,sai]  o: câu xếp  v: mã video YouTube */
var DATA = [
{ k: "songs", n: "Songs", e: "Bài hát tiếng Anh", c: 2, b: "Kids Songs", lab: "Song", young: true, items: [
 { t: "Five Little Ducks", v: "pZw9veQ76fo",
   w: "duck|con vịt|🦆;mother|mẹ|👩;hill|ngọn đồi|⛰️;quack|kêu quạc quạc|🗣️;swim|bơi|🏊;come back|quay về|🔙;sad|buồn|😢;happy|vui|😊;little|nhỏ bé|🐣;far away|xa xôi|🗺️;five|số năm|5️⃣;four|số bốn|4️⃣;three|số ba|3️⃣;two|số hai|2️⃣;one|số một|1️⃣",
   s: ["Five little [ducks] went out one day.|🦆", "Mother duck said, \"[Quack], quack!\"|🗣️", "They went over the [hill].|⛰️", "Mother duck was [sad].|😢", "All the ducks came [back].|🔙", "Mother duck was [happy].|😊"],
   g: ["Five little [ducks|duck] went out.|🦆", "Mother duck [said|says,saying] quack.|🗣️", "[They|He,It] came back.|🦆"],
   o: ["Mother duck is sad.", "The ducks came back.", "Five little ducks went out."] },
 { t: "Twinkle Twinkle Traffic Light", v: "yIE_HxZvubc",
   w: "traffic light|đèn giao thông|🚦;red|màu đỏ|🔴;yellow|màu vàng|🟡;green|màu xanh lá|🟢;stop|dừng lại|🛑;wait|chờ|⏳;go|đi|🚗;car|ô tô|🚙;road|con đường|🛣️;cross|băng qua (đường)|🚶;bus|xe buýt|🚌;bike|xe đạp|🚲",
   s: ["Red means [stop].|🔴", "Yellow means [wait].|🟡", "Green means [go].|🟢", "Look at the [traffic light].|🚦", "We [cross] the road.|🚶", "The [car] stops at the red light.|🚙"],
   g: ["Red [means|mean,meaning] stop.|🔴", "[Stop|Stops,Stopping] at the red light!|🛑", "Green means [go|goes,going].|🟢"],
   o: ["Red means stop.", "Green means go.", "Look left and right."] },
 { t: "Itsy Bitsy Spider", v: "w_lCi8U49mY",
   w: "spider|con nhện|🕷️;rain|mưa|🌧️;sun|mặt trời|☀️;climb|leo|🧗;water spout|ống máng nước|🚰;wash out|cuốn trôi|🌊;dry|làm khô|🏜️;up|lên trên|⬆️;down|xuống dưới|⬇️;little|nhỏ bé|🐜;again|lại lần nữa|🔁",
   s: ["The itsy bitsy [spider] climbed up the spout.|🕷️", "Down came the [rain].|🌧️", "Out came the [sun].|☀️", "The sun dried up all the [rain].|☀️", "The spider [climbed] up again.|🧗"],
   g: ["The spider [climbed|climb,climbing] up.|🧗", "Down [came|come,coming] the rain.|🌧️", "The sun dried up [all|every,a] the rain.|☀️"],
   o: ["Down came the rain.", "Out came the sun.", "The spider climbed up again."] },
 { t: "1, 2, 3, 4, 5, Once I Caught a Fish Alive", v: "LNmEFt8cQ_U",
   w: "fish|con cá|🐟;finger|ngón tay|☝️;bite|cắn|😬;catch|bắt|🎣;let go|thả ra|👐;right|bên phải|👉;little|nhỏ|🤏;hand|bàn tay|✋;alive|còn sống|💓;six|số sáu|6️⃣;seven|số bảy|7️⃣;eight|số tám|8️⃣;nine|số chín|9️⃣;ten|số mười|🔟",
   s: ["Once I caught a [fish] alive.|🐟", "Then I let it [go] again.|👐", "It bit my [finger] so.|☝️", "This little finger on my [right].|👉", "Why did it [bite] my finger?|😬"],
   g: ["Once I [caught|catch,catched] a fish.|🎣", "It [bit|bite,bited] my finger.|😬", "I let [it|they,him] go again.|🐟"],
   o: ["I caught a fish.", "It bit my finger.", "I let it go again."] },
 { t: "C is for Cat – Phonics", v: "h5Q3SDDJqcY",
   w: "cat|con mèo|🐱;cap|mũ lưỡi trai|🧢;car|ô tô|🚗;cake|bánh ngọt|🍰;cow|con bò|🐄;cup|cái cốc|☕;carrot|cà rốt|🥕;camel|lạc đà|🐫;candy|kẹo|🍬;cookie|bánh quy|🍪",
   s: ["C is for [cat].|🐱", "The cat has a red [cap].|🧢", "I see a [cow].|🐄", "I like [cake].|🍰", "The [camel] is big.|🐫"],
   g: ["C [is|are,am] for cat.|🐱", "I [see|sees,seeing] a cow.|🐄", "It [is|are,am] a cup.|☕"],
   o: ["C is for cat.", "I see a car.", "I like cookies."] },
 { t: "A is for Alligator – Baby Shark ABC", v: "q0rJDG1w8Fk",
   w: "alligator|cá sấu|🐊;apple|quả táo|🍎;ant|con kiến|🐜;airplane|máy bay|✈️;astronaut|phi hành gia|🧑‍🚀;avocado|quả bơ|🥑;arm|cánh tay|💪;arrow|mũi tên|🏹;shark|cá mập|🦈;sing|hát|🎤;dance|nhảy múa|💃",
   s: ["A is for [alligator].|🐊", "The ant eats an [apple].|🍎", "I fly in an [airplane].|✈️", "Baby [shark] can sing.|🦈", "Let's sing and [dance]!|💃"],
   g: ["It [is|are,am] an alligator.|🐊", "It is [an|a,two] apple.|🍎", "Let's [dance|dances,dancing]!|💃"],
   o: ["A is for apple.", "Let's sing and dance.", "The shark can swim."] },
 { t: "Walking Walking", v: "fPMjnlTEZwU",
   w: "walk|đi bộ|🚶;hop|nhảy lò cò|🐇;run|chạy|🏃;stop|dừng lại|🛑;tiptoe|đi nhón chân|🩰;jump|nhảy|🦘;swim|bơi|🏊;sleep|ngủ|😴;wake up|thức dậy|⏰;fast|nhanh|⚡;slow|chậm|🐢",
   s: ["Walking, walking. [Hop], hop, hop!|🐇", "Running, running. Now let's [stop].|🛑", "[Tiptoe], tiptoe, very quiet.|🩰", "Let's [jump] up high!|🦘", "Now it's time to [sleep].|😴", "[Wake up]! It's morning.|⏰"],
   g: ["Let's [walk|walks,walking].|🚶", "We are [running|run,runs].|🏃", "Now let's [stop|stops,stopping].|🛑"],
   o: ["Let's walk and hop.", "Now let's stop.", "It's time to sleep."] },
 { t: "Walking in the Jungle", v: "GoSq-yZcJ-4",
   w: "jungle|rừng rậm|🌴;walk|đi bộ|🚶;frog|con ếch|🐸;monkey|con khỉ|🐒;toucan|chim tu-can|🦜;tiger|con hổ|🐅;afraid|sợ hãi|😨;see|nhìn thấy|👀;stomp|dậm chân|🦶;jump|nhảy|🦘;skip|nhảy chân sáo|🤸;swim|bơi|🏊",
   s: ["We're walking in the [jungle].|🌴", "What do you [see]?|👀", "I see a [frog].|🐸", "I see a [monkey].|🐒", "We're not [afraid].|😨", "I hear a [tiger]!|🐅"],
   g: ["What [do|does,are] you see?|👀", "I [see|sees,seeing] a frog.|🐸", "We [are|is,am] not afraid.|😨"],
   o: ["We are walking in the jungle.", "What do you see?", "I see a monkey."] }
]},
{ k: "stories", n: "Stories", e: "Truyện tiếng Anh", c: 4, b: "Story Time", lab: "Story", young: true, items: [
 { t: "Where's Spot?", v: "LxexUt8xM1w",
   w: "puppy|chú cún|🐶;dinner|bữa tối|🍲;door|cửa|🚪;bed|giường|🛏️;box|cái hộp|📦;basket|cái giỏ|🧺;clock|đồng hồ|🕰️;piano|đàn piano|🎹;stairs|cầu thang|🪜;bear|con gấu|🐻;snake|con rắn|🐍;hippo|hà mã|🦛;lion|sư tử|🦁;monkey|con khỉ|🐒;crocodile|cá sấu|🐊;penguin|chim cánh cụt|🐧;tortoise|con rùa|🐢;hide|trốn|🙈;find|tìm thấy|🔍",
   s: ["Where is [Spot]?|🐶", "Is he behind the [door]?|🚪", "Is he under the [bed]?|🛏️", "Is he in the [box]?|📦", "Is he inside the [clock]?|🕰️", "There's Spot! He's in the [basket].|🧺", "It's time for [dinner].|🍲"],
   g: ["Is he [behind|on,at] the door?|🚪", "Is he [under|in,on] the bed?|🛏️", "Where [is|are,am] Spot?|🐶"],
   o: ["Where is Spot?", "Is he under the bed?", "Spot is in the basket."] },
 { t: "The Fox and the Crow", v: "BF3bXji-J7I",
   w: "fox|con cáo|🦊;crow|con quạ|🐦‍⬛;cheese|phô mai|🧀;tree|cái cây|🌳;branch|cành cây|🌿;beak|cái mỏ|🐤;sing|hát|🎶;voice|giọng nói|🗣️;drop|làm rơi|⬇️;beautiful|xinh đẹp|🌸;clever|thông minh, láu cá|🧠;hungry|đói|🤤;proud|kiêu hãnh|🦚",
   s: ["The [crow] had a piece of cheese.|🐦‍⬛", "She sat on a [branch] of a tree.|🌿", "The [fox] was hungry.|🦊", "\"You have a [beautiful] voice,\" said the fox.|🌸", "The crow opened her beak to [sing].|🎶", "The cheese [dropped] to the ground.|⬇️"],
   g: ["The crow [had|have,has] some cheese.|🧀", "The fox [was|were,is] hungry.|🦊", "The cheese fell [down|up,on].|⬇️"],
   o: ["The fox was hungry.", "The crow began to sing.", "The cheese fell down."] },
 { t: "I See", v: "nd4igOmSnwc",
   w: "see|nhìn thấy|👀;cat|con mèo|🐱;dog|con chó|🐶;bird|con chim|🐦;fish|con cá|🐟;tree|cái cây|🌳;sun|mặt trời|☀️;flower|bông hoa|🌸;ball|quả bóng|⚽;car|ô tô|🚗;bus|xe buýt|🚌;house|ngôi nhà|🏠",
   s: ["I [see] a cat.|🐱", "I see a [bird].|🐦", "I see a big [tree].|🌳", "I see the [sun].|☀️", "I see a red [ball].|⚽"],
   g: ["I [see|sees,seeing] a dog.|🐶", "I see [a|an,two] bird.|🐦", "I see [an|a,two] apple tree.|🌳"],
   o: ["I see a cat.", "I see a red car.", "I see the sun."] },
 { t: "This Is My Body", v: "RKCxrbuKNx8",
   w: "head|cái đầu|🙂;eyes|đôi mắt|👀;ears|đôi tai|👂;nose|cái mũi|👃;mouth|cái miệng|👄;hands|đôi bàn tay|👐;arms|đôi cánh tay|💪;legs|đôi chân|🦵;feet|bàn chân|🦶;fingers|ngón tay|🖐️;hair|tóc|💇;body|cơ thể|🧍",
   s: ["This is my [head].|🙂", "I see with my [eyes].|👀", "I hear with my [ears].|👂", "I smell with my [nose].|👃", "I eat with my [mouth].|👄", "I clap my [hands].|👐"],
   g: ["This [is|are,am] my nose.|👃", "These [are|is,am] my eyes.|👀", "I have two [legs|leg,legses].|🦵"],
   o: ["This is my body.", "I clap my hands.", "These are my eyes."] },
 { t: "Is That You, Santa?", v: "Dn3zxx0pkN0",
   w: "Santa|ông già Noel|🎅;Christmas|Giáng sinh|🎄;present|món quà|🎁;chimney|ống khói|🏠;reindeer|tuần lộc|🦌;sleigh|xe trượt tuyết|🛷;stocking|tất treo|🧦;cookie|bánh quy|🍪;milk|sữa|🥛;night|ban đêm|🌙;noise|tiếng động|🔊;bed|giường|🛏️",
   s: ["Is that you, [Santa]?|🎅", "It is [Christmas] Eve.|🎄", "I hear a [noise] on the roof.|🔊", "Santa comes down the [chimney].|🏠", "We leave [cookies] and milk for Santa.|🍪", "There are [presents] under the tree!|🎁"],
   g: ["Is [that|this,those] you, Santa?|🎅", "Santa [comes|come,coming] at night.|🌙", "I [hear|hears,hearing] a noise.|🔊"],
   o: ["Is that you, Santa?", "I hear a noise.", "Santa brings presents."] },
 { t: "Picky Nicky", v: "_Y55oXjRHds",
   w: "eat|ăn|🍽️;food|đồ ăn|🍱;picky|kén ăn|🙅;try|thử|👅;pizza|bánh pizza|🍕;peas|đậu Hà Lan|🫛;carrot|cà rốt|🥕;soup|súp|🍲;fish|cá|🐟;apple|quả táo|🍎;yummy|ngon|😋;yucky|dở, ghê|🤢;hungry|đói|🤤",
   s: ["Nicky is a [picky] eater.|🙅", "Nicky does not like [peas].|🫛", "\"[Yucky]!\" says Nicky.|🤢", "Try it, Nicky! It is [yummy].|😋", "Nicky is very [hungry].|🤤", "Now Nicky will [try] new food.|👅"],
   g: ["Nicky [does not|do not,is not] like peas.|🫛", "It [is|are,am] yummy!|😋", "Nicky [eats|eat,eating] pizza.|🍕"],
   o: ["Nicky is hungry.", "Try it, Nicky!", "It is yummy."] },
 { t: "Don't Wake the Baby!", v: "BQIUjMDRhKQ",
   w: "baby|em bé|👶;sleep|ngủ|😴;wake|đánh thức|⏰;quiet|yên lặng|🤫;noise|tiếng ồn|🔊;cry|khóc|😭;dog|con chó|🐶;bark|sủa|🐕;drum|cái trống|🥁;bang|tiếng đùng|💥;crib|cũi em bé|🛏️;mom|mẹ|👩",
   s: ["The [baby] is sleeping.|👶", "Don't [wake] the baby!|⏰", "Please be [quiet].|🤫", "The dog starts to [bark].|🐕", "Now the baby will [cry].|😭", "Shh! The baby is [asleep] again.|😴"],
   g: ["The baby [is|are,am] sleeping.|👶", "[Don't|Doesn't,Not] wake the baby!|⏰", "Please [be|is,are] quiet.|🤫"],
   o: ["The baby is sleeping.", "Please be quiet.", "Don't wake the baby."] },
 { t: "The Big Snowball", v: "EvKzsIxXyt4",
   w: "snow|tuyết|❄️;snowball|quả cầu tuyết|⚪;roll|lăn|🔄;big|to|🐘;bigger|to hơn|🐋;hill|ngọn đồi|⛰️;push|đẩy|👐;snowman|người tuyết|⛄;cold|lạnh|🥶;hat|cái mũ|🎩;scarf|khăn quàng|🧣;fast|nhanh|⚡",
   s: ["It is snowing. The [snow] is white.|❄️", "We make a [snowball].|⚪", "We [roll] it down the hill.|🔄", "The snowball gets [bigger] and bigger!|🐋", "We make a [snowman].|⛄", "It is very [cold] outside.|🥶"],
   g: ["The snowball [gets|get,getting] bigger.|⚪", "We [roll|rolls,rolling] the snowball.|🔄", "It is [bigger|big,biggest] now!|🐋"],
   o: ["We make a snowball.", "It gets bigger and bigger.", "We make a snowman."] },
 { t: "Pig Out!", v: "t4QtYHKwVuY",
   w: "pig|con lợn|🐷;eat|ăn|🍽️;pie|bánh nướng|🥧;cake|bánh ngọt|🍰;corn|ngô|🌽;apple|quả táo|🍎;full|no căng|🫃;hungry|đói|🤤;big|to|🐘;fast|nhanh|⚡;more|thêm nữa|➕;yum|ngon quá|😋",
   s: ["The [pig] is hungry.|🐷", "The pig eats a [pie].|🥧", "He eats some [corn].|🌽", "\"[More]!\" says the pig.|➕", "Now the pig is very [full].|🫃"],
   g: ["The pig [eats|eat,eating] a cake.|🍰", "He [is|are,am] hungry.|🤤", "He wants [more|many,much].|➕"],
   o: ["The pig is hungry.", "He eats a big pie.", "Now he is full."] },
 { t: "Otto the Cat", v: "6q7ZJUk7bR4",
   w: "cat|con mèo|🐱;home|nhà|🏠;alone|một mình|🧍;fish|con cá|🐟;bowl|cái bát|🥣;mess|sự bừa bộn|🌪️;play|chơi|🧶;sleep|ngủ|😴;bad|hư|😼;good|ngoan|😇;window|cửa sổ|🪟;family|gia đình|👨‍👩‍👧",
   s: ["Otto is a [cat].|🐱", "Otto is home [alone].|🧍", "Otto sees a [fish].|🐟", "Oh no! What a [mess]!|🌪️", "Otto is a [good] cat now.|😇", "The [family] comes home.|👨‍👩‍👧"],
   g: ["Otto [is|are,am] a cat.|🐱", "Otto [sees|see,seeing] a fish.|🐟", "The family [comes|come,coming] home.|👨‍👩‍👧"],
   o: ["Otto is home alone.", "What a mess!", "Otto is a good cat."] },
 { t: "Lots of Hearts", v: "MclwHnObEpw",
   w: "heart|trái tim|❤️;Valentine|lễ Tình nhân|💌;card|tấm thiệp|💳;red|màu đỏ|🔴;pink|màu hồng|🩷;cut|cắt|✂️;glue|keo dán|🧴;paper|giấy|📄;love|yêu thương|🥰;friend|bạn bè|🧑‍🤝‍🧑;give|tặng|🎁;make|làm|🛠️",
   s: ["I see lots of [hearts].|❤️", "I make a [card] for my friend.|💳", "I [cut] the red paper.|✂️", "I [glue] a heart on the card.|🧴", "I [give] the card to my mom.|🎁", "Happy [Valentine]'s Day!|💌"],
   g: ["I [make|makes,making] a card.|💳", "This heart [is|are,am] red.|❤️", "I give it [to|for,at] my friend.|🎁"],
   o: ["I make a card.", "I cut a red heart.", "I love you."] },
 { t: "The Little Engine That Could Helps Out", v: "lQQEFUEIuyI",
   w: "engine|đầu máy xe lửa|🚂;train|tàu hỏa|🚆;track|đường ray|🛤️;hill|ngọn đồi|⛰️;help|giúp đỡ|🤝;toys|đồ chơi|🧸;pull|kéo|💪;think|nghĩ|💭;can|có thể|👍;little|nhỏ bé|🤏;big|to|🐘;happy|vui|😊",
   s: ["The little blue [engine] wants to help.|🚂", "The [train] is full of toys.|🚆", "The hill is very [big].|⛰️", "\"I think I [can]!\" says the little engine.|👍", "She [pulls] the train up the hill.|💪", "Now the children are [happy].|😊"],
   g: ["I think I [can|cans,canning].|👍", "She [pulls|pull,pulling] the train.|💪", "The hill [is|are,am] big.|⛰️"],
   o: ["I think I can.", "The engine pulls the train.", "The children are happy."] },
 { t: "Silly Willy", v: "Gh5Z1o1uYPk",
   w: "silly|ngớ ngẩn, buồn cười|🤪;hat|cái mũ|🎩;shoe|chiếc giày|👟;sock|chiếc tất|🧦;coat|áo khoác|🧥;dog|con chó|🐶;cat|con mèo|🐱;funny|buồn cười|😂;laugh|cười to|🤣;upside down|lộn ngược|🙃;wear|mặc, đội|👕;play|chơi|🧸",
   s: ["Willy is so [silly]!|🤪", "Willy puts a [sock] on his hand.|🧦", "He wears his [hat] on his foot.|🎩", "Everyone starts to [laugh].|🤣", "Willy is very [funny].|😂"],
   g: ["Willy [is|are,am] silly.|🤪", "He [wears|wear,wearing] a hat.|🎩", "They [laugh|laughs,laughing] at Willy.|🤣"],
   o: ["Willy is so silly.", "He wears a funny hat.", "We all laugh."] },
 { t: "Benny's Big Bubble", v: "TaZbSrlw-Zc",
   w: "bubble|bong bóng|🫧;blow|thổi|🌬️;big|to|🐘;bigger|to hơn|🐋;bubble gum|kẹo cao su|🍬;float|bay lơ lửng|🎈;up|lên trên|⬆️;sky|bầu trời|☁️;pop|nổ bụp|💥;high|cao|🏔️;wind|gió|🍃;down|xuống|⬇️",
   s: ["Benny has some [bubble gum].|🍬", "Benny can [blow] a bubble.|🌬️", "The bubble gets [bigger] and bigger.|🐋", "The bubble floats up into the [sky].|☁️", "Then the bubble goes [pop]!|💥"],
   g: ["Benny [blows|blow,blowing] a bubble.|🌬️", "It [is|are,am] so big!|🫧", "The bubble [floats|float,floating] up.|🎈"],
   o: ["Benny blows a big bubble.", "It floats up high.", "The bubble goes pop."] },
 { t: "Too Noisy!", v: "p2jieRtEt-Q",
   w: "noisy|ồn ào|📢;loud|to (tiếng)|🔊;quiet|yên lặng|🤫;drum|cái trống|🥁;horn|cái kèn|📯;music|âm nhạc|🎵;dog|con chó|🐶;baby|em bé|👶;sleep|ngủ|😴;shh|suỵt|🤐;house|ngôi nhà|🏠;bang|tiếng đùng|💥",
   s: ["The house is too [noisy]!|📢", "The [drum] goes bang, bang!|🥁", "The music is very [loud].|🔊", "Shh! Please be [quiet].|🤫", "The baby wants to [sleep].|😴"],
   g: ["It [is|are,am] too noisy.|📢", "Please [be|is,are] quiet.|🤫", "The baby [wants|want,wanting] to sleep.|👶"],
   o: ["It is too noisy.", "Please be quiet.", "The baby is sleeping."] }
]},
{ k: "fest", n: "Holidays & Festivals", e: "Lễ hội và ngày lễ", c: 1, b: "Holidays and Festivals", lab: "Topic", young: false, five: true, items: [
 { t: "Lunar New Year",
   w: "lantern|đèn lồng|🏮;lucky money|tiền lì xì|🧧;fireworks|pháo hoa|🎆;dragon|con rồng|🐉;lion dance|múa lân|🦁;family|gia đình|👨‍👩‍👧;peach blossom|hoa đào|🌸;apricot blossom|hoa mai|🌼;kumquat tree|cây quất|🍊;new clothes|quần áo mới|👕;wish|lời chúc, điều ước|🙏;visit|thăm|🏡;clean|dọn dẹp|🧹;lucky|may mắn|🍀;gift|món quà|🎁;sticky rice cake|bánh chưng|🟩;watermelon|dưa hấu|🍉;temple|chùa, đền|⛩️",
   s: ["We get [lucky money] in red envelopes.|🧧", "We watch [fireworks] at midnight.|🎆", "We [clean] the house before Tet.|🧹", "We [visit] our grandparents.|🏡", "We wear [new clothes] on Tet.|👕", "We eat [sticky rice cake] at Tet.|🟩", "The [lion dance] is fun to watch.|🦁", "I [wish] you a happy new year!|🙏"],
   g: ["Happy New [Year|Years,Yeared]!|🎉", "We [watch|watches,watching] fireworks.|🎆", "My grandma [gives|give,giving] me lucky money.|🧧", "We [are|is,am] visiting our family.|👨‍👩‍👧"],
   q: [{q:"What do you do at Tet?",p:"🎆",a:"I watch fireworks.",x:["I wear a costume.","I eat mooncakes.","I open a stocking."]},{q:"What do children get at Tet?",p:"🧧",a:"They get lucky money.",x:["They get pumpkins.","They get a Christmas tree.","They get a snowman."]}],
   o: ["We watch fireworks at Tet.", "I wish you a happy new year.", "We visit our grandparents."],
   tt: ["We get lucky [money].|🧧", "We watch [fireworks] at midnight.|🎆", "We [clean] the house before Tet.|🧹"] },
 { t: "Mid-Autumn (Moon) Festival",
   w: "moon|mặt trăng|🌕;mooncake|bánh trung thu|🥮;lantern|đèn lồng|🏮;star lantern|đèn ông sao|⭐;lion dance|múa lân|🦁;drum|cái trống|🥁;rabbit|con thỏ|🐇;tea|trà|🍵;fruit|hoa quả|🍇;parade|rước đèn|🎊;night|ban đêm|🌃;bright|sáng|✨;round|tròn|⭕;family|gia đình|👨‍👩‍👧;share|chia sẻ|🤲;children|trẻ em|🧒",
   s: ["The [moon] is big and round.|🌕", "We eat [mooncakes] with our family.|🥮", "I carry a [star lantern].|⭐", "Children watch the [lion dance].|🦁", "The moon is very [bright] tonight.|✨", "We drink [tea] and eat fruit.|🍵", "We [share] mooncakes with friends.|🤲"],
   g: ["The moon [is|are,am] bright.|🌕", "We [eat|eats,eating] mooncakes.|🥮", "I [carry|carries,carrying] a lantern.|🏮", "The children [are|is,am] dancing.|🧒"],
   q: [{q:"What do you eat at the Moon Festival?",p:"🥮",a:"We eat mooncakes.",x:["We eat sticky rice cake.","We eat candy canes.","We eat pumpkins."]},{q:"What does the moon look like?",p:"🌕",a:"It is big and round.",x:["It is small and square.","It is green and long.","It is a lantern."]}],
   o: ["The moon is big and round.", "We eat mooncakes with our family.", "I carry a star lantern."],
   tt: ["We eat [mooncakes].|🥮", "The [moon] is round.|🌕", "I carry a [lantern].|🏮"] },
 { t: "Halloween",
   w: "pumpkin|quả bí ngô|🎃;ghost|con ma|👻;witch|phù thủy|🧙;bat|con dơi|🦇;spider|con nhện|🕷️;skeleton|bộ xương|💀;monster|quái vật|👹;costume|trang phục hóa trang|🦸;candy|kẹo|🍬;trick or treat|cho kẹo hay bị ghẹo|🍭;haunted house|nhà ma|🏚️;black cat|mèo đen|🐈‍⬛;broom|cây chổi|🧹;owl|con cú|🦉;scary|đáng sợ|😱;mask|mặt nạ|🎭;moon|mặt trăng|🌕;night|ban đêm|🌃",
   s: ["We carve a [pumpkin].|🎃", "The [witch] flies on a broom.|🧙", "I wear a scary [costume].|🦸", "Children say \"[Trick or treat]!\"|🍭", "We get lots of [candy].|🍬", "A [bat] flies in the night sky.|🦇", "The [ghost] says \"Boo!\"|👻", "The haunted house is very [scary].|😱"],
   g: ["The witch [flies|fly,flying] on a broom.|🧙", "I [am|is,are] wearing a mask.|🎭", "This ghost [is|are,am] scary!|👻", "We [carve|carves,carving] pumpkins.|🎃"],
   q: [{q:"What do children say on Halloween?",p:"🍭",a:"Trick or treat!",x:["Happy New Year!","Merry Christmas!","Good night!"]},{q:"What are you wearing?",p:"🧙",a:"I'm wearing a witch costume.",x:["I'm eating a mooncake.","It's a pumpkin.","Yes, I am."]}],
   o: ["The witch flies on a broom.", "I wear a scary costume.", "We get lots of candy."],
   tt: ["We carve a [pumpkin].|🎃", "The [ghost] says boo.|👻", "I wear a [mask].|🎭"] },
 { t: "Christmas",
   w: "Santa|ông già Noel|🎅;Christmas tree|cây thông Noel|🎄;present|món quà|🎁;reindeer|tuần lộc|🦌;sleigh|xe trượt tuyết|🛷;snowman|người tuyết|⛄;stocking|tất treo|🧦;star|ngôi sao|⭐;bell|cái chuông|🔔;candle|cây nến|🕯️;elf|chú lùn|🧝;snow|tuyết|❄️;cookie|bánh quy|🍪;card|tấm thiệp|💌;angel|thiên thần|👼;candy cane|kẹo gậy|🍭;chimney|ống khói|🏠;gloves|găng tay|🧤",
   s: ["[Santa] brings presents.|🎅", "We decorate the [Christmas tree].|🎄", "Santa rides in a [sleigh].|🛷", "The [reindeer] pull the sleigh.|🦌", "We build a [snowman].|⛄", "I hang my [stocking] by the fire.|🧦", "There is a [star] on top of the tree.|⭐", "Merry Christmas! Here is a [present] for you.|🎁"],
   g: ["Santa [brings|bring,bringing] presents.|🎅", "Merry [Christmas|Christmases,Christmasing]!|🎄", "The reindeer [pull|pulls,pulling] the sleigh.|🦌", "There [is|are,am] a star on the tree.|⭐"],
   q: [{q:"Who brings presents at Christmas?",p:"🎅",a:"Santa brings presents.",x:["The witch brings presents.","The dragon brings presents.","The moon brings presents."]},{q:"What do you say at Christmas?",p:"🎄",a:"Merry Christmas!",x:["Trick or treat!","Happy Halloween!","Happy Mid-Autumn!"]}],
   o: ["Santa brings presents.", "We decorate the Christmas tree.", "Merry Christmas to you."],
   tt: ["[Santa] brings presents.|🎅", "We build a [snowman].|⛄", "I hang my [stocking].|🧦"] }
]}
];
/* ---------- chuyển sang dạng hệ thống dùng ---------- */
var GS = window.HKGS, OUT = [];
function words(it) { return it.w.split(";").map(function (x) { return x.split("|"); }); }
function sp(x) { var p = x.split("|"); var pic = p.pop(); return [p.join("|"), pic]; }
DATA.forEach(function (F) {
  var book = { b: F.b, lab: F.lab, u: [] }, cards = [], allW = [];
  F.items.forEach(function (it) { allW = allW.concat(words(it)); });
  F.items.forEach(function (it, i) {
    var n = String(i + 1), W = words(it);
    book.u.push({ n: n, t: it.t, s: "", c: W.length, v: it.v || "" });
    W.forEach(function (w) { cards.push([F.b, n, w[0], w[1], w[2]]); });
    if (!GS) return;
    var mine = {}; W.forEach(function (w) { mine[w[0]] = 1; });
    var seen = {}, r = allW.filter(function (w) { if (mine[w[0]] || seen[w[0]]) return false; seen[w[0]] = 1; return true; }).map(function (w) { return [w[0], w[2]]; });
    var S = { title: it.t, sound: "", young: F.young, w: W.map(function (w) { return [w[0], w[1], w[2]]; }), r: r,
      s: (it.s || []).map(sp), g: (it.g || []).map(sp), q: it.q || [], o: it.o || [], t: (it.tt || []).map(sp) };
    if (!F.five) S.games = [
      { n: 1, skin: "fish", name: "Game 1 · Câu cá từ vựng (dễ)", plan: [[15, 1]] },
      { n: 2, skin: "path", name: "Game 2 · Phiêu lưu (vừa)", plan: [[8, 1], [12, 2]] },
      { n: 3, skin: "boss", name: "Game 3 · Đấu trùm (khó)", plan: [[8, 2], [10, 3], [7, 5]] }];
    GS.SPEC[F.k + "|" + F.b + "|" + n] = S;
  });
  OUT.push({ k: F.k, f: { k: F.k, n: F.n, e: F.e, c: F.c }, books: [book], cards: cards });
});
window.HKX = OUT;
})();
