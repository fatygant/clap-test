# Clapperly Landing Page

A modern landing page for Clapperly - Central Platform of Polish Film Industry. Built with Vue 3 and Tailwind CSS, generated from a Figma design.

## Features

- 🎨 Modern, responsive design based on Figma
- ⚡ Built with Vue 3 and Vite for fast development
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive
- 🌟 Hero section with compelling CTA
- 💼 Service showcase
- 💬 Testimonials section
- 📧 Contact and CTA sections

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Build for production:
```bash
npm run build
```

### Preview Production Build

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
clap-test/
├── src/
│   ├── views/
│   │   └── LandingView.vue    # Main landing page component
│   ├── router/
│   │   └── index.js           # Vue Router configuration
│   ├── App.vue                # Root component
│   ├── main.js                # Entry point
│   └── style.css              # Global styles with Tailwind
├── index.html                 # HTML entry point
├── package.json               # Dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── postcss.config.js         # PostCSS configuration
```

## Customization

### Colors

Colors are defined in `tailwind.config.js`:

- `clapperly-gold`: #d4af37
- `clapperly-dark`: #1a1d21
- `clapperly-gray`: #282a2e
- `clapperly-border`: #424242
- `clapperly-text`: #eaeaea
- `clapperly-text-dim`: darkgrey

### Fonts

The project uses Inter font family, loaded from Google Fonts in `index.html`.

## Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **Vue Router** - Official router for Vue.js
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing tool
- **Autoprefixer** - CSS vendor prefix plugin

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Clapperly. All rights reserved.
