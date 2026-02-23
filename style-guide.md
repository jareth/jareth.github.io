# Style Guide

Portfolio website styling guide with an amber monochrome theme inspired by retro CRT phosphor displays.

## Design Philosophy

A modern developer portfolio with nostalgic warmth. The amber accent color evokes vintage amber monochrome monitors while maintaining a clean, professional light mode aesthetic.

---

## Color Palette

### Light Mode

| Element | Tailwind Class | Hex |
|---------|---------------|-----|
| Background | `bg-amber-50` | #FFFBEB |
| Card Background | `bg-white/60` | rgba(255,255,255,0.6) |
| Header/Footer | `bg-stone-50`, `bg-stone-100/50` | #FAFAF9 |
| Primary Text | `text-stone-800` | #292524 |
| Secondary Text | `text-stone-600` | #57534E |
| Muted Text | `text-stone-500` | #78716C |
| Accent | `text-amber-600` | #D97706 |
| Accent (dots/borders) | `bg-amber-500`, `border-amber-500` | #F59E0B |
| Borders | `border-stone-300` | #D6D3D1 |

### Dark Mode

| Element | Tailwind Class | Hex |
|---------|---------------|-----|
| Background | `dark:bg-stone-950` | #0C0A09 |
| Card Background | `dark:bg-stone-900` | #1C1917 |
| Header/Footer | `dark:bg-stone-900` | #1C1917 |
| Primary Text | `dark:text-amber-500` | #F59E0B |
| Secondary Text | `dark:text-amber-600` | #D97706 |
| Muted Text | `dark:text-amber-700` | #B45309 |
| Highlighted Text | `dark:text-amber-400` | #FBBF24 |
| Borders | `dark:border-amber-900/30` | rgba(120,53,15,0.3) |
| Hover Borders | `dark:hover:border-amber-500` | #F59E0B |

---

## Typography

### Font Stack

```css
font-sans: 'Quicksand', system-ui, sans-serif  /* Primary */
font-mono: 'IBM Plex Mono', monospace          /* Accents, footer, code */
```

### Font Imports

```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Hierarchy

| Element | Classes |
|---------|---------|
| Hero Heading | `text-5xl md:text-6xl font-bold text-stone-800` |
| Hero Tagline | `text-xl text-stone-600 font-mono` |
| Card Heading | `text-xl font-semibold text-stone-800` |
| Body Text | `text-stone-600` |
| Footer | `text-sm text-stone-500 font-mono` |

---

## Components

Reusable component classes defined in `assets/css/site.css` using `@layer components`:

### Cards

```html
<div class="card">
    <h2 class="card-title"><span class="card-dot"></span>Card Title</h2>
    <p class="text-stone-600 dark:text-amber-600">Card content...</p>
</div>
```

**Component classes:**

| Class | Styles |
|-------|--------|
| `.card` | `bg-white/60 dark:bg-stone-900 border border-stone-300 dark:border-amber-900/30 rounded-xl p-6 hover:border-amber-500 dark:hover:border-amber-500 hover:shadow-amber dark:hover:shadow-amber-glow transition-all duration-300` |
| `.card-title` | `text-xl font-semibold text-stone-800 dark:text-amber-500 mb-3 flex items-center gap-2` |
| `.card-dot` | `w-2 h-2 bg-amber-500 rounded-full shadow-amber-dot` |

### Navigation Links

```html
<a href="#" class="nav-link">Link Text</a>
```

**Component class:**

| Class | Styles |
|-------|--------|
| `.nav-link` | `text-stone-600 dark:text-amber-600 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium` + animated underline |

**Effects:**
- Text color transitions to amber on hover
- Underline animates from left to right via `::after` pseudo-element

### Accent Text

```html
<span class="text-amber-600 dark:text-amber-400">Highlighted text</span>
```

---

## Custom Utilities

Defined in `tailwind.config.js`:

```javascript
boxShadow: {
    'amber': '0 0 20px rgba(245, 158, 11, 0.25)',      // Card hover glow (light mode)
    'amber-dot': '0 0 8px rgba(245, 158, 11, 0.6)',    // Accent dot glow
    'amber-glow': '0 0 30px rgba(245, 158, 11, 0.4), 0 0 60px rgba(245, 158, 11, 0.2)',  // Enhanced card hover (dark mode)
    'amber-text': '0 0 10px rgba(245, 158, 11, 0.8)'   // Text glow effect
}
```

### Dark Mode Toggle

Located in navigation, persists preference to `localStorage`:

```html
<button id="theme-toggle" class="ml-2 p-2 text-stone-600 dark:text-amber-500">
    <!-- Sun icon (visible in dark mode) -->
    <!-- Moon icon (visible in light mode) -->
</button>
```

Respects system preference via `prefers-color-scheme: dark`.

---

## Spacing

| Context | Value |
|---------|-------|
| Page max-width | `max-w-5xl` |
| Page padding | `px-6` |
| Section vertical padding | `py-12` to `py-16` |
| Card padding | `p-6` |
| Card grid gap | `gap-6` |
| Navigation gap | `gap-6` |

---

## Effects

### Amber Glow (Hover)

Used on interactive elements to create the phosphor screen warmth:

```css
/* Card hover */
box-shadow: 0 0 20px rgba(245, 158, 11, 0.25);

/* Accent dot */
box-shadow: 0 0 8px rgba(245, 158, 11, 0.6);
```

### Transitions

All interactive elements use smooth transitions:

```css
transition-all duration-300  /* Cards */
transition-colors            /* Text/links */
```

---

## CRT Effects (Dark Mode)

Defined in `assets/css/site.css`:

```css
/* Scanlines + Vignette overlay */
.dark body::before {
    content: '';
    position: fixed;
    /* ... */
    background:
        repeating-linear-gradient(/* scanlines */),
        radial-gradient(/* vignette */);
}
```

### Text Glow Effects

Highlighted text in dark mode uses drop shadows for phosphor glow:

```html
<span class="dark:drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]">Jareth</span>
```

---

## Future Enhancements

### Additional Effects
- Cursor blink animation on hero tagline
- Subtle CRT screen curvature (CSS transform)
- Noise/grain texture overlay
- Text flicker animation (subtle)
