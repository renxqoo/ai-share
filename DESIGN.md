# Design System Inspired by Redback Technologies Portal

## 1. Visual Theme & Atmosphere

Redback Technologies' portal is a clean, energy-tech corporate website that balances bold brand expression with structured information hierarchy. The page opens with a full-screen video hero on desktop (static image fallback on mobile), featuring rotating text animations and a prominent orange call-to-action. The design language is modern and professional — a system built on high-contrast black-and-white surfaces punctuated by a single signature orange (`#FF5B01`) that functions as both brand anchor and interactive accent.

The typography system is built on `Roboto Regular` as the primary UI font with `HarmonyOS Sans SC` variants (Regular, Medium, Bold) for Chinese text support. A comprehensive fluid typography scale using `clamp()` ensures seamless scaling from mobile (360px) to ultra-wide (2560px+) displays. Headlines at display sizes run up to 88px (7.3xl) with a 1.2 line-height, while body text sits at a comfortable 14px with 1.5 line-height. The system avoids decorative type treatments — no text shadows, no gradients on text, no letter-spacing manipulation at display sizes.

The overall structure follows a content-driven layout pattern: fixed white header with navigation, full-viewport hero sections, alternating white and dark content blocks, and a black footer with newsletter subscription. GSAP and Motion (framer-motion) power scroll-triggered entrance animations with a consistent `0.3s ease-in-out` transition timing throughout the interface. The aesthetic sits at the intersection of clean SaaS minimalism and energy-industry authority — approachable enough for residential solar customers, professional enough for enterprise partners.

**Key Characteristics:**
- Signature Redback Orange (`#FF5B01`) as the sole accent color for CTAs, active states, and brand highlights
- Fluid typography scale from `clamp(0.625rem, 0.69vw, 0.75rem)` to `clamp(3.75rem, 5.55vw, 5rem)` covering all viewport sizes
- Dual-theme surfaces: white content areas with dark header/footer anchoring the visual frame
- Full-viewport video hero on desktop with rotating text animations and static image fallback on mobile
- Mobile-first responsive design with a hard break at 1024px for mobile/desktop split
- GSAP scroll-triggered animations with `y: 50 → 0, opacity: 0 → 1` entrance patterns
- Custom Tailwind spacing scale with pixel-precise values (3px to 1280px) and percentage-based responsive spacing
- Ant Design form components with custom-styled overrides for consistent look and feel
- Three-tier breakpoint system: laptop (1200px), normal (1440px), 3xl (2560px) beyond mobile base

## 2. Color Palette & Roles

### Primary
- **Redback Orange** (`#FF5B01`): Primary brand color, CTA backgrounds, active navigation states, mobile header background. A warm, saturated orange (rgb 255, 91, 1) that reads as energetic and approachable — the defining brand signal across the entire interface.
- **Redback Orange Hover** (`#FF6C1B`): Hover state for primary orange buttons — a slightly lighter, more vivid orange (rgb 255, 108, 27) that provides clear interactive feedback.
- **Pure White** (`#FFFFFF`): Page background, card surfaces, button text on dark backgrounds, desktop header background.
- **Pure Black** (`#000000`): Footer background, dark surface areas, maximum contrast text.

### Text Colors
- **Text Label** (`#201D1B`): `text-text-label`. Primary text color for labels, headings, and body content — a warm near-black (rgb 32, 29, 27) that's softer than pure black.
- **Secondary Text** (`#A4A9B3`): Muted text for descriptions, copyright notices, secondary language labels — a cool gray (rgb 164, 169, 179).
- **Tertiary Text** (`#99A5B6`): Placeholder text in footer inputs, disabled states — a blue-gray (rgb 153, 165, 182).
- **Input Text** (`#1D2129`): Form input text color — a standard dark gray (rgb 29, 33, 41).
- **Dark Text** (`#3A3A3A`): Secondary body text variant.

