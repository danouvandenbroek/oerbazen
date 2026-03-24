# OERBAZEN BUILD SPEC

## Stack
- Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion
- Deploy: Vercel via GitHub (repo: danouvandenbroek/oerbazen)

## Design System

### Colors
```css
--black:     #0D0D0D
--sand:      #E5E1D8
--sand-dark: #CFC7B8
--fire:      #C26A2E
--white:     #FFFFFF
```

### Typography
- Headlines: Bebas Neue (condensed, impact)
- Body: Inter (strak, leesbaar)

### Buttons
- Primary: bg-[#C26A2E] text-white px-8 py-3
- Secondary: border border-[#E5E1D8] text-[#E5E1D8]

## Homepage Flow (single page scroll journey)

### 1. HERO (fullscreen, video bg with 60% dark overlay)
```
OERBAZEN
De Anti-Retraite Retraite

Geen yoga matten.
Geen groene sapjes.
Drie dagen vuur, natuur
en eerlijke gesprekken.

[CTA] Bekijk het weekend
```

### 2. ANTI-RETREAT BLOK
```
Sommige retraites beginnen met stilte.
Wij beginnen met een bijl.
```

### 3. INTRO
```
Drie dagen weg.
Uit je hoofd.
In je lijf.
```

### 4. DAG 1 — AFBREKEN (bg: black)
```
Je komt aan.
Telefoon uit.
Rollen uit.
Je hoeft even niks te zijn.
```
UX: Rustig, veel ruimte, zachte fade-ins

### 5. DAG 2 — OERBAZEN GAMES (bg: black)
```
Je werkt.
Je bouwt.
Je draagt.
Je lacht.

Voor het soort humor
dat je alleen met mannen begrijpt.
```
Activities grid (6 cards): obstacle run, bijlwerpen, boomstam dragen, bouwen, precisie, teamwork
Geen verdere uitleg — mysterie bewaren
UX: Intens, meer beweging, energie

### 6. DAG 3 — RESET (bg: sand #E5E1D8, text: black)
```
Je loopt.
Alleen.
Geen afleiding.

Waar ren je voor weg?
Wat moet stoppen?
Wat ga je anders doen?
```
UX: Stil, minimaal, vragen als stiltevragen

### 7. QUOTE BLOK
```
Soms moet een man even verdwijnen.
Zodat hij sterker terugkomt.
```

### 8. TRIBE BLOK
```
Oerbazen is geen event.
Het is een tribe.

Mannen die elkaar blijven zien.
Die elkaar scherp houden.
```

### 9. AFSLUITING
```
Je gaat naar huis.
Niet anders.
Maar wel scherper.
```

### 10. FINALE CTA
```
[Knop] Word Oerbaas → /aanmelden
```

## Components
- Hero.tsx — fullscreen video + overlay + centered copy
- Section.tsx — wrapper met Framer Motion reveal (opacity 0→1, y 40→0, duration 0.6)
- DayBlock.tsx — herbruikbaar per dag (title, subtitle, bg color, children)
- ActivityCard.tsx — grid items voor dag 2
- QuoteBlock.tsx — groot citaat, centered
- CTA.tsx — fire button component
- Form.tsx — aanmeldformulier

## Formulier (/aanmelden)
Velden: naam, email, telefoon, leeftijd, waarom wil je komen, wat speelt er, neem je iemand mee
Submit: Formspree of API route

## Animatie
- Elke sectie: Framer Motion reveal (fade-in + translateY)
- Dag 1: rustig, zachte fade
- Dag 2: intens, grid energie
- Dag 3: stil, minimaal
- Performance: next/image, lazy loading, video poster fallback
- GEEN gimmicky effecten

## URL Structuur
/ ← homepage (journey)
/aanmelden

## MVP Scope
Fase 1: Homepage + Aanmelden + Live op Vercel

## Images (placeholders for now)
- Hero: kampvuur scene (placeholder gradient)
- Dag 2: activity icons/images (placeholder cards)
- Dag 3: natuur/stilte (placeholder)

## NIET DOEN
- Geen coachingssite vibe
- Geen spirituele clichés
- Geen uitleg overload
- Geen stock uitstraling
- Geen corporate layout
- Geen iconen overload
