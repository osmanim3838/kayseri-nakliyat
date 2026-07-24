# PRD — kayseriparsiyel

## Original Problem Statement
Fast, modern, trust-inspiring **single-page** website for a Turkish logistics company "kayseriparsiyel" specializing strictly in intercity partial-load & item transport ("Kayseri şehirler arası parça yük parça eşya taşıma"). Goal: build trust and drive phone calls / WhatsApp.

## User Choices (verbatim)
- Resemble reference site https://kilicoglunakliyeankara.com.tr/
- Trust-inspiring color theme
- Logo, map, and images left to the designer

## Architecture
- **Frontend-only** React SPA (no backend, no DB, no auth, no integrations).
- Stack: React 19 + Tailwind + framer-motion (motion) + lenis (smooth scroll) + react-fast-marquee.
- Single page, no routing. Sections: Header → Hero → TrustMarquee → WhatWeDo → Manifesto → Contact → Footer + fixed WhatsApp FAB.
- Central constants in `src/lib/site.js` (phone, WhatsApp, address, maps embed).

## Design
- Dark navy (#0f172a) premium / Swiss-brutalist theme, blue accent, Cabinet Grotesk + Manrope fonts, grain overlay, glassmorphism header.
- Signature on-load kinetic masked line-by-line hero reveal, parallax hero bg, scroll reveals, editorial marquee.

## What's Been Implemented (2025-12)
- CSS text logo "kayseri**parsiyel**" with animated accent dot.
- Hero with H1 "Kayseri Şehirler Arası Parça Yük & Parça Eşya Taşıma", phone + WhatsApp CTAs.
- Phone `0533 127 55 00` (tel:+905331275500) in header, hero, contact, footer.
- Floating WhatsApp FAB → wa.me/905331275500 with pulsing ring.
- "What We Do": 3 clipped photography cards (partial-load focus).
- Manifesto: numbered chapters 01 Güven / 02 Hız / 03 Özen.
- Contact: persuasive copy, phone, WhatsApp, Google Maps iframe for "Yenidoğan, Ertuğrul Gazi Cd No:17, 38280 Talas/Kayseri", "Yol Tarifi Al" button, working hours.
- Fully mobile responsive (hamburger nav). Strict exclusions honored (no price calc, no service-area list, no FAQ, no reviews).
- Tested: testing_agent_v3 iteration_1 → 25/25 passed, 0 failures.

## Backlog / Next
- P1: Add subtle logo favicon + OG/social share image for link previews.
- P2: Optional lead-capture "call-back request" mini form (name + phone) if the client wants leads outside calls.
- P2: Multi-truck gallery / real company photos when provided by client.
