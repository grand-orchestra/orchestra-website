export interface HeroSlide {
  id: string;
  titleEn: string;
  titleMn: string;
  subtitleEn: string;
  subtitleMn: string;
  image: string;
  youtubeUrl: string;
  duration: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    titleEn: "Melody of Aspiration",
    titleMn: "ХҮСЛИЙН ТӨВӨРГӨӨН",
    subtitleEn: "On the occasion of the 50th anniversary of diplomatic relations between Mongolia and the Federal Republic of Germany, and within the framework of “Go Mongolia,” the National Academic Theatre of Opera and Ballet’s Mongolian State National Orchestra of Traditional Music presented the full-length concert program Beautiful Mongolia at the renowned Berlin Philharmonic on October 29, 2024.",
    subtitleMn: "Монгол улс, ХБНГУлсын дипломат харилцаа тогтоосны 50 жилийн ой, “Go Mongolia”-ын хүрээнд алдарт Берлиний Филармонид Үндэсний Урлагийн Их Театрын “Монгол төрийн үндэсний хөгжмийн их найрал” нь “Монголын сайхан орон” бүрэн хэмжээний тоглолтыг 2024 оны 10 сарын 29-нд толилууллаа.",
    image: "https://res.cloudinary.com/dhvup7uyy/image/upload/v1757652186/kvnekwvbu4pgxgdv7dco.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=N6Pdzg8T81o",
    duration: "5:18"
  },
  // {
  //   id: "2",
  //   titleEn: "Golden Strings",
  //   titleMn: "Алтан Утас",
  //   subtitleEn: "Experience the ethereal beauty of traditional Mongolian string instruments, from the delicate tones of the Shanz to the powerful resonance of the Ikh Khuur.",
  //   subtitleMn: "Уламжлалт монгол утас хөгжмийн зэмсгүүдийн сансрын гоо үзэсгэлэнг мэдрээрэй, Шанзагийн нарийн аялгуунаас Их хуурын хүчирхэг резонанс хүртэл.",
  //   image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=600&fit=crop",
  //   youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   duration: "3:12"
  // },
  // {
  //   id: "3",
  //   titleEn: "Nomadic Winds",
  //   titleMn: "Нүүдэлчин Салхи",
  //   subtitleEn: "The soul-stirring sounds of wind instruments echo across the vast Mongolian landscape, carrying stories of ancient nomadic traditions.",
  //   subtitleMn: "Салхин хөгжмийн зэмсгүүдийн сэтгэл хөдөлгөм дуу аялгуу нь Монголын өргөн уудам газар дээр цуурайдан, эртний нүүдэлчин уламжлалын түүхийг агуулсан.",
  //   image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&h=600&fit=crop",
  //   youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   duration: "2:58"
  // },
  {
    id: "4",
    titleEn: "Sacred Rhythms",
    titleMn: "Ариун Ритм",
    subtitleEn: "Discover the spiritual connection between traditional percussion instruments and the sacred ceremonies of Mongolian culture.",
    subtitleMn: "Уламжлалт цохилтын хөгжмийн зэмсгүүд болон Монголын соёлын ариун ёслолын хоорондын сүнслэг холболтыг нээж мэдээрэй.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "3:45"
  }
];
