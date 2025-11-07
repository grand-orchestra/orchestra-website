'use client';

import { useLanguage } from '@/contexts/language-context';
import { aboutImages } from '@/data/about-images';
import { Award, Users, Music, Calendar, MapPin, Phone, Mail, Crown, Star, Gem } from 'lucide-react';

export default function AboutPage() {
  const { t, language } = useLanguage();

  const stats = [
    {
      icon: Users,
      number: '70+',
      label: language === 'en' ? 'Musicians' : 'Хөгжимчид',
      description: language === 'en' ? 'Professional musicians' : 'Мэргэжлийн хөгжимчид'
    },
    {
      icon: Calendar,
      number: '60+',
      label: language === 'en' ? 'Years' : 'Жил',
      description: language === 'en' ? 'Of musical excellence' : 'Хөгжмийн урлагийн түүх'
    },
    {
      icon: Music,
      number: '200+',
      label: language === 'en' ? 'Performances' : 'Тоглолт',
      description: language === 'en' ? 'Annual concerts' : 'Жил бүрийн концерт'
    },
    {
      icon: Award,
      number: '15+',
      label: language === 'en' ? 'Awards' : 'Шагнал',
      description: language === 'en' ? 'National recognition' : 'Үндэсний хүлээн зөвшөөрөл'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Decorative Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" suppressHydrationWarning>
          {/* Hero Section */}
          <div className="text-center mb-20 relative">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-gold mb-8 classic-heading relative">
              <span className="relative">
                {language === 'en' ? 'About Mongolian National Orchestra' : 'Монгол Улсын Үндэсний Оркестрын тухай'}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold"></div>
              </span>
            </h1>
            
            <div className="max-w-5xl mx-auto">
              <p className="text-xl lg:text-2xl text-gold-light/90 leading-relaxed classic-text mb-8">
                {language === 'en' 
                  ? 'Preserving the rich musical heritage of Mongolia through traditional instruments and contemporary performances, while fostering cultural exchange and musical innovation.'
                  : 'Уламжлалт зэмсгүүд болон орчин үеийн тоглолтуудаар Монголын баялаг хөгжмийн өвийг хадгалж, соёлын солилцоо болон хөгжмийн шинэчлэлийг дэмжин ажилладаг байгууллага.'
                }
              </p>
              
              {/* Decorative Quote */}
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-0 top-0 text-6xl text-gold/20 font-serif">"</div>
                <blockquote className="text-lg text-gold/80 italic font-serif pl-8 pr-8">
                  {language === 'en' 
                    ? 'Music is the universal language of mankind, and in our orchestra, we speak it with the soul of Mongolia.'
                    : 'Хөгжим бол хүн төрөлхтний бүх нийтийн хэл бөгөөд бидний оркестрт Монголын сүнсээр ярьдаг.'
                  }
                </blockquote>
                <div className="absolute right-0 bottom-0 text-6xl text-gold/20 font-serif">"</div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-gold mb-4 classic-heading">
                {language === 'en' ? 'Our Legacy in Numbers' : 'Бидний өвийн тоо'}
              </h2>
              <div className="w-16 h-1 bg-gold mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 text-center hover:border-gold/60 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-gold/20">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors duration-300">
                        <stat.icon className="w-8 h-8 text-gold" />
                      </div>
                    </div>
                    <div className="text-4xl font-serif font-bold text-gold mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-xl font-semibold text-gold-light mb-2 classic-text">
                      {stat.label}
                    </div>
                    <div className="text-gold/70 text-sm classic-text">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gold mb-6 classic-heading">
                {language === 'en' ? 'Our Purpose & Vision' : 'Бидний зорилго болон хараа'}
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
              <p className="text-gold-light/80 text-lg classic-text max-w-3xl mx-auto">
                {language === 'en' 
                  ? 'Guided by tradition, inspired by innovation, and dedicated to excellence in every performance.'
                  : 'Уламжлалаар удирдуулж, шинэчлэлээр урамшуулж, тоглолт бүрт төгс байдлыг зорин ажилладаг.'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm border border-gold/40 rounded-3xl p-10 hover:border-gold/70 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gold/25">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                      <Crown className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gold classic-heading">
                      {language === 'en' ? 'Our Mission' : 'Бидний эрхэм зорилго'}
                    </h3>
                  </div>
                  <p className="text-gold-light/90 leading-relaxed classic-text text-lg">
                    {language === 'en'
                      ? 'To preserve, promote, and celebrate the rich musical traditions of Mongolia while fostering innovation and cultural exchange. We strive to inspire future generations through the power of traditional music and contemporary compositions.'
                      : 'Монголын баялаг хөгжмийн уламжлалыг хадгалж, дэмжиж, тэмдэглэх, шинэчлэл болон соёлын солилцоог дэмжин ажиллах. Уламжлалт хөгжмийн хүч болон орчин үеийн бүтээлүүдийн хөгжмийн тайлбарыг удирддаг.'
                    }
                  </p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm border border-gold/40 rounded-3xl p-10 hover:border-gold/70 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gold/25">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                      <Star className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gold classic-heading">
                      {language === 'en' ? 'Our Vision' : 'Бидний алсын хараа'}
                    </h3>
                  </div>
                  <p className="text-gold-light/90 leading-relaxed classic-text text-lg">
                    {language === 'en'
                      ? 'To be the leading cultural institution in Mongolia, recognized internationally for our commitment to musical excellence, cultural preservation, and innovative performances that bridge traditional and contemporary music.'
                      : 'Монголд тэргүүлэх соёлын байгууллага болж, хөгжмийн урлагийн төгс байдал, соёлын хадгалт, уламжлалт болон орчин үеийн хөгжмийг холбосон шинэлэг тоглолтуудаар олон улсад хүлээн зөвшөөрөгдөх.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* History Timeline */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gold mb-6 classic-heading">
                {language === 'en' ? 'Our Journey Through Time' : 'Цаг хугацааны урсгал дахь бидний замнал'}
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
              <p className="text-gold-light/80 text-lg classic-text max-w-3xl mx-auto">
                {language === 'en' 
                  ? 'A legacy of musical excellence spanning over six decades of cultural preservation and artistic innovation.'
                  : 'Соёлын хадгалт болон урлагийн шинэчлэлийн зургаан арван жилийн турш хөгжмийн урлагийн төгс байдлын өвийг бий болгосон.'
                }
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold via-gold/60 to-gold"></div>
              
              <div className="space-y-16">
                {/* 1962 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-l from-gold/10 to-transparent rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                      <div className="relative bg-gradient-to-l from-gray-900/95 to-black/95 backdrop-blur-sm border border-gold/40 rounded-2xl p-8 hover:border-gold/70 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gold/25">
                        <div className="text-5xl font-serif font-bold text-gold mb-4">1962</div>
                        <h3 className="text-2xl font-serif font-bold text-gold-light mb-4 classic-heading">
                          {language === 'en' ? 'Foundation' : 'Үүсгэн байгуулагдсан'}
                        </h3>
                        <p className="text-gold-light/90 leading-relaxed classic-text">
                          {language === 'en'
                            ? 'At the initiative of L. Murdorj—People\'s Artist of Mongolia, double State Prize laureate, and distinguished composer—the National Orchestra of Traditional Music was founded, bringing together an ensemble of more than fifty musicians.'
                            : 'Ардын жүжигчин, Төрийн хошой шагналт, Хөгжмийн зохиолч Л.Мөрдоржийн санаачлагаар "Үндэсний Хөгжмийн Их Найрал" 50 гаруй хүний бүрэлдэхүүнтэй байгуулагджээ.'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold rounded-full border-4 border-black shadow-lg"></div>
                  
                  <div className="w-1/2 pl-8"></div>
                </div>
                
                {/* 2005 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold rounded-full border-4 border-black shadow-lg"></div>
                  
                  <div className="w-1/2 pl-8">
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                      <div className="relative bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-sm border border-gold/40 rounded-2xl p-8 hover:border-gold/70 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gold/25">
                        <div className="text-5xl font-serif font-bold text-gold mb-4">2005</div>
                        <h3 className="text-2xl font-serif font-bold text-gold-light mb-4 classic-heading">
                          {language === 'en' ? 'Presidential Decree' : 'Ерөнхийлөгчийн зарлиг'}
                        </h3>
                        <p className="text-gold-light/90 leading-relaxed classic-text">
                          {language === 'en'
                            ? 'The National Orchestra of Traditional Music has been expanded and restructured into the \'Mongolian Grand National Orchestra of Traditional Music.\''
                            : 'Үндэсний хөгжмийн их найрлыг "Монгол Төрийн Үндэсний Хөгжмийн Их Найрал" болгож бүтэц бүрэлдхүүнийг улам өргөжүүлжээ.'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 2025 */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-l from-gold/10 to-transparent rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                      <div className="relative bg-gradient-to-l from-gray-900/95 to-black/95 backdrop-blur-sm border border-gold/40 rounded-2xl p-8 hover:border-gold/70 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gold/25">
                        <div className="text-5xl font-serif font-bold text-gold mb-4">2025</div>
                        <h3 className="text-2xl font-serif font-bold text-gold-light mb-4 classic-heading">
                          {language === 'en' ? 'Modern Era' : 'Орчин үе'}
                        </h3>
                        <p className="text-gold-light/90 leading-relaxed classic-text">
                          {language === 'en'
                            ? 'The orchestra continues to present numerous masterpieces of both national and world classical music at a highly professional level, delighting audiences and listeners alike.'
                            : 'Үндэсний болон дэлхийн сонгодог олон арван бүтээлүүдийг мэргэжлийн өндөр түвшинд туурвин үзэгч, сонсогчдын сонорыг мялаасаар байна.'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold rounded-full border-4 border-black shadow-lg"></div>
                  
                  <div className="w-1/2 pl-8"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gold mb-6 classic-heading">
                {language === 'en' ? 'Our Distinguished Leadership' : 'Бидний нэр хүндтэй удирдлага'}
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
              <p className="text-gold-light/80 text-lg classic-text max-w-3xl mx-auto">
                {language === 'en' 
                  ? 'Meet the visionary leaders who guide our orchestra with passion, expertise, and unwavering dedication to musical excellence.'
                  : 'Хөгжмийн урлагийн төгс байдалд хүсэл тэмүүлэл, мэргэжлийн чадвар, тэсч тэвчээртэй хандалтаар бидний оркестрыг удирддаг алсын хараатай удирдагч нартай танилцаарай.'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm border border-gold/40 rounded-3xl p-8 text-center hover:border-gold/70 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gold/25">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-gold to-gold-dark rounded-full mx-auto flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <span className="text-black text-3xl font-bold font-serif">БД</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                      <Crown className="w-4 h-4 text-black" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gold-light mb-2 classic-heading">
                    {language === 'en' ? 'Batdorj Davaa' : 'Батдорж Даваа'}
                  </h3>
                  <p className="text-gold font-semibold mb-4 text-lg">
                    {language === 'en' ? 'Artistic Director' : 'Урлагийн захирал'}
                  </p>
                  <p className="text-gold-light/80 leading-relaxed classic-text">
                    {language === 'en'
                      ? 'Leading the artistic vision and musical direction of the orchestra with decades of experience in traditional Mongolian music.'
                      : 'Уламжлалт монгол хөгжмийн талаар олон жилийн туршлагатайгаар оркестрын урлагийн хараа болон хөгжмийн чиглэлийг удирддаг.'
                    }
                  </p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm border border-gold/40 rounded-3xl p-8 text-center hover:border-gold/70 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gold/25">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-gold to-gold-dark rounded-full mx-auto flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <span className="text-black text-3xl font-bold font-serif">СБ</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-black" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gold-light mb-2 classic-heading">
                    {language === 'en' ? 'Suvd Bat' : 'Сүвд Бат'}
                  </h3>
                  <p className="text-gold font-semibold mb-4 text-lg">
                    {language === 'en' ? 'Executive Director' : 'Гүйцэтгэх захирал'}
                  </p>
                  <p className="text-gold-light/80 leading-relaxed classic-text">
                    {language === 'en'
                      ? 'Overseeing operations and strategic development of the organization with a focus on cultural preservation and growth.'
                      : 'Соёлын хадгалт болон хөгжлийг анхаарч байгууллагын үйл ажиллагаа болон стратегийн хөгжлийг удирддаг.'
                    }
                  </p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm border border-gold/40 rounded-3xl p-8 text-center hover:border-gold/70 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gold/25">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-gold to-gold-dark rounded-full mx-auto flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <span className="text-black text-3xl font-bold font-serif">МБ</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                      <Music className="w-4 h-4 text-black" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gold-light mb-2 classic-heading">
                    {language === 'en' ? 'Munkhbayar Bold' : 'Мөнхбаяр Болд'}
                  </h3>
                  <p className="text-gold font-semibold mb-4 text-lg">
                    {language === 'en' ? 'Principal Conductor' : 'Ерөнхий дирижер'}
                  </p>
                  <p className="text-gold-light/80 leading-relaxed classic-text">
                    {language === 'en'
                      ? 'Leading performances and musical interpretation of traditional pieces with exceptional artistry and deep cultural understanding.'
                      : 'Гайхамшигтай урлагийн чадвар болон гүн гүнзгий соёлын ойлголттойгоор тоглолтууд болон уламжлалт бүтээлүүдийн хөгжмийн тайлбарыг удирддаг.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gold mb-6 classic-heading">
                {language === 'en' ? 'Connect With Us' : 'Бидэнтэй холбоо барина уу'}
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
              <p className="text-gold-light/80 text-lg classic-text max-w-3xl mx-auto">
                {language === 'en' 
                  ? 'We welcome your inquiries, collaboration proposals, and feedback. Reach out to us through any of the channels below.'
                  : 'Танаас ирсэн асуулт, хамтын ажиллагааны санал, санал хүсэлтийг хүлээн авч байна. Доорх сувгуудаар бидэнтэй холбоо барина уу.'
                }
              </p>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm border border-gold/40 rounded-3xl p-12 hover:border-gold/70 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gold/25">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="text-center group/item">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full mx-auto mb-6 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 shadow-2xl">
                      <MapPin className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gold-light mb-4 classic-heading">
                      {language === 'en' ? 'Address' : 'Хаяг'}
                    </h3>
                    <p className="text-gold-light/90 classic-text text-lg">
                      {language === 'en' ? 'Ulaanbaatar, Mongolia' : 'Улаанбаатар, Монгол'}
                    </p>
                  </div>
                  
                  <div className="text-center group/item">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full mx-auto mb-6 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 shadow-2xl">
                      <Phone className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gold-light mb-4 classic-heading">
                      {language === 'en' ? 'Phone' : 'Утас'}
                    </h3>
                    <p className="text-gold-light/90 classic-text text-lg">+976 11 123 456</p>
                  </div>
                  
                  <div className="text-center group/item">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full mx-auto mb-6 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 shadow-2xl">
                      <Mail className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gold-light mb-4 classic-heading">
                      {language === 'en' ? 'Email' : 'И-мэйл'}
                    </h3>
                    <p className="text-gold-light/90 classic-text text-lg">info@mongolianorchestra.mn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