### Surface & Background
- **White** (`#FFFFFF`): Default page and desktop header background.
- **Light Gray** (`#F9F9F9`): Language selector hover background, subtle surface differentiation.
- **Dark Background** (`#121211`): Alternative dark surface.
- **Orange Header (Mobile)** (`#FF5B01`): Full orange background for mobile header — brand-forward mobile identity.
- **Footer Black** (`#000000`): Footer surface with white text overlay.
- **Footer Border** (`#313131`): Separator lines within the footer — subtle division on dark surfaces.
- **Neutral 800** (`neutral-800`): Social link icon backgrounds in footer — dark gray containers with orange hover.
- **Neutral 900** (`neutral-900`): Newsletter email input background in footer.

### Border Colors
- **Default Border** (`#E5E6EB`): Desktop header bottom border, general container borders — a cool light gray (rgb 229, 230, 235).
- **Input Border** (`#EBEEF5`): Form input borders (from Ant Design theme).
- **Disabled Border** (`#C5C9CE`): Disabled state borders.
- **Footer Input Border** (`neutral-800`): Newsletter input border on dark footer — dark gray against black.
- **Footer Input Focus** (`neutral-600`): Focus state border for newsletter input — slightly lighter dark gray.

### Semantic Colors
- **Promotion Red** (`#f64438`): Promotion banner background — a vivid red (rgb 246, 68, 56) for urgency-driven promotional banners.
- **Orange Subtle** (`rgba(255,91,1,0.05)`): Active language selector background — barely perceptible orange tint for selected state.

## 3. Typography Rules

### Font Family
- **Primary UI**: `Roboto Regular`, with system fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`
- **CJK Support**: `HarmonyOS Sans SC-Regular` (regular), `HarmonyOS Sans SC-Medium` (medium), `HarmonyOS Sans SC-Bold` (bold)
- **Icon Font**: `awb-icons` — custom icon font in WOFF, TTF, SVG formats for social media and UI icons
- **Source**: Roboto Regular loaded via CDN: `https://static.redbacktech.com/multi/portal/Roboto-Regular_1765936010300.ttf`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Max | Roboto / HarmonyOS Sans SC | 88px (5.5rem) | bold | 1.2 | Maximum headline size, hero titles |
| Display XL | Roboto / HarmonyOS Sans SC | 66px (4.125rem) | bold | 1.3 | Large section headlines |
| Display Large | Roboto / HarmonyOS Sans SC | 64px (4rem) | bold | 1.3 | Section headlines |
| Display Medium | Roboto / HarmonyOS Sans SC | 56px (3.5rem) | bold | 1.3 | Feature headlines |
| Display | Roboto / HarmonyOS Sans SC | 54px (3.375rem) | bold | 1.3 | Standard display text |
| Display Small | Roboto / HarmonyOS Sans SC | 44px (2.75rem) | bold | 1.3 | Sub-display headlines |
| Heading XL | Roboto / HarmonyOS Sans SC | 40px (2.5rem) | bold | 1.3 | Large headings |
| Heading Large | Roboto / HarmonyOS Sans SC | 32px (2rem) | medium | 1.3 | Section headings |
| Heading Medium | Roboto / HarmonyOS Sans SC | 28px (1.75rem) | medium | 1.3 | Sub-section headings |
| Heading | Roboto / HarmonyOS Sans SC | 22px (1.375rem) | medium | 1.3 | Card headings, sub-sections |
| Subheading | Roboto / HarmonyOS Sans SC | 17px (1.0625rem) | medium | 1.2 | Small subheadings |
| Body Large | Roboto | 16px (1rem) | regular | 1.5 | Featured body text, footer vision text |
| Body | Roboto | 14px (0.875rem) | regular | 1.5 | Standard reading text |
| Button | Roboto | 14px (0.875rem) | medium | 1.43 (leading-6) | Button labels, login text |
| Navigation | Roboto | 14px (0.875rem) | medium | — | Desktop navigation items |
| Caption | Roboto | 13px (0.8125rem) | regular | 1.2 | Small labels, metadata |
| Small | Roboto | 12px (0.75rem) | regular | — | Fine print, tiny labels |
| Micro | Roboto | 11px (0.6875rem) | regular | 1.2 | Smallest readable text |

