# SoulSound Master Build — Design Strategy

## Design Philosophy: Ethereal Depth

The SoulSound Master Build embraces a **cosmic-ethereal aesthetic** with intentional depth, grounded in the existing brand identity from soulsound-v0.

### Core Design Principles

1. **Cosmic Minimalism**: Dark, spacious backgrounds with strategic use of light and color. Avoid clutter; every element serves narrative.
2. **Resonance Through Motion**: Subtle animations that feel organic, not mechanical. Micro-interactions that reward attention.
3. **Hierarchical Clarity**: Typography and spacing guide the eye through layered content without overwhelming.
4. **Depth & Texture**: Layered gradients, subtle blur, and shadow create perceived depth in a flat medium.
5. **Intentional Restraint**: Fewer, more meaningful interactions over feature bloat.

### Color Palette

| Role | Color | Usage |
|------|-------|-------|
| Background | `#07060b` | Primary dark base |
| Panel | `rgba(255,255,255,0.04–0.06)` | Card backgrounds |
| Border | `rgba(255,255,255,0.10)` | Subtle separation |
| Text Primary | `rgba(255,255,255,0.92)` | Main content |
| Text Muted | `rgba(255,255,255,0.55–0.72)` | Secondary content |
| Accent A (Purple) | `rgba(139,92,246,0.95)` | Primary action, highlights |
| Accent B (Pink) | `rgba(236,72,153,0.85)` | Secondary action, gradients |
| Gold | `rgba(255,216,138,0.xx)` | Tertiary accent, emphasis |

### Typography System

- **Display Font**: System UI with bold weight (750–850) for headings
- **Body Font**: System UI, regular weight (400–500) for body text
- **Mono Font**: System UI Monospace for code/addresses
- **Hierarchy**:
  - H1: `clamp(26px, 4vw, 42px)`, letter-spacing 0.02em
  - H2: `1.35rem`, font-weight 700
  - Body: `1rem`, line-height 1.55
  - Small: `0.95rem`, color muted

### Layout Paradigm

- **Container**: `max-width: 980px`, centered with responsive padding
- **Spacing**: 12–28px gaps, consistent rhythm
- **Grid**: 12-column for complex layouts; single-column responsive
- **Cards**: 16–18px border-radius, subtle shadows, glass-morphism where appropriate

### Signature Elements

1. **Radial Gradient Backdrop**: Purple and pink radial gradients at top, fading to dark base
2. **Glass Panels**: Semi-transparent cards with 1px borders and backdrop blur
3. **Gradient Buttons**: Purple-to-pink linear gradients on primary CTAs
4. **Signal Indicators**: Subtle animated dots or bars for "live" states
5. **Dividers**: Horizontal lines with opacity 0.4 for section breaks

### Interaction Philosophy

- **Hover States**: Subtle brightness increase, border highlight, slight scale
- **Active States**: Gradient background, full opacity
- **Disabled States**: Reduced opacity, no cursor change
- **Transitions**: 200–300ms ease-in-out for smooth motion
- **Micro-interactions**: Toast notifications for actions, loading spinners for async

### Animation Guidelines

- **Entrance**: Fade-in + slight scale-up (150ms) on page load
- **Hover**: Brightness/opacity shift (200ms) on interactive elements
- **Loading**: Subtle pulse or spinner (continuous)
- **Transitions**: Smooth fade between sections (300ms)
- **Avoid**: Jarring animations, excessive motion, auto-play video

### Section-Specific Guidance

#### Hero/Landing
- Large, bold heading with tagline
- Radial gradient backdrop
- Mission statement in a glass panel
- Tab navigation for major sections
- CTA buttons with gradient styling

#### Music Hub
- Spotify embed grid
- Suno link with description
- BandLab studio link
- Music catalog cards with play buttons

#### Story World
- Pocket FM story cards
- Narrative universe description
- Chapter/episode tracking
- Story-specific imagery

#### Expression Engine
- Input field for music link
- Analysis results cards
- Caption/hashtag output
- Video generation interface
- Camera studio modal

#### Revenue Accelerator
- Health score display
- Opportunity cards
- Connected assets grid
- Revenue projection chart
- Business adjustment recommendations

#### Frequency Stacking
- Game overview section
- Core concepts explanation
- Classes/Cities/Factions cards
- Artifacts showcase
- Player sheet download
- Quickstart guide

#### Signal Records
- Timeline of build milestones
- Archive entries with dates
- Status indicators
- Chronological ordering

#### The Depth
- Artist bio section
- Signal record format
- Thematic imagery
- Links to external presence

#### Social World
- Platform link cards
- Visibility/reach explanation
- Call-to-action for engagement
- Weekly signal log reference

#### Vault
- Artifacts showcase
- Canon anchors
- Lore documentation
- Interactive elements

#### Support/Tips
- Base wallet address (copyable)
- Coinbase link
- Zora profile
- Shopify store link
- Tip jar explanation

---

## Implementation Notes

- All images must be uploaded via `manus-upload-file --webdev` and referenced by CDN URL
- Tailwind CSS 4 with OKLCH color format for theme variables
- shadcn/ui components for consistency
- Wouter for client-side routing
- Framer Motion for advanced animations (if needed)
- No backend API calls; static content only

---

## Accessibility & Responsiveness

- Minimum font size: 14px (body)
- Contrast ratio: WCAG AA minimum (4.5:1 for text)
- Touch targets: 44px minimum
- Mobile-first breakpoints: 640px, 820px, 1024px
- Keyboard navigation: Full support via Tab, Enter, Escape
- Focus rings: Always visible with ring color

---

## Next Steps

1. Generate 3–5 high-quality hero/banner images using generate_image
2. Build core page structure in React (Home, sections as routes)
3. Populate content from source repositories
4. Integrate external embeds (Spotify, Suno, BandLab, Pocket FM)
5. Implement interactive components (tabs, modals, forms)
6. Test responsive design and accessibility
7. Deploy and validate

