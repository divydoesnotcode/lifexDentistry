# Frontend Design Brief — Dentist Personal / Portfolio Site

## Grounding

This is a personal site for a working dentist — part portfolio, part lifestyle journal, with appointment booking arriving later. The person visiting isn't comparison-shopping a dental chain; they're deciding whether they like and trust this specific human before they book a chair. The design should feel like a personal practice run by someone with taste and a life outside the clinic — not a stock "Dental Co." template. Primary job of the design: make the dentist feel real, skilled, and approachable in under 10 seconds of scrolling.

## Design Plan (Pass 1)

### Color
- `#F6F3EE` — Porcelain (base background — warm, soft white, not stark clinical white)
- `#1F3D3A` — Deep Pine Teal (primary text / dark sections — evokes clean + calm, not corporate navy)
- `#EF6F5A` — Living Coral (single accent — CTAs, links, small highlights only)
- `#CFE0D8` — Sage Mist (secondary surface — section backgrounds, cards, dividers)
- `#8A8177` — Warm Stone (muted text, captions, secondary labels)
- `#2B2B28` — Near-Ink (body copy color, not pure black)

Rule: coral is used sparingly — one call to action, one accent shape per section max. It never appears twice in the same viewport.

### Type
- **Display / Headlines:** Newsreader (serif, italic weight used selectively for emphasis moments only — not on every headline)
- **Body / UI:** Work Sans (humanist sans, clean at small sizes for service lists and captions)
- One family pairing only. Headlines set large and loose; body copy capped at ~70 characters per line.
- No tracked-out all-caps labels anywhere. Section labels are set in regular sentence case, small size, Warm Stone color — a whisper, not a shout.

### Layout
- Asymmetric editorial grid, not centered-hero-with-stat-card. Content breathes with generous whitespace rather than being boxed into uniform cards.
- Left-aligned text throughout (no centered paragraphs); images break the grid intentionally rather than sitting in a uniform gallery.

**Home hero (ASCII wireframe):**
```
+-----------------------------------------------+
|  Nav: Name         About  Services  Gallery... |
|                                                 |
|   [ photo: dentist,        "First name intro   |
|     natural setting,        line, in their     |
|     not a stock lab coat ]  own voice."         |
|                              -- short line      |
|                              about approach     |
|                                                 |
|                              [ See my work -> ] |
+-----------------------------------------------+
```
The hero opens with a real, warm photo of the dentist (not an icon, not a stat) — the most characteristic thing in this subject's world is the person, not a metric.

**Services section:** a simple list, not a grid of identical icon-cards. Each service gets a short line of plain-language description, left-aligned, separated by hairline dividers in Sage Mist — used because services genuinely are a sequential, scannable list, not decoration.

**Gallery:** asymmetric photo grid — mixed image sizes (some full-width, some half), like a personal photo journal rather than a uniform portfolio wall.

**Contact/footer:** dark Deep Pine Teal band, Porcelain text, single coral CTA button.

### Principles
1. The person comes before the practice — photography and voice lead, credentials support.
2. One accent color, spent deliberately, never decorative.
3. Structure (dividers, spacing, sequence) only where the content is actually sequential or grouped — never added for texture.
4. Warm but precise: the softness of the palette is balanced by tight, confident typography and alignment.
5. Quiet motion: one entrance moment on page load (hero photo + headline settle in together), nothing else animates on scroll. Hover states are simple opacity/underline shifts, not lifts or shadows.

## Review Against the Brief (Pass 2)

Checked against common AI-generated defaults:
- ❌ Avoided cream-background + terracotta-accent + big serif combo — swapped terracotta for a punchier coral and paired it with a teal anchor so the palette reads as a considered pair, not the default.
- ❌ Avoided the SaaS-card kit (uniform rounded cards, soft grey shadows) — services are a list, gallery is an asymmetric grid, nothing is a repeated card.
- ❌ Avoided tracked-out ALL-CAPS eyebrows and middot-joined meta strings — labels are sentence case and minimal.
- ❌ Avoided numbered-marker sequences except where content is genuinely sequential (none currently — revisit only if a "step-by-step visit process" section gets added).
- ✅ Kept: one deliberate accent color, one motion moment, photography-led hero — these are choices made for this subject (a person-first practice), not leftover defaults.

## Accessibility & Quality Floor
- Body text (Near-Ink on Porcelain) meets WCAG AA contrast.
- Coral CTA text is white/Porcelain on coral, checked for AA contrast — do not use coral text on Porcelain background for body copy (fails contrast at small sizes).
- Visible keyboard focus states on all links/buttons (use a Deep Pine Teal focus ring, not a default blue browser outline).
- Respect `prefers-reduced-motion` — disable the hero entrance animation for users who have it set.
- Fully responsive: hero image stacks above text on mobile; gallery collapses to single column below 640px.

## Copy Voice
- First person where it's the dentist speaking ("I started this practice because...").
- Plain language for services — name what the patient gets, not the clinical procedure code ("A cleaning that doesn't feel rushed" over "Routine prophylaxis").
- CTA button says exactly what happens: "See my work," "Get in touch" — not "Submit" or "Learn more."
- No apologetic or salesy tone in the empty/placeholder Booking page — state plainly what's coming: "Online booking is on its way. For now, reach out directly below."

## Notes for the Coding Agent
- Implement colors and fonts as CSS variables / Tailwind theme tokens, not hardcoded hex values scattered through components, so the palette can be adjusted centrally.
- Do not introduce a card-grid pattern for Services — keep it a divided list per the layout plan above.
- Load Newsreader and Work Sans via next/font (Google Fonts) rather than a CDN link tag.