### Fluid Typography Scale

The responsive typography system uses `clamp()` to scale text proportionally between minimum and maximum viewport sizes:

| Token | Min | Preferred | Max | Line Height |
|-------|-----|-----------|-----|-------------|
| `text-xs-fluid` | 10px | 0.69vw | 12px | 1.3 |
| `text-sm-fluid` | 12px | 0.83vw | 14px | 1.4 |
| `text-base-fluid` | 14px | 1.11vw | 16px | 1.5 |
| `text-lg-fluid` | 16px | 1.25vw | 18px | 1.5 |
| `text-xl-fluid` | 18px | 1.39vw | 20px | 1.5 |
| `text-2xl-fluid` | 24px | 2.08vw | 30px | 1.5 |
| `text-3xl-fluid` | 30px | 2.5vw | 36px | 1.25 |
| `text-4xl-fluid` | 36px | 3.33vw | 48px | 1.25 |
| `text-5xl-fluid` | 48px | 4.44vw | 64px | 1.1 |
| `text-6xl-fluid` | 60px | 5.55vw | 80px | 1.0 |

### Principles
- **Fluid-first sizing**: The `clamp()` scale eliminates breakpoint-specific font overrides for most content, ensuring smooth scaling across all viewport widths.
- **Three weight tiers**: Regular (400) for body, Medium (500) for buttons and navigation, Bold (700) for headlines and emphasis.
- **Tight display, relaxed body**: Display text uses 1.2-1.3 line-height for compact impact; body text uses 1.4-1.5 for comfortable reading.
- **No letter-spacing manipulation**: The system relies on font weight and size for hierarchy, not tracking adjustments.
- **CDN-loaded font**: Roboto Regular loads from `static.redbacktech.com` with `font-display: block` to prevent FOUT.

## 4. Component Stylings

### Buttons

**Primary Action (Action)**
- Background: `#FF5B01`
- Hover: `#FF6C1B`
- Text: `#FFFFFF`, 14px (text-sm), font-weight medium
- Border Radius: 6px (`rounded-md`)
- Padding: 8px 24px (`py-2 px-6`)
- Transition: `all 0.3s` duration
- Display: flex, items-center, justify-center
- Use: Login button, inline CTAs

**Motion CTA (Get A Quote)**
- Background: `#FF5B01`
- Hover: `#FF6C1B`
- Text: `#FFFFFF`, 18px (text-lg), line-height 1.25 (leading-5)
- Border Radius: 6px desktop, 4px mobile (`md:rounded-md rounded`)
- Padding: 16px 48px desktop, 12px 24px mobile (`md:py-4 py-3 md:px-12 px-6`)
- Min Width: 196px desktop, 160px mobile (`md:min-w-49 min-w-40`)
- Transition: `all 0.3s`
- Animation: Entrance via framer-motion — `y: 50 → 0, opacity: 0 → 1, duration: 0.3, ease: anticipate`
- Hover effect: Text shifts left (`-translate-x-3`), arrow slides in from right with scale/opacity animation
- Use: Hero CTA "Get A Quote", primary conversion action

**Newsletter Submit**
- Background: `#FF5B01`
- Text: `#FFFFFF`, 16px, font-weight medium
- Border Radius: 6px
- Size: 48px height (`h-12`), 108px width on desktop
- Disabled: `bg-neutral-600`, text `#99A5B6`, `cursor-not-allowed`
- Desktop layout: Attached to email input — left input rounded only on left, button rounded only on right
- Use: Footer newsletter subscription

### Cards & Containers
- Standard content uses white backgrounds with no explicit card border
- Language selector panel: `bg-white shadow-lg`, max-height transition for reveal animation
- Active language card: `bg-[rgba(255,91,1,0.05)]` subtle orange tint
- Inactive language card: `bg-[#F9F9F9]` light gray

### Inputs & Forms

