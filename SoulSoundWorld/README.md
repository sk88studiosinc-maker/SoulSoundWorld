# SoulSound Master Build

A unified, modern web platform consolidating the entire SoulSound ecosystem into a single, cohesive deployed website.

## Overview

The SoulSound Master Build brings together five separate repositories into one comprehensive platform:

- **soulsound-v0** — Main hub site with landing page and navigation
- **Soulsound** — AI-powered music expression tool
- **Soulsound-revenue-accelerator** — Growth and monetization dashboard
- **SoulSoundWorld** — Growth engine and signal management
- **Soul-sound-blue-print** — Unified documentation

The Master Build is a **dark-themed, cosmic-ethereal** React + Tailwind CSS application that serves as the central hub for music, storytelling, creative tools, and the Frequency Stacking RPG system.

## Technology Stack

- **Frontend Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 with OKLCH color format
- **Component Library**: shadcn/ui
- **Routing**: Wouter (client-side)
- **Build Tool**: Vite
- **Deployment**: Manus WebDev

## Design Philosophy

**Ethereal Depth** — The site embraces a cosmic-ethereal aesthetic with intentional depth, grounded in the existing SoulSound brand identity.

### Core Design Principles

1. **Cosmic Minimalism** — Dark, spacious backgrounds with strategic use of light and color
2. **Resonance Through Motion** — Subtle animations that feel organic, not mechanical
3. **Hierarchical Clarity** — Typography and spacing guide the eye through layered content
4. **Depth & Texture** — Layered gradients, subtle blur, and shadow create perceived depth
5. **Intentional Restraint** — Fewer, more meaningful interactions over feature bloat

### Color Palette

| Element | Color | Usage |
|---------|-------|-------|
| Background | `#07060b` | Primary dark base |
| Panel | `rgba(255,255,255,0.04–0.06)` | Card backgrounds |
| Text Primary | `rgba(255,255,255,0.92)` | Main content |
| Accent Purple | `#8b5cf6` | Primary actions, highlights |
| Accent Pink | `#ec4899` | Secondary actions, gradients |
| Gold | `#ffd88a` | Tertiary accent, emphasis |

## Project Structure

```
client/
  public/           ← Configuration files only (favicon, robots.txt)
  src/
    pages/          ← Page-level components
    components/     ← Reusable UI & shadcn/ui
    contexts/       ← React contexts (ThemeProvider)
    lib/            ← Utility helpers
    App.tsx         ← Routes & top-level layout
    main.tsx        ← React entry point
    index.css       ← Global styles & theme variables
    content.json    ← Content data structure
server/             ← Placeholder for static deployment
shared/             ← Placeholder for compatibility
```

## Pages & Routes

### Main Hub

- **`/`** — Home page with tabbed navigation to all sections
  - Open Build
  - Music Hub
  - Story World
  - Expression Engine
  - Revenue Accelerator
  - Frequency Stacking
  - Signal Records
  - The Depth
  - Social World
  - Vault
  - Support & Tips

### Dedicated Pages

- **`/frequency-stacking`** — Complete Frequency Stacking RPG system documentation
  - Game overview and philosophy
  - Core attributes (Coherence, Resonance, Presence, Integrity)
  - Turn structure and mechanics
  - Player actions and cost system
  - Artifacts and rules

- **`/the-depth`** — Samzin Kreave artist bio and signal record
  - The Human Timeline
  - The Artist Timeline
  - The Mythic Timeline
  - Why the Name Matters
  - Where the Lore Lives

## Key Features

### 1. Music Hub
Links to Spotify, Suno, and BandLab for music discovery and creation.

### 2. Story World
Integration with Pocket FM stories: "Tomorrow's Yesterday Echo" and "Joker for the Queen".

### 3. Expression Engine
AI-powered caption and content generator (placeholder for future integration).

### 4. Revenue Accelerator
Dashboard for tracking growth, monetization, and connected assets (placeholder for future integration).

### 5. Frequency Stacking RPG
Complete tabletop game system with rules, mechanics, and player resources.

### 6. Signal Records
Archive of build milestones and ecosystem evolution.

### 7. The Depth
Artist bio and signal record for Samzin Kreave.

### 8. Social World
Centralized platform links for cross-platform engagement.

### 9. Vault
Artifacts and canon anchors for the SoulSound universe.

### 10. Support & Tips
Multiple ways to support the creator:
- Base wallet (crypto)
- Coinbase (fiat)
- Zora (NFT)
- Shopify store

## External Links

| Platform | Link |
|----------|------|
| Website | https://www.soulsoundworld.world |
| Spotify | https://open.spotify.com/artist/3uugCAf5GNkNToPtdWGcQl |
| Pocket FM | https://pocketfm.onelink.me/2IE7/edictfk9 |
| Shopify | https://soulsoundworldtech.myshopify.com/ |
| Zora | https://zora.co/@soulsound_samzinkreave |
| Base Wallet | 0x1942866814727812830Ce352154aB73A999b4cf9 |
| Base Profile | https://base.app/profile/soulsound |
| Suno | https://suno.com/@soulsoundsamzin |
| BandLab | https://www.bandlab.com/sk88studiozinc |

## Development

### Installation

```bash
cd /home/ubuntu/soulsound-master-build
pnpm install
```

### Development Server

```bash
pnpm run dev
```

The dev server runs on `http://localhost:3000` and includes hot module replacement (HMR).

### Build

```bash
pnpm run build
```

Generates optimized production build in `dist/`.

### Type Checking

```bash
pnpm run check
```

### Formatting

```bash
pnpm run format
```

## Styling & Theming

All global styles are defined in `client/src/index.css` using Tailwind CSS 4 with OKLCH color format. The theme is always set to dark mode via the ThemeProvider.

### Key CSS Variables

- `--background` — Primary dark background
- `--foreground` — Primary text color
- `--card` — Card background
- `--accent` — Primary accent (purple)
- `--border` — Border color
- `--muted` — Muted text color

## Assets

All images and media are uploaded via `manus-upload-file --webdev` and referenced by CDN URL to avoid deployment timeouts. Generated images include:

- `hero-cosmic-ethereal.png` — Main hero banner
- `music-hub-banner.png` — Music section background
- `story-world-banner.png` — Story section background
- `frequency-stacking-banner.png` — RPG section background
- `artist-bio-banner.png` — Artist bio section background

## Accessibility

- Minimum font size: 14px (body)
- Contrast ratio: WCAG AA minimum (4.5:1 for text)
- Touch targets: 44px minimum
- Full keyboard navigation support
- Focus rings always visible

## Responsive Design

Mobile-first breakpoints:
- Mobile: 320px–639px
- Tablet: 640px–1023px
- Desktop: 1024px+

## Future Enhancements

- [ ] Expression Engine AI integration (Gemini API)
- [ ] Revenue Accelerator dashboard with live data
- [ ] Signal Records timeline component
- [ ] Frequency Stacking player sheet generator
- [ ] Story World chapter tracking
- [ ] Social World analytics
- [ ] Vault artifact browser
- [ ] User authentication (Manus OAuth)
- [ ] Backend API integration

## Creator

**Samzin Kreave / SK88 Studios Inc**

- Website: https://www.soulsoundworld.world
- Spotify: https://open.spotify.com/artist/3uugCAf5GNkNToPtdWGcQl
- Zora: https://zora.co/@soulsound_samzinkreave

## License

Built for the SoulSound ecosystem. All rights reserved by Samzin Kreave / SK88 Studios Inc.

---

**Built slowly. Built honestly. Built from the soul.**
