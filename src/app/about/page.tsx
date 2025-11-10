'use client';

import { useLanguage } from '@/contexts/language-context';

export default function AboutPage() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      pageTitle: 'History of the National Orchestra',
      hero: {
        title: 'Mongolian State National Folk Orchestra',
        subtitle: 'Preserving the Grand Orchestral Traditions of Mongolia'
      },
      introduction: {
        title: 'A Legacy of Excellence',
        text: 'Since the era of the Hunnu Empire, the grand orchestral traditions of Mongolia have symbolized the nation\'s independence, exalted the power of the state, invoked the spirits of the ancestors, and uplifted the courage and vitality of the people. The person who was reviving and developing these grand ceremonial musical traditions of the Mongol Empire in the modern era, beginning in 1956, was Mördorj Luvsanjamb—People\'s Artist of Mongolia, State Prize Laureate, and distinguished composer.\n\nIn 1962, with the presentation of its first full-scale concert, a new chapter began in the history of the national orchestral music ensemble.\n\nToday, the National Grand Orchestra performs with a composition of sixty musicians, featuring both ancient and culturally rooted Mongolian instruments such as the morin khuur (horsehead fiddle), khuuchir, ikh khuur, bamboo flute (limbe), bayalag flute, traditional flute and horn, tsordon, great horn, yochin (dulcimer), shanz, yatga (zither), and various percussion instruments that embody Mongolia\'s nomadic life and heritage.'
      },
      timeline: {
        title: 'Our History',
        events: [
          {
            year: '1956',
            title: 'The Beginning',
            description: 'When the Estrada Concert Bureau was first established, a small ensemble consisting of six musicians—D. Batsaikhan, L. Ochirjantsan, P. Buyan, L. Maam, and Ts. Luvsansuren—laid the foundation for what would become the Mongolian folk orchestra. During the first performance of the "State Ensemble of Folk Song and Dance," the orchestra had grown to sixteen members. From 1956 onward, it came to be known as the "National Orchestra."'
          },
          {
            year: '1962',
            title: 'First Full Concert',
            description: 'In 1962, with the presentation of its first full-scale concert, a new chapter began in the history of the national orchestral music ensemble. Today, the National Grand Orchestra performs with a composition of sixty musicians.'
          },
          {
            year: '2005',
            title: 'Presidential Recognition',
            description: 'The orchestra has evolved into the "Mongolian State National Folk Orchestra," a title granted by a Presidential Decree in 2005. In addition to orchestral works, it has performed and created numerous musical dramas, ballets, and symphonic compositions, enriching its repertoire with both national and world masterpieces.'
          }
        ]
      },
      instruments: {
        title: 'Traditional Instruments',
        description: 'The orchestra features both ancient and culturally rooted Mongolian instruments that embody Mongolia\'s nomadic life and heritage:',
        items: [
          'Morin khuur (horsehead fiddle)',
          'Khuuchir',
          'Ikh khuur',
          'Bamboo flute (limbe)',
          'Bayalag flute',
          'Traditional flute and horn',
          'Tsordon',
          'Great horn',
          'Yochin (dulcimer)',
          'Shanz',
          'Yatga (zither)',
          'Various percussion instruments'
        ]
      },
      legacy: {
        title: 'The Grand National Orchestra composition',
        items: [
          "Woodwinds group ",
          "Brass group",
          "Strings group",
          "Chordophone group",
          "Percussion group", 
          "Folk Quintet",
          "Folk group",
        ]
      },
    },
    mn: {
      pageTitle: 'Найрал хөгжмийн түүх',
      hero: {
        title: 'Монгол Төрийн Үндэсний Хөгжмийн Их Найрал',
        subtitle: 'Монголын их найрлын уламжлалыг хадгалж хөгжүүлж байна'
      },
      introduction: {
        title: 'Гайхамшигт түүх',
        text: 'Хүн улсын үеэс Монгол улсын тусгаар тогтнолыг илтгэн, төрийн сүр хүчийг бадраан, дээдсийн онгон шүтээнийг урин дуудаж, түмэн олны сүлд хийморийг сэргээх уламжлалтай Монголын эзэнт гүрний их найрлын зан үйлийг 1956 оноос эхлэн шинэ цаг үед сэргээн бий болгож, хөгжүүлсэн хүн бол Ардын жүжигчин, Төрийн шагналт Л.Мөрдорж юм.\n\n1962 онд анхны бүрэн хэмжээний тоглолтоо толилуулснаар чуулгын үндэсний хөгжмийн их найрлын түүхийн шинэ хуудсыг нээсэн бөгөөд өнөөдөр үндэсний хөгжмийн их найрал 60 хөгжимчний бүрэлдэхүүнтэйгээр эгшиглэж байна.\n\nЭнэхүү найрал хөгжимд Морин хуур, хуучир, их хуур, Лимбэ, Баялаг бишгүүр, Ардын бишгүүр эвэр бүрээ, Цордон, Их бүрээ, ёочин, Шанз, Ятга, Цохивор зэрэг эртний болон Монгол ахуй соёлоос үүссэн хөгжмийн зэмсэгүүд багтдаг.'
      },
      timeline: {
        title: 'Түүхэн замнал',
        events: [
          {
            year: '1956',
            title: 'Эхлэл',
            description: 'Эстрад-концертын товчоо байгуулагдах үед анх Д. Батсайхан, Л. Очиржанцан, П. Буян, Л. Маам, Ц. Лувсансүрэн хэмээх зургаан хөгжимчний бүрэлдэхүүнтэй цөөхүүл хөгжмөөр ардын найрал хөгжмийн суурь тавигдаж, "Ардын дуу танцны улсын ансамбль"-ийн анхны тоглолт хийхэд ардын найрал хөгжим 16 хүний бүрэлдэхүүнтэй байсан байна. 1956 оноос эхлэн "Үндэсний Хөгжмийн Оркестр" хэмээн нэрлэгдэх болжээ.'
          },
          {
            year: '1962',
            title: 'Анхны бүрэн тоглолт',
            description: '1962 онд анхны бүрэн хэмжээний тоглолтоо толилуулсан хугацаанаас чуулгын үндэсний хөгжмийн их найрлын түүхийн хуудсыг тоолох болсон.'
          },
          {
            year: '2005',
            title: 'Ерөнхийлөгчийн зарлиг',
            description: 'Өдгөө үндэсний хөгжмийн их найрал нь Монгол улсын ерөнхийлөгчийн 2005 оны зарлигаар "Монгол төрийн үндэсний хөгжмийн их найрал" болтлоо хөгжиж дан найрал хөгжмийн бүтээлээс гадна дуулалт жүжиг, бүжгэн жүжгийн бүтээлийг бүтээсээр урын сандаа үндэсний болон дэлхийн шилдэг олон арван бүтээлүүдээр сонсогч олныхоо сонорыг мялаасаар байна.'
          }
        ]
      },
      legacy: {
        title: 'Найрал хөгжмийн бүтэц',
        items: [
          "Үлээвэр хөгжим",
          "Гуулин үлээвэр",
          "Нумт хөгжим",
          "Товшуур хөгжим",
          "Цохивор хөгжим", 
          "Ардын тавал",
          "Ардын хөгжмийн хамтлаг",
        ]
      },
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" suppressHydrationWarning>
          {/* Page Title */}
          <div className="mb-12 animate-fade-in">
            <div className="flex justify-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gold classic-heading">
                {currentContent.pageTitle}
              </h1>
            </div>
          </div>

          {/* Introduction Paragraph */}
          <div className="mb-20 animate-fade-in">
            <div className="max-w-5xl mx-auto px-4">
              <p className="text-gold-light/90 leading-relaxed classic-text text-lg md:text-xl whitespace-pre-line">
                {currentContent.introduction.text}
              </p>
            </div>
          </div>

          {/* History Timeline */}
          <div className="mb-20 animate-fade-in-delay-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold text-center mb-8 classic-heading">
              {currentContent.timeline.title}
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold via-gold/60 to-gold hidden md:block"></div>
              
              <div className="space-y-4 md:space-y-2">
                {currentContent.timeline.events.map((event, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div key={event.year} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-3 md:text-right' : 'md:pl-3 md:text-left'}`}>
                        <div className="group relative">
                          {isEven ? (
                            <div className="absolute inset-0 bg-gradient-to-l from-gold/10 to-transparent rounded-lg transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent rounded-lg transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                          )}
                          {isEven ? (
                            <div className="relative bg-gradient-to-l from-gray-900/95 to-black/95 backdrop-blur-sm rounded-lg p-3 md:p-3 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gold/25">
                              <div className="text-2xl md:text-2xl font-serif font-bold text-gold mb-1">{event.year}</div>
                              <h3 className="text-base md:text-base font-serif font-bold text-gold-light mb-1 classic-heading">
                                {event.title}
                              </h3>
                              <p className="text-gold-light/90 leading-snug classic-text text-sm md:text-sm">
                                {event.description}
                              </p>
                            </div>
                          ) : (
                            <div className="relative bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-sm rounded-lg p-3 md:p-3 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gold/25">
                              <div className="text-2xl md:text-2xl font-serif font-bold text-gold mb-1">{event.year}</div>
                              <h3 className="text-base md:text-base font-serif font-bold text-gold-light mb-1 classic-heading">
                                {event.title}
                              </h3>
                              <p className="text-gold-light/90 leading-snug classic-text text-sm md:text-sm">
                                {event.description}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Timeline Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gold rounded-full shadow-lg hidden md:block"></div>
                      
                      <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-3' : 'md:pr-3'}`}></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        
          {/* Legacy Section */}
          <div className="mb-20">
            <div className="classic-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-6 classic-heading">
                {currentContent.legacy.title}
              </h2>
              {'items' in currentContent.legacy && (
                <div className="space-y-3">
                  {currentContent.legacy.items.map((item: string, index: number) => (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-r from-gray-900/50 to-black/50 rounded-lg p-4 hover:from-gray-900/70 hover:to-black/70 transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gold rounded-full mr-4 shrink-0"></div>
                        <span className="text-gold-light/90 classic-text">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
