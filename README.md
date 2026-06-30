# 🎨 Kalakriti — The Fine Arts Society of DTU

Welcome to the repository for the **Kalakriti Website**.

The official website for **Kalakriti**, the fine arts society of Delhi Technological University. Featuring immersive video backgrounds, scroll-driven animations, a bento-grid showcase, and dedicated pages for events, gallery, wings, and the flagship **Rang Manch** inter-college fine arts competition.

## 🚀 Features & Architecture

This project is built using modern React ecosystem tools for a highly animated, performant, and interactive experience.

### Core Tech Stack
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (with custom utility classes in `globals.css`)
- **Animation**: [GSAP](https://gsap.com/) (GreenSock Animation Platform) + ScrollTrigger, Framer Motion
- **Icons**: React Icons (`react-icons`)
- **Components**: Aceternity UI inspired elements

### 🖼️ Key Pages & Components

| Feature | Description |
| :--- | :--- |
| **Hero Section** | Custom polygon clip-path entrance animation with synced background videos and a central mini-preview thumbnail |
| **About Landing** | Reusable hero layout introducing the society and its various wings |
| **Bento Grid** | Tilt-enabled interactive cards in the "Features" section showcasing the Rang Manch competition |
| **Audio Toggle** | Navbar background audio toggle with animated equalizer indicator bars |
| **Rang Manch Pages** | Dedicated sub-pages for the flagship event and fine arts categories |
| **Wings Pages** | Sub-pages for Chiaroscuro, Impressions, Sculpta, Canvas, and Spectrum with layout grids and focus cards |

---

## 📁 Project Structure

```text
├── app/                      # Next.js App Router directory
│   ├── about/                # Teams and Wings pages
│   │   ├── canvas/           # Canvas wing page
│   │   ├── chiaroscuro/      # Chiaroscuro wing page
│   │   ├── impressions/      # Impressions wing page
│   │   ├── sculpta/          # Sculpta wing page
│   │   └── spectrum/         # Spectrum wing page
│   ├── gallery/              # Artworks and masterpieces gallery
│   ├── alumini/              # Alumni network page
│   ├── events/               # Events timeline and showcase
│   ├── rang-manch/           # Rang Manch competition page
│   ├── globals.css           # Global Tailwind and custom utilities
│   ├── layout.tsx            # Root layout with fonts & metadata
│   └── page.tsx              # Main landing page
├── components/               # Reusable UI components
│   ├── ui/                   # Micro-components (buttons, text effects)
│   ├── Hero.tsx              # Main landing hero with video loader
│   ├── About.tsx             # About section with scroll-clip reveal
│   ├── Features.tsx          # Bento grid showcasing Rang Manch
│   ├── Story.tsx             # Interactive floating image story reveal
│   ├── Contact.tsx           # Contact section with clipped image layout
│   ├── DoremipaHero.tsx      # Rang Manch hero section
│   ├── DoremipaFeatures.tsx  # Competition categories grid
│   ├── DoremipaCard.tsx      # Individual competition card
│   ├── EventTmeline.tsx      # Vertical timeline for society events
│   ├── Navbar.tsx            # Sticky navbar with audio toggle
│   └── Footer.tsx            # Footer with social links
├── public/                   # Static assets
│   ├── audio/                # Background audio track
│   ├── fonts/                # Custom local fonts
│   ├── img/                  # Images and graphics
│   └── videos/               # Large video assets for hero sections
```

---

## 🐛 Recent Bug Fixes & Changes

- **Kalakriti Rebranding**: Completely rebranded from Madhurima (music) to Kalakriti (fine arts), updating all copy, event names (Rang Manch), and team names (Chiaroscuro, Impressions, Sculpta, Canvas, Spectrum).
- **Hero Video Loading Fix**: Fixed a critical infinite loading bug caused by shared React refs and strict equality checks. Added a fallback timeout and proper `preload` attributes.
- **Next.js `<Image>` Optimization**: Converted standard `<img>` tags to Next.js `<Image>` components across About, Contact, Navbar, Story, and Footer for automatic lazy loading and format optimization.
- **Mobile Video Support**: Added `playsInline` attributes to all video elements to prevent unwanted fullscreen takeovers on iOS.
- **Metadata Deduplication**: Removed redundant `<title>` and `<meta>` tags from `<head>` that were conflicting with Next.js's built-in `metadata` export.
- **Word Animation Fix**: Fixed `AnimatedTitle` to animate by words rather than character-by-character.
- **Click Handler Placement**: Fixed click target areas for interactive buttons.

---

## 💻 Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
npm start
```

## 📜 License & Copyright

© 2024 Kalakriti — The Fine Arts Society of DTU. All Rights Reserved.