**Ant Design Form Inputs (Contact Form)**
- Border Radius: 4px
- Border Color: `#EBEEF5`
- Hover Border: `#201D1B`
- Active Border: `#201D1B`
- Text: 14px desktop, 16px mobile (to prevent iOS zoom)
- Padding Block: 7px desktop, 9px mobile
- Font: Roboto Regular

**Newsletter Email Input (Footer)**
- Background: `neutral-900` (very dark gray on black footer)
- Border: `neutral-800`
- Focus Border: `neutral-600`
- Text: 14px, white
- Placeholder: 14px, `#99A5B6` (Tertiary Text)
- Size: 48px height, 329px width on desktop
- Border Radius: 6px standalone; left-only when attached to submit button
- Font: Roboto Regular

**Custom Checkbox**
- Size: 24px × 24px
- Background: transparent
- Uses SVG images for checked/unchecked states (not native checkbox rendering)
- Loaded from CDN: `static.redbacktech.com`

**Footer Consent Checkbox**
- Size: 20px × 20px (`h-5 w-5`)
- Unchecked: `border-2 border-neutral-600 bg-transparent`
- Checked: `bg-[#FF5B01] border-transparent`, white checkmark SVG
- Focus visible: `ring-2 ring-white ring-offset-2 ring-offset-black`

### Navigation (Desktop)
- Height: 80px (`h-20`)
- Background: `#FFFFFF`
- Border Bottom: 1px solid `#E5E6EB`
- Layout: Logo (left) → Nav links (center, flex-1) → Login button + Language selector (right)
- Nav links padding: `laptop:pl-20 normal:pl-17.5`
- Horizontal padding: `px-15` (60px), `normal:px-30` (120px)
- Position: relative, z-10
- Nav items support up to 3 levels of nested menus with hover-triggered dropdowns

### Navigation (Mobile)
- Background: `#FF5B01` (full orange)
- Layout: Logo (left) → Hamburger menu (right, MenuDrawer)
- Padding: `py-2.5 px-4`
- Position: fixed, z-30
- Accordion-style expandable menus
- Language selector integrated into hamburger menu

### Language Selector Panel (Desktop)
- Trigger: Country flag icon + country code, `hover:bg-[#F9F9F9] rounded`, `ml-8 px-3 py-2`
- Panel: Fixed position, full viewport width, white background, `shadow-lg`
- Padding: `pl-52 laptop:pl-72 normal:pl-87 pr-30 py-12`
- Animation: `transition-all duration-300`, max-height + opacity toggle
- Active state: `bg-[rgba(255,91,1,0.05)]`
- Country flag: 32px × 32px (`w-8 h-8`)
- Language card: `min-w-57.5`, `py-3.5 pl-4 mr-6`, hover scale 105%

### Promotion Banner
- Background: `#f64438` (vivid red)
- Height: 46px desktop (`md:h-11.5`), 44px mobile (`h-11`)
- Position: relative on desktop, fixed `z-30 top-0` on mobile
- Contains: Background image + countdown timer
- Countdown: absolute positioned, `md:right-30 right-3.75`

### Footer
- Background: `#000000` (black)
- Text: `#FFFFFF` (white)
- Padding: Desktop `px-15 py-15 normal:px-30`, Mobile `px-3.75 pb-7.5 pt-7.5`
- Max width: 1440px (`max-w-[1440px]`)
- Layout: Two-column on desktop (vision/social left, newsletter right), single column mobile
- Separator: `border-t border-[#313131]`, `mt-[60px] mb-8`
- Social links: 24px × 24px icons, `gap-[18px]`, `bg-neutral-800` with `hover:bg-[#FF5B01]`
- Legal nav: 14px, `text-gray-300`, `hover:text-white hover:underline`
- Copyright: 14px, `text-[#A4A9B3]`
- Acknowledgement: 14px, `text-[#A4A9B3]`, `leading-relaxed`

### Social Links (Footer V2)
- Container: `flex gap-[18px]`
- Each icon: 24px × 24px (`h-6 w-6`), `rounded-[1px]`
- Background: `bg-neutral-800`
- Hover: `hover:bg-[#FF5B01]`
- Icon inside: 13px × 13px (`h-[13px] w-[13px]`)

