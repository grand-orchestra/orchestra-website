# Mongolian National Orchestra Website

A beautiful, bilingual website for the Mongolian National Orchestra featuring traditional Mongolian instruments, upcoming concerts, and rich cultural content.

## Features

- 🌍 **Bilingual Support**: English and Mongolian languages
- 🌙 **Dark/Light Mode**: Toggle between themes with persistent preference
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🎵 **Instrument Showcase**: Detailed pages for traditional Mongolian instruments
- 🎭 **Concert Information**: Upcoming performances with ticket links
- 🎨 **Modern Design**: Clean, elegant interface with smooth animations
- 🎨 **Custom Colors**: Burgundy red and gold theme colors

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── music-instruments/ # Instruments pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # Reusable components
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   ├── hero-carousel.tsx # Homepage hero section
│   ├── concerts-section.tsx # Upcoming concerts
│   └── about-section.tsx # About section
├── contexts/             # React contexts
│   └── theme-context.tsx # Dark/light mode
├── data/                 # Static data
│   ├── instruments.ts    # Instrument information
│   ├── concerts.ts       # Concert data
│   ├── hero.ts          # Hero carousel data
│   └── about-images.ts  # About section images
├── lib/                  # Utility functions
│   └── utils.ts         # Tailwind class utilities
└── i18n.ts              # Internationalization config
```

## Pages

- **Homepage**: Hero carousel, upcoming concerts, about section
- **Instruments**: Grid view of all traditional instruments
- **Instrument Detail**: Comprehensive information about each instrument
- **Concerts**: List of upcoming performances
- **About**: Orchestra information and history
- **Contact**: Contact information and social media

## Customization

### Colors
The website uses custom colors defined in `src/app/globals.css`:
- Burgundy: `#800020`
- Gold: `#FFD700`

### Content
All content is stored in:
- `messages/en.json` - English translations
- `messages/mn.json` - Mongolian translations
- `src/data/` - Static data files

### Images
Images are sourced from Unsplash and can be replaced with actual orchestra photos.

## Deployment

The website is ready for deployment on Vercel, Netlify, or any other Next.js-compatible platform.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with lazy loading
- Efficient component rendering
- Minimal bundle size
- Fast page loads

## Accessibility

- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Semantic HTML structure

## License

This project is created for the Mongolian National Orchestra.
