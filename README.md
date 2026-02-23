vanbone.com
===========

Personal portfolio website deployed via GitHub Pages.

## Technology Stack

- **Eleventy** (v3) - Static site generator
- **Tailwind CSS** (v3.4) - Utility-first CSS framework
- **Webpack** (v5) - Asset bundler
- **PostCSS** - CSS processing with autoprefixer, cssnano, and PurgeCSS
- **GitHub Actions** - Automated build and deployment

## Directory Structure

```
├── .eleventy.js             # Eleventy configuration
├── .eleventyignore          # Files excluded from Eleventy processing
├── _data/
│   ├── manifest.json         # Webpack manifest (auto-generated)
│   ├── navigation.yml       # Site navigation structure
│   └── site.yml             # Site metadata (title, description, url)
├── _includes/               # Reusable components (navigation, video, analytics)
├── _layouts/                # Page templates (default, post, project)
├── _posts/                  # Blog posts (YYYY-MM-DD-title.md)
├── _projects/               # Project case studies
├── assets/
│   ├── css/site.css         # Main CSS entry point (Tailwind imports)
│   └── images/              # Local image assets
├── dist/                    # Webpack output (gitignored, built in CI)
├── _site/                   # Eleventy build output (gitignored)
├── index.html               # Homepage
├── about.md                 # About page
├── projects.html            # Projects listing
├── blog.html                # Blog listing (not linked in nav)
├── feed.njk                 # Atom RSS feed
└── sitemap.njk              # XML sitemap
```

## Local Development

Requires Node.js 18+ and Yarn.

```bash
yarn install
yarn run dev
```

Site will be available at `http://localhost:8080`

This runs Eleventy dev server and Webpack watch in parallel.

## Production Build

```bash
yarn run build
```

Runs: Eleventy → Webpack (with PurgeCSS) → Eleventy (for manifest update)

### npm Scripts

- `yarn run build` - Full production build
- `yarn run build:html` - Build HTML with Eleventy
- `yarn run build:css` - Build CSS with Webpack/PurgeCSS
- `yarn run dev` - Development mode (parallel HTML + CSS watching)
- `yarn run start` - Alias for dev

## Content Management

### Adding a Project

Create a markdown file in `_projects/` with front matter:

```yaml
---
short_name: myproject
name: My Project Name
client: Client Name
preview: https://assets.vanbone.com/images/myproject_proj.jpg
---

Project description and content goes here...
```

URLs are automatically generated as `/projects/[short_name]/`.

### Adding a Blog Post

Create a file in `_posts/` named `YYYY-MM-DD-title.md`:

```yaml
---
title: My Post Title
layout: post
---

Post content goes here...
```

Note: The blog section exists but is currently not linked in the navigation.

### Editing Navigation

Update `_data/navigation.yml`:

```yaml
- name: Home
  link: /
- name: About
  link: /about.html
- name: Projects
  link: /projects.html
```

## Styling

### Tailwind Configuration

- Custom font: Quicksand (configured in `tailwind.config.js`)
- Primary brand color: `bg-teal-300`
- Content scanning: `./_site/**/*.{html,js}`

### Custom CSS

Add custom styles to `assets/css/site.css` after the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom styles here */
```

## Asset Pipeline

Webpack compiles CSS and generates hashed filenames for cache busting. The manifest at `_data/manifest.json` is auto-generated and used by Eleventy layouts:

```liquid
<link rel="stylesheet" href="{{ manifest['main.css'] }}">
```

### External Assets

Images and videos are hosted externally at `https://assets.vanbone.com/` to keep the repository lightweight.

Use the `video.html` include for responsive video embeds:

```liquid
{% include "video.html",
    width: 800, height: 400,
    poster: "https://assets.vanbone.com/images/example.jpg",
    mp4: "https://assets.vanbone.com/videos/example.mp4",
    webm: "https://assets.vanbone.com/videos/example.webm"
%}
```

## Deployment

Automated via GitHub Actions (`.github/workflows/deploy.yml`):

1. Push changes to `master` branch
2. GitHub Actions builds the site (Eleventy + Webpack)
3. Site is deployed to GitHub Pages

Both `_site/` and `dist/` are gitignored - all builds happen in CI.

## Updating Dependencies

```bash
yarn upgrade
```