## 5. Layout Principles

### Spacing System
The project uses a custom Tailwind spacing scale with pixel-precise values. Key commonly-used values:

| Token | Value | Common Use |
|-------|-------|------------|
| 0.75 | 3px | Fine spacing |
| 1.25 | 5px | Tight gaps |
| 2.5 | 10px | Small padding |
| 3 | 12px | Standard small |
| 3.75 | 15px | Mobile padding |
| 4 | 16px | Standard gap |
| 5 | 20px | Medium gap |
| 6 | 24px | Section gap |
| 7.5 | 30px | Horizontal padding |
| 8 | 32px | Large gap |
| 10 | 40px | Section spacing |
| 12 | 48px | Major section gap |
| 15 | 60px | Page horizontal padding |
| 30 | 120px | Wide page padding |

### Percentage-Based Responsive Spacing
The system uses viewport-proportional spacing calculated from design dimensions:

| Token | Value | Source |
|-------|-------|--------|
| `percent-120/1440` | 8.333% | Standard mobile padding |
| `percent-270/1440` | 18.75% | Feature block width |
| `percent-450/1440` | 31.25% | Column width |
| `percent-820/1440` | 56.94% | Content area width |
| `percent-90/810` | 11.111% | Hero vertical spacing |
| `percent-300/810` | 37.037% | Hero content positioning |
| `percent-80/810` | 9.877% | Mobile spacing |

### Grid & Container
- **Max content width**: 1440px (`max-w-[1440px]`)
- **Container width**: 1200px (`w-300` = 75rem)
- **Page horizontal padding**: 60px (`px-15`), expanding to 120px at normal breakpoint (`normal:px-30`)
- **Mobile padding**: 15px (`px-3.75`)
- **Content layout**: Flex-based with responsive column stacking
- **Footer layout**: `lg:flex-row` two-column with newsletter `lg:ml-auto`

### Whitespace Philosophy
- **Content-first whitespace**: Sections are separated by generous vertical padding (60px+), creating clear visual breaks between content blocks.
- **Edge-to-edge hero**: Full-viewport video hero sections with no horizontal padding — content overlays the media.
- **Contained content**: Non-hero content is contained within 1440px max-width with comfortable horizontal padding.
- **Footer density**: The footer packs information more densely — smaller text, tighter gaps — reflecting its reference/utility role.
- **Section rhythm**: Alternating between full-bleed media sections and contained text content creates visual variety without introducing arbitrary decoration.

### Border Radius Scale
| Token | Value | Use |
|-------|-------|-----|
| `rounded` | 4px | Mobile CTAs, general rounding |
| `rounded-md` | 6px | Desktop CTAs, inputs, language cards |
| `rounded-[1px]` | 1px | Social link icon containers |
| `0.75` (custom) | 3px | Subtle rounding |
| `12.5` (custom) | 50px | Pill shapes |

### Border Width
- Standard: 1px (`border-solid`)
- Hairline: 0.5px (`borderWidth['1/2']`) — used for fine dividers

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Default state — page background, content areas, footer |
| Subtle (Level 1) | `shadow-lg` (Tailwind) | Language selector dropdown panel |
| Overlay (Level 2) | `max-h + opacity` transition | Language panel reveal animation |
| Z-layer (Level 3) | `z-index: 10-50` | Header (z-10), mobile header (z-30), language panel (z-50) |

**Shadow Philosophy**: The Redback portal uses minimal shadow elevation. Depth is communicated primarily through z-index layering and background color contrast (white content vs black footer). The only significant shadow appears on the language selector dropdown panel. This flat approach reinforces the clean, modern aesthetic where color and spacing define hierarchy rather than simulated physical depth.

### Decorative Depth
- Black footer creates visual anchoring through extreme contrast with white content
- Orange mobile header establishes brand identity through color dominance
- GSAP scroll animations add perceived depth through parallax-like entrance effects
- Full-bleed hero video creates immersive depth through media rather than UI shadow

