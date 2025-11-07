export interface Concert {
  id: string;
  titleEn: string;
  titleMn: string;
  date: string;
  time: string;
  venueEn: string;
  venueMn: string;
  descriptionEn: string;
  descriptionMn: string;
  ticketUrl: string;
  image: string;
}

export const concerts: Concert[] = [
  {
    id: "1",
    titleEn: "Traditional Mongolian Melodies",
    titleMn: "Уламжлалт Монгол Аялгуу",
    date: "2024-12-15",
    time: "19:00",
    venueEn: "State Opera and Ballet Theatre",
    venueMn: "Улсын Дуурь Балетын Театр",
    descriptionEn: "An evening of traditional Mongolian music featuring the Morin Khuur and other traditional instruments.",
    descriptionMn: "Морин хуур болон бусад уламжлалт зэмсгүүдээр тоглогдох уламжлалт монгол хөгжмийн орой.",
    ticketUrl: "https://example.com/tickets",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
  },
  {
    id: "2",
    titleEn: "Nomadic Sounds of the Steppe",
    titleMn: "Талын Нүүдэлчин Дуу",
    date: "2024-12-22",
    time: "20:00",
    venueEn: "Central Cultural Palace",
    venueMn: "Төв Соёлын Ордон",
    descriptionEn: "Experience the authentic sounds of the Mongolian steppe through traditional instruments and throat singing.",
    descriptionMn: "Уламжлалт зэмсгүүд болон хоолойн дуугаар монгол талын жинхэнэ дуу аялгуутай танилцаарай.",
    ticketUrl: "https://example.com/tickets",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
  },
  {
    id: "3",
    titleEn: "Golden Strings of Mongolia",
    titleMn: "Монголын Алтан Утас",
    date: "2024-12-29",
    time: "18:30",
    venueEn: "National Concert Hall",
    venueMn: "Үндэсний Концертын Танхим",
    descriptionEn: "A special performance showcasing the diversity of Mongolian string instruments.",
    descriptionMn: "Монголын утас хөгжмийн зэмсгүүдийн олон янз байдлыг харуулсан онцгой тоглолт.",
    ticketUrl: "https://example.com/tickets",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
  }
];
