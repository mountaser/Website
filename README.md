# MountaserHalak.com

Personal portfolio website of **Mountaser Halak**: Systemadministration, IT-Support & Netzwerktechnik. Built as a static, dependency-free one-page site and self-hosted on a home lab server.

🔗 [www.mountaserhalak.com](https://www.mountaserhalak.com/)

## Tools & Technologies

- **Frontend Core**: HTML5 (semantic markup, inline SVG icons), CSS3 (CSS Grid, Flexbox, CSS variables, sticky navigation, smooth scrolling), Vanilla JavaScript (ES6+, DOM API, `IntersectionObserver`).
- **Frameworks & Libraries**: **None (Zero dependencies / Framework-free)**. Built entirely without external JavaScript libraries or CSS frameworks.
- **Typography & GDPR**: Self-hosted **Inter Variable Font** (`.woff2`, SIL Open Font License 1.1) to ensure zero third-party IP requests (GDPR compliant).
- **Hosting & Infrastructure**: Self-hosted on a home lab server running **Unraid OS**, containerized via **Docker**, and proxied through **Nginx Reverse Proxy** with SSL/TLS encryption.

## Features

- **Single-page portfolio**: hero, about, IT skills, work experience & education timelines, project showcase, and contact section, all navigable via a sticky header with smooth-scroll anchor links.
- **Vanilla HTML/CSS/JS**: no frameworks or build step; plain semantic HTML, hand-written CSS, and a small dependency-free JS file for the mobile nav toggle and scroll-reveal animations.
- **Self-hosted font**: Inter (SIL OFL 1.1) is served locally instead of from Google Fonts, avoiding third-party IP sharing for GDPR compliance.
- **Accessible & responsive**: visible focus outlines, `prefers-reduced-motion` support, a `<noscript>` fallback that keeps content visible without JS, and a mobile breakpoint with a collapsible nav menu.
- **SEO/social metadata**: meta description, canonical URL, and Open Graph/Twitter card tags.
- **Legal page**: separate `datenschutz.html` (privacy policy) page.
- **Downloadable CV**: linked PDF résumé available directly from the hero and contact sections.

## Structure

```
.
├── index.html            # main portfolio page
├── datenschutz.html       # privacy policy (German)
├── css/style.css          # all styling
├── js/customs.js          # nav toggle + scroll-reveal
├── fonts/                 # self-hosted Inter variable font
├── imgs/                  # portrait, favicon, project logos
└── cv/                    # downloadable résumé PDF
```

## Running locally

No build tools required, just serve the directory statically, e.g.:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.