### Text Shadow
- `textShadow.custom`: `1px 1px 0px rgba(0, 0, 0, 0.2)` — subtle text shadow for overlay text readability
- `boxShadow.text-custom`: `1px 1px 0px rgba(0, 0, 0, 0.2)` — matching box shadow utility

## 7. Do's and Don'ts

### Do
- Use Redback Orange (`#FF5B01`) as the primary CTA and accent color — it's the brand's defining visual signal
- Use the fluid typography scale (`text-xs-fluid` through `text-6xl-fluid`) for responsive text sizing
- Apply `transition-all duration-300` for all interactive state changes — consistency in motion timing
- Use full-viewport video hero on desktop with static image fallback for mobile
- Design mobile-first with the 1024px breakpoint as the mobile/desktop split
- Use `object-cover` for all content images to maintain consistent aspect ratios
- Test at all four breakpoints: 360px (xs), 1200px (laptop), 1440px (normal), 2560px (3xl)
- Use black footer with white text as the standard page-bottom pattern
- Apply GSAP entrance animations (`y: 50 → 0, opacity: 0 → 1`) for scroll-triggered reveals
- Use Ant Design form components with custom theme overrides for consistent form styling

### Don't
- Don't use colors other than `#FF5B01` for primary CTAs — the single-accent approach is intentional
- Don't add shadows to cards or content areas — the system relies on flat design
- Don't use font weights outside Regular (400), Medium (500), and Bold (700)
- Don't apply letter-spacing adjustments — the system relies on size and weight for hierarchy
- Don't use mobile header in white — mobile users see the orange brand header
- Don't use gradients on UI elements — solid colors define the system
- Don't exceed 1440px max-width for content containers without normal breakpoint expansion
- Don't use native checkbox styling — custom SVG checkboxes maintain visual consistency
- Don't apply hover animations with scale transforms on CTA buttons — only color transitions
- Don't use the `#f64438` promotion red outside of promotional banners — it's reserved for urgency

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (base) | < 1024px | Orange header, hamburger nav, single-column layouts, static hero image, 15px page padding |
| Laptop | ≥ 1200px | White header with horizontal nav, side-by-side layouts begin |
| Normal | ≥ 1440px | Expanded horizontal padding (120px), full content width |
| 3XL | ≥ 2560px | Ultra-wide display scaling, larger fluid typography reaches max values |

### Touch Targets
- CTA buttons: minimum 48px height (`h-12`) on newsletter submit
- Motion CTA: minimum 160px width mobile, 196px desktop
- Language selector items: `py-3.5 pl-4` with `min-w-57.5` (230px)
- Social link icons: 24px × 24px — minimum accessible touch target
- Hamburger menu: standard touch-friendly size

### Collapsing Strategy
- **Header**: Desktop horizontal nav + login button → Mobile orange header with hamburger menu
- **Hero**: Full-viewport video → Static image, reduced padding
- **Footer**: Two-column (vision left, newsletter right) → Single column stacked
- **Newsletter form**: Input + button attached side-by-side → Stacked vertically
- **Navigation**: Hover dropdowns → Accordion expandable menus
- **Language selector**: Desktop floating panel → Integrated in mobile menu
- **Partner logos**: Horizontal row with fixed widths → Horizontal scroll/overflow
- **Promotion banner**: Relative positioned → Fixed top with z-30
- **Typography**: Fluid `clamp()` scale handles all size transitions smoothly
- **CTA buttons**: `rounded-md` (6px) → `rounded` (4px) border radius reduction

### Image Behavior
- Hero video: Full-viewport on desktop, static image on mobile, aspect ratio calculated via `getHeightFromAspectRatio()`
- Content images: `object-cover` with `w-full h-full align-top` via CustomImage component
- Lazy loading for below-fold images
- Mobile-specific image URLs when available from CMS
- Video formats: webm (preferred) with mp4 fallback

