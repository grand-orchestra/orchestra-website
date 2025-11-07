export interface Instrument {
  id: string;
  youtubeUrl: string;
  nameEn: string;
  nameMn: string;
  descriptionEn: string;
  descriptionMn: string;
  image: string[];
  category: string;
}

export const instruments: Instrument[] = [
  {
    id: "1",
    youtubeUrl:'https://youtu.be/xeScy-ycMtU?si=_j0hwHG3AHDkZOjG',
    nameEn: "Morin khuur",
    nameMn: "Морин хуур",
    descriptionEn: ' It is the most ancient musical instrument of Mongolia\'s, and it is worshipped and respected among the Mongols as the horses are. The horse headed fiddle is made of the wood and the top is carved honorably and skillfully like a horse head. It has just two strings which are made of the hair of Mongolian horse tail. This instrument was registered in the UNESCO is World foundation in 2004. However, the instrument has just two strings, it has approved its skill to play not only the Mongolian folklore or any folk compositions but also famous composer classic compositions in the world with its special melodious sound.',
    descriptionMn:'Морио дээдлэн билэгдэж хийсэн Монголчуудын эртний гарвалт хөгжмийн зэмсэг. Морин хуурын тэргүүнд нь морины толгойг залж хоёр чавхдасыг Монгол морины сүүлний хялгасаар урлажээ. Хоёрхон чавхдастай морин хуураар монгол ардын ая аялгуу, татлага зэргийг тоглохоос гадна дэлхийн алдартай сонгодог бүтээлүүдийг ч чадварлагаар эшиглүүлдэг юм. Энэхүү зэмсгийг 2004 онд ЮНЕСКО-ийн соёлын өвд бүртгэсэн. 1950-иад оны үед морин хуурын ширэн царыг модон цартай болгож өөрчилснөөр илүү дуурьсал сайтай, тайзны зориулалттай болж хөгжсөн.',
    image:['https://pub-c9d6211285cd4182aa0d9bd07639b459.r2.dev/instrument/MORIN%20KHUUR%2001.jpg', 'https://pub-c9d6211285cd4182aa0d9bd07639b459.r2.dev/instrument/MORIN%20KHUUR%2002.jpg'],
    category: "string"
  },
  {
    id: "2",
    youtubeUrl:'https://youtu.be/Ly1m7unzgrU?si=vhzAmr1U1h7hwzEz',
    nameEn: "Ikh Khuur",
    nameMn: "Их хуур",
    descriptionEn:' Ikh khuur is a type of morin khuur instrument and has been part of the national grand orchestra since 1950. It performs the same role a bass fiddle does in the western orchestra.',
    descriptionMn:'Их хуур нь морин хуурын төрлийн хөгжим бөгөөд одоогийн Үндэсний хөгжмийн их найралд 1950-иад оноос хойш хэрэглэгдэж байна. 2 утастай энэ хөгжим нь Үндэсний хөгжмийн их найралд контрабасстай ижил үүргийг гүйцэтгэнэ.',
    image:['https://pub-c9d6211285cd4182aa0d9bd07639b459.r2.dev/instrument/IKH%20KHUUR.jpg'],
    category: "string"
  },
  {
    id: "3",
    youtubeUrl:'https://youtu.be/9E8ToHDF7iM?si=UTMYAB0cSm8Vd2Sr',
    nameEn: "Khuuchir",
    nameMn: "Хуучир",
    descriptionEn:'2-4 string instrument, played on one’s lap, and it is like a violin. Widely spread Asian countries such as China, Korea and Mongolia. Today, the khuuchir is widely used in both Mongolian folk and professional music. It plays an important role in folk songs, dance music, orchestral and symphonic works, and serves as an essential component of the Mongolian traditional orchestra.',
    descriptionMn:'Уг зэмсэг нь хийл хөгжимтэй ойролцоо төрлийн, өвдгөн дээрээ тавьж тоглодог 2-4 утастай зэмсэг бөгөөд Хятад Солонгос Монгол зэрэг Азийн улсуудад өргөн дэлгэрсэн. Өдгөө хуучрыг монгол ардын болон мэргэжлийн хөгжимд өргөнөөр хэрэглэж байна. Энэ нь ардын дуу, бүжгийн хөгжим, найрал хөгжим, симфони бүтээлүүдэд чухал үүрэг гүйцэтгэдэг бөгөөд Монголын үндэсний найрал хөгжмийн зайлшгүй бүрэлдэхүүн хэсэг болдог.',
    image:['https://pub-c9d6211285cd4182aa0d9bd07639b459.r2.dev/instrument/KHUUCHIR.jpg'],
    category: "string"
  },
  {
    id: "4",
    youtubeUrl:'https://youtu.be/Z59v2TGWmm8?si=q8FLkbqdrLF7Tew_',
    nameEn: "Shudraga / Shanz",
    nameMn: "Шудрага / Шанз",
    descriptionEn:'Shudraga (known as shanz) music is one of the national musical instruments of Mongolia. It\'s called fidelity music because it\'s played with a tap or swipe motion. Another version is that Mongolians call the ladle Shudraga, and the general shape of the ladle resembles a ladle with a straight handle. It is a musical instrument with 3 fine strings made of goat wire and a snake handle. It is widely used in folk songs, where the song can express different emotions, such as joy, sadness, lyrics, motivation, etc.',
    descriptionMn:'Шудрага (мөн шанз гэж нэрлэдэг) хөгжим нь эртнээс нааш өв уламжлан ирсэн монголчуудын үндэсний хөгжмийн зэмсгүүдийн нэг юм. Түүнийг товшиж буюу шудрах хөдөлгөөнөөр тоглодог учраас шудрага хөгжим хэмээн нэрлэсэн аж. Мөн өөр нэг хувилбар нь шанагыг шудрага хэмээн монголчууд нэрлэдэг байсан ба ерөнхий хэлбэр нь шанагатай төстэй эгц шулуун иштэй учраас түүнтэй зүйрлэн нэрлэсэн ч байж болох талтай. Малын өлөнгөөр хийсэн 3 нарийн утастай могойн арьсаар царыг урласан хөгжмийн зэмсэг юм. Ардын дуунд өргөн хэрэглэгддэг бөгөөд эгшиг нь баяр баясгалан, уйтгар гуниг, уянгын үг, урам зориг зэрэг олон төрлийн сэтгэл хөдлөлийг илэрхийлж чаддаг.',
    image:['https://pub-c9d6211285cd4182aa0d9bd07639b459.r2.dev/instrument/SHANZ.jpg'],
    category: "string"
  },
  {
    id: "5",
    youtubeUrl:'https://youtu.be/llYmv7kGbF8?si=zky2aMBy-RNwwHAS',
    nameEn: "Yochin",
    nameMn: "Ёочин",
    descriptionEn:'Yochin is a type of Mongolian stringed music, characterized by its melodious and clear sound. It also has a wooden box-like body with many strings and is played with 2 rackets. Mongolian percussion string music and is believed to be derived from the ancient Chinese "Yancheng" music. "Yancheng" music came to China in the 16th century from a special music called "Santur" of Persia or Iran, then spread to many countries in East Asia. It belongs to the string percussion group of national orchestras and used to emphasize the tone of a piece, highlight ending, and create a tonal balance.',
    descriptionMn:'Ёочин бол уянгалаг, цэлмэг дуугаралтаараа онцлогтой монгол утсан хөгжмийн төрөл юм. Мөн олон утастай модон хайрцаг шиг биетэй, 2 цохиураар тоглодог. Монголын уламжлалт цохиурт чавхдаст хөгжмийн нэг төрөл бөгөөд эртний Хятадын “Янцинь” хэмээх хөгжмөөс гаралтай гэж үздэг. “Янцинь” хөгжим нь XVI зууны үед Перс буюу өнөөгийн Ираны “Сантур” хэмээх хөгжмөөс Хятад оронд дамжин орж ирсэн бөгөөд цаашлаад Зүүн Азийн олон улс оронд түгэн дэлгэрсэн байдаг. Үндэсний найрал хөгжимд буюу оркестрт чавхдаст-цохиурт хөгжмийн бүлэгт хамаардаг бөгөөд бүтээлийн аялгууг тодотгох, төгсгөл хэсгийг гэрэлтүүлэх, өнгөний тэнцвэрийг бий болгох зэрэгт ашиглагддаг.',
    image:['https://pub-c9d6211285cd4182aa0d9bd07639b459.r2.dev/instrument/YOCHIN.jpg'],
    category: "percussion"
  },
  
  {
    id: "6",
    youtubeUrl:'https://youtu.be/vLZ_IAR9QGo?si=bMSQspUyEKpgFnTA',
    nameEn: "Yatga",
    nameMn: "Ятга",
    descriptionEn:'Yatga is a traditional Mongolian string instrument with a convex wooden body, many strings, and is played by pulling. Although it is believed that its origin is from the ancient music of China (guzheng), it has been deeply absorbed into Mongolian heritage and has a special style and playing method. The sound of the harp, clean, soft and clear. The sound is drawn from a low melodic to a high tone, using multiple layered effects. There are 13-25 strings depending on the type of music.',
    descriptionMn:'Ятга нь Монголын уламжлалт чавхдаст хөгжмийн зэмсэг бөгөөд гүдгэр модон бие, олон чавхдастай, татаж тоглодог онцлогтой. Түүний үүсэл нь эртний Хятад улсын гучин (guzheng) хөгжмөөс гаралтай гэж үздэг ч, Монголын өв соёлд гүн гүнзгий шингэж, тусгай хэв маяг, тоглох арга барилтай болсон байна. Ятгын дуу цэвэр, зөөлөн, тунгалаг, олон давхаргат нөлөөгөөр намуухан аялгуунаас өндөр аялгуу руу татдаг. Энэ нь гүн гүнзгий, баялаг дуу чимээтэй боловч хатуу нам гүм, хөнгөн аялгуутай. Тухайн хөгжмийн төрлөөс хамааран 13-25 утастай байдаг.',
    image:['https://pub-c9d6211285cd4182aa0d9bd07639b459.r2.dev/instrument/YATGA.jpg'],
    category: "string"
  },
  {
    id: "7",
    youtubeUrl:'https://youtu.be/EsPlZ6t3Xr0?si=QvUDb7kMo0vf0k5-',
    nameEn: "Limbe",
    nameMn: "Лимбэ",
    descriptionEn:' The worldwide known flute is played by Mongols, utilizing 6 fingers. The flute is made of bamboo, tied by sheep intestine tissue string, and the unique play technique called “enclosed breathing” (continuous whistling without a break for breathing) is practiced.',
    descriptionMn:'Дэлхийн улсуудад өргөн тархсан энэ хөгжмийн зэмсгийг Монголчууд 6 хуруугаар тоглодог бөгөөд Хулс болон хонины өлөнг нарийн утас болгон ороож хийсэн, гагцхүү тоглох арга барил нь битүү амьсгаа хэмээх өвөрмөц сонин арга барилаараа ялгаатай. Энэ нь тоглож байх явцдаа амьсгаа авч байгаа нь үл мэдэгдэн тасалдалгүй үлээхийг хэлнэ.',
    image:['https://pub-c9d6211285cd4182aa0d9bd07639b459.r2.dev/instrument/3%20LIMBE.jpg'],
    category: "wind"
  },
  {
    id: "8",
    youtubeUrl:'https://youtu.be/TtXRBN9i-qI?si=PBVz_VrxtRUOBWRl',
    nameEn: "Ever buree",
    nameMn: "Эвэр бүрээ",
    descriptionEn:'Musical instrument made of cow horn and was used in gatherings and battles in early times, In modern times, it has got valves and is similar a European clarinet.',
    descriptionMn:'Үхрийн эвэрээр хийсэн хөгжмийн зэмсэг нь эрт дээр үеэс цугларалт, тулаанд ашиглагдаж байсан бөгөөд орчин үед хавхлагатай болж, Европын кларнет хөгжимтэй төстэй болсон юм.',
    image:['https://pub-c9d6211285cd4182aa0d9bd07639b459.r2.dev/instrument/EVER%20BUREE.jpg'],
    category: "wind"
  },
  {
    id: "9",
    youtubeUrl:'https://youtu.be/rcBvvJsSEwA?si=ux_J6LYRPBEYavr6',
    nameEn: "Tsordon Buree",
    nameMn: "Цордон бүрээ",
    descriptionEn:'Widely used in Buddhist monasteries, the instrument is made of bronze and copper and has a loud, clear sound. The instrument requires a high level of skill and has a wide range of tones, serving as a fundamental component of the orchestra. It has been enriched in modern times with valves and buttons.',
    descriptionMn:'Буддын шашны сүм хийдүүдэд өргөн хэрэглэгддэг уг зэмсгийг хүрэл гуулиар хийсэн, дуугаралтын хувьд чанга өргөн дуугаралттай. Энэхүү зэмсэг нь өндөр ур чадвар шаарддаг бөгөөд олон төрлийн өнгө аястай ба найрал хөгжмийн үндсэн бүрэлдэхүүн хэсэг болдог. Орчин үед хавхлаг, товчлуураар баяжуулсан.',
    image:['https://pub-c9d6211285cd4182aa0d9bd07639b459.r2.dev/instrument/TSORDON%20BUREE.jpg'],
    category: "percussion"
  },
  {
    id: "10",
    youtubeUrl:'https://youtu.be/wZE4PvCQdew?si=rgak21EQiX2-xygf',
    nameEn: "Ardiin Bishguur",
    nameMn:"Ардын бишгүүр",
    descriptionEn:'An instrument widely played in Buddhist temples, with 6 holes on the front and 1 hole on the back and decorated with silver and copper by Mongolian silversmiths. The traditional Bishgur is a unique musical instrument that expresses pure, melodious and soulful sounds.',
    descriptionMn:'Буддын шашны сүм хийдэд өргөнөөр тоглодог, урд талдаа 6 нүхтэй, ар талдаа 1 цооногтой, монгол мөнгөний дархчуудын гол, мөнгө, зэсээр чимэглэсэн зэмсэг. Ардын Бишгүүр нь цэвэр, уянгалаг, гүн сэтгэлийн эгшгийг илэрхийлдэг өвөрмөц хөгжмийн зэмсэг юм.',
    image:['https://pub-c9d6211285cd4182aa0d9bd07639b459.r2.dev/instrument/ARDIIN%20BISHGUUR.jpg'],
    category: "percussion"
  },
  {
    id: "11",
    youtubeUrl:'https://youtu.be/33-BWk8fBjA?si=JiD92KQenlUwMqrF',
    nameEn: "Ikh Bishguur",
    nameMn: "Их бишгүүр",
    descriptionEn: 'A brass instrument like a bassoon. Compared to the folk flute, it is a type of traditional wind instrument that is distinguished by its large size and deep majestic sound. This instrument plays an important role in the orchestra, emphasizing the lower tones and enhancing the depth and meaning of the melody.',
    descriptionMn: 'Фагот хөгжимтэй төстэй хөгжмийн зэмсэг. Ардын бишгүүртэй харьцуулахад том хэмжээтэй, гүн сүрлэг дуугаралтаараа ялгардаг уламжлалт үлээвэр хөгжмийн нэг төрөл юм. Энэхүү зэмсэг нь найрал хөгжимд чухал үүрэг гүйцэтгэдэг бөгөөд доод аялгууг онцолж,аялгууны үндэсийг сайжруулдаг.',
    image:['https://pub-c9d6211285cd4182aa0d9bd07639b459.r2.dev/instrument/BAYJUULSAN%20BISHGUUR.jpg'],
    category: "percussion"
  },
  {
    id: "12",
    youtubeUrl:'https://youtu.be/M3lNTel82z8?si=fzwUSCxTS33LFSYj',
    nameEn: "Drums",
    nameMn: "Цохивор хөгжим",
    descriptionEn: ' The grand national orchestra uses traditional drums of various types originated in the early days. Westen instruments such as vibraphone, tympani and glockenspiel have found its due places in the national orchestra as well.',
    descriptionMn: 'Үндэсний хөгжмийн их найралд эртний уламжлалт хэнгэрэг бөмбөрийн олон янзын төрөл зүйл байдаг. Мөн европийн vibraphone, tympani, glockenspiele зэрэг хөгжмүүдийг их найралд ашиглаж байна.',
    image:['https://pub-c9d6211285cd4182aa0d9bd07639b459.r2.dev/instrument/KHENGEREG.jpg', 'https://pub-c9d6211285cd4182aa0d9bd07639b459.r2.dev/instrument/DUU%20DARAM.jpg', 'https://pub-c9d6211285cd4182aa0d9bd07639b459.r2.dev/instrument/DENSHIG.jpg'],
    category: "percussion"
  },
];
