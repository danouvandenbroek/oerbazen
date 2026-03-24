# OERBAZEN — Content Structure & Placeholders

Dit document toont waar content moet komen op de site, georganiseerd per sectie.

---

## 🏠 HOMEPAGE (app/page.tsx)

### 1. HERO SECTION
**Locatie:** `<Hero />`
- **Titel:** [PLACEHOLDER: Hoofdtitel — meestal "OERBAZEN" of event naam]
- **Subtitle:** ✅ "De Anti-Retraite Retraite"
- **Background Video/Image:** [PLACEHOLDER: Hero backdrop]
- **CTA Button:** ✅ "Bekijk het weekend"

---

### 2. ANTI-RETREAT INTRO
**Locatie:** 2e `<Section>`
- **Quote tekst:** ✅ "Sommige retraites beginnen met stilte. Wij beginnen met een bijl."
- **Visual/Icon:** [PLACEHOLDER: Bijl icoon of illustratie]

---

### 3. EVENT OVERVIEW
**Locatie:** 3e `<Section>`
- **Main heading:** ✅ "Drie dagen weg."
- **Subheading:** [PLACEHOLDER: Korte beschrijving]
- **Features/Benefits (3-5 bullets):** [PLACEHOLDER]
  - Voorbeeld: "Geen agenda. Geen telefoons. Geen compromissen."

---

### 4. DAY 1 BLOCK
**Locatie:** `<DayBlock id="dag1" day="Dag 1" title="[TITLE]" />`
- **Dag naam:** ✅ "Dag 1"
- **Thema/Titel:** [PLACEHOLDER: Bv. "Basis Bouwen" of "Grondslag"]
- **Beschrijving:** [PLACEHOLDER: Wat gebeurt er op dag 1?]
- **Highlights (bullets):** [PLACEHOLDER]

---

### 5. DAY 2 ACTIVITIES GRID
**Locatie:** `<DayBlock>` → Activiteiten Grid
- **Dag naam:** ✅ "Dag 2"
- **Thema:** [PLACEHOLDER]
- **Activities (6 cards):**
  1. ✅ Obstacle Run
  2. ✅ Bijlwerpen
  3. ✅ Boomstam Dragen
  4. ✅ Bouwen
  5. ✅ Precisie
  6. ✅ Teamwork
  
  *Instructie:* Elk activity-card moet:
  - Korte beschrijving hebben
  - Icoon/afbeelding hebben
  - "Waarom dit?" uitleg hebben

---

### 6. DAY 3 BLOCK
**Locatie:** `<DayBlock id="dag3" day="Dag 3" title="[TITLE]" />`
- **Dag naam:** ✅ "Dag 3"
- **Thema/Titel:** [PLACEHOLDER: Bv. "Afronding" of "Vertrek"]
- **Beschrijving:** [PLACEHOLDER]
- **Highlights:** [PLACEHOLDER]

---

### 7. TESTIMONIALS / QUOTE SECTION
**Locatie:** `<QuoteBlock />`
- **Quote:** [PLACEHOLDER: Deelnemer quote]
- **Attribution:** [PLACEHOLDER: Naam, jaar, rol]
- **Background:** [PLACEHOLDER: Afbeelding of gradient]

---

### 8. LOGISTICS / PRACTICAL INFO
**Locatie:** New Section (moet nog toegevoegd worden)
- **When:** [PLACEHOLDER: Datum]
- **Where:** [PLACEHOLDER: Locatie]
- **Cost:** [PLACEHOLDER: Prijs]
- **Group size:** [PLACEHOLDER: Aantal deelnemers]
- **What to bring:** [PLACEHOLDER: Packing list]

---

### 9. FAQ SECTION
**Locatie:** New Section (moet nog toegevoegd worden)
- **Q1:** [PLACEHOLDER]
- **Q2:** [PLACEHOLDER]
- **Q3:** [PLACEHOLDER]
- Etc.

---

### 10. SIGNUP CTA
**Locatie:** `<CTA />`
- **Heading:** [PLACEHOLDER]
- **Button text:** [PLACEHOLDER: "Nu aanmelden" / "Reserve je plek"]
- **Link:** ✅ Naar /aanmelden

---

## 📝 SIGNUP PAGE (app/aanmelden/page.tsx)

### Form Fields
- **Naam:** ✅
- **Email:** ✅
- **Telefoonnummer:** ✅
- **Geboortedatum:** [PLACEHOLDER]
- **Ervaring level:** [PLACEHOLDER: Dropdown - Beginner/Intermediate/Advanced]
- **Waarom OERBAZEN?:** [PLACEHOLDER: Text area]
- **Medical info / Allergies:** [PLACEHOLDER]
- **Terms & Conditions:** ✅

**Form Settings:**
- **Submit handler:** ✅ Formspree
- **Success message:** [PLACEHOLDER]
- **Error handling:** [PLACEHOLDER]

---

## 🎨 COMPONENT ASSIGNMENTS

| Component | Status | Needs |
|-----------|--------|-------|
| `Hero.tsx` | ✅ Coded | Hero image/video |
| `DayBlock.tsx` | ✅ Coded | Dag beschrijvingen |
| `ActivityCard.tsx` | ✅ Coded | Icons, descriptions |
| `QuoteBlock.tsx` | ✅ Coded | Quotes, images |
| `Section.tsx` | ✅ Coded | Content |
| `Form.tsx` | ✅ Coded | Field content |
| `CTA.tsx` | ✅ Coded | Messaging |

---

## 📋 PRIORITY FILL-IN ORDER

1. **Hero section** — Titel, Subtitle, Background (high impact)
2. **Day 1-3 descriptions** — Core event info
3. **Activity descriptions** — Day 2 details
4. **Logistics section** — When/Where/Cost (must-have)
5. **Testimonials** — Social proof
6. **FAQ** — Common questions
7. **Form fields** — Extra validation fields
8. **Signup messaging** — Success/error states

---

## 💾 HOW TO USE THIS

1. **Vul de placeholders in** — Werkelijk content in plaats van [PLACEHOLDER]
2. **Per sectie werken** — Niet alles tegelijk
3. **Content-first aanpak** — Design volgt, niet omgekeerd
4. **Push naar main** — Vercel rebuild automatisch

Makkelijkste flow: Danou geeft content → Ik paste het in → Deploy

---