### Mobile-Specific Adaptations
- Form input font-size: 16px on mobile (to prevent iOS auto-zoom), 14px on desktop
- Form input padding: `paddingBlock: 9` mobile vs `7` desktop
- CTA border-radius: 4px mobile vs 6px desktop
- CTA padding: `py-3 px-6` mobile vs `py-4 px-12` desktop
- CTA min-width: 160px mobile vs 196px desktop
- Page padding: 15px mobile vs 60px desktop

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: "Redback Orange (#FF5B01)"
- CTA Hover: "Light Orange (#FF6C1B)"
- Background: "Pure White (#FFFFFF)"
- Heading text: "Text Label (#201D1B)"
- Body text: "Text Label (#201D1B)" or "Secondary (#A4A9B3)" for muted
- Footer placeholder: "Tertiary (#99A5B6)"
- Border: "Default (#E5E6EB)"
- Dark surface: "Pure Black (#000000)"
- Promotion: "Promo Red (#f64438)"
- Active subtle: "Orange 5% opacity (rgba(255,91,1,0.05))"

### Example Component Prompts
- "Create a primary action button: bg #FF5B01, hover bg #FF6C1B, white text at 14px font-weight medium, rounded-md (6px), padding 8px 24px, transition all 0.3s. Display flex, items-center, justify-center."
- "Build the Motion CTA: bg #FF5B01 with hover #FF6C1B. Desktop: rounded-md, py-4 px-12, min-w-[196px], text-lg white. Mobile: rounded (4px), py-3 px-6, min-w-[160px]. Entrance animation: y 50→0, opacity 0→1, duration 0.3s, ease anticipate. On hover: text shifts left (-translate-x-3) and an arrow icon slides in from the right with scale 0→100 and opacity 0→100."
- "Design the desktop header: white bg, h-20 (80px), border-b 1px solid #E5E6EB, relative z-10. Layout: logo left (shrink-0), nav links center (flex-1), login button + language selector right. Horizontal padding: px-15 (60px), normal breakpoint px-30 (120px). Login button uses primary action style with rounded whitespace-nowrap."
- "Create the mobile header: bg #FF5B01, fixed position z-30, py-2.5 px-4. Layout: logo left, hamburger menu (MenuDrawer) right. If promotion banner is visible, header top is offset by banner height (h-11 / 44px)."
- "Build the footer: bg #000000, white text, max-w-[1440px] container. Desktop: px-15 py-15 normal:px-30. Two-column layout — left column has vision title (18px bold white), description (16px leading-relaxed white), social links. Right column has newsletter form. Separator: border-t border-[#313131] mt-[60px]. Bottom section: legal links (14px gray-300, hover white underline), copyright (14px #A4A9B3), partner logos."
- "Design the newsletter email input: bg neutral-900, border neutral-800, focus border neutral-600, text white 14px, placeholder #99A5B6, h-12, rounded-md. Attached to submit button (#FF5B01 bg, white 16px medium text, h-12, 108px wide). Desktop: input rounded-l only, button rounded-r only. Mobile: stacked vertically."
- "Create a hero section with full-viewport video background on desktop (static image fallback on mobile). Rotating text animation for title and subtitle. CTA uses Motion Action component. Aspect ratio responsive calculation."

### Iteration Guide
1. Always use `#FF5B01` for primary interactive elements — never substitute with other accent colors
2. The mobile/desktop split is at 1024px — mobile shows orange header, desktop shows white header
3. Use `transition-all duration-300` as the universal transition timing for consistency
4. Typography should use the fluid `clamp()` scale for responsive sizing, not breakpoint-specific overrides
5. Footer is always black (`#000000`) with white text — this is non-negotiable
6. Form inputs must be 16px on mobile to prevent iOS zoom — 14px on desktop
7. GSAP entrance animations follow the pattern: `y: 50 → 0, opacity: 0 → 1` with `once: true`
8. Content max-width is 1440px with 60px horizontal padding (120px at normal breakpoint)
9. All images use `object-cover` via the CustomImage component for consistent aspect ratios
10. Ant Design components are customized via theme token overrides — don't use default Ant styling
