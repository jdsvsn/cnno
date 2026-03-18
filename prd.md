# PRD: CNNO — Cinnamon Roll Landing Page

## 1. Project Overview

Project name: CNNO — Landing Page  
Owner / Business: CNNO (Cinnamon roll business)  
Style: Minimal (focus on simple, elegant layout that highlights product and brand)  
Primary goal: Launch a fast, accessible, conversion-focused marketing landing page that introduces CNNO, highlights product offerings, captures leads (newsletter / contact), and drives visit-to-order actions (in-store visits, third-party ordering link, or future direct orders).

Key objectives
- Present CNNO brand and product (cinnamon rolls) clearly and appetizingly.
- Drive conversions: newsletter signups, contact inquiries, and link-throughs to ordering channels.
- Load quickly and perform well on mobile and desktop.
- Maintain accessible, SEO-friendly structure to support discovery and local search.

Success metrics
- Conversion rate: newsletter signups / visits >= target (e.g., 3% baseline).
- Bounce rate improvement vs baseline (TBD).
- First Contentful Paint (FCP) < 1.5s on mobile (3G simulated).
- Accessibility score: WCAG AA compliance for core pages.
- Core Web Vitals: LCP <= 2.5s, CLS <= 0.1, FID/INP within recommended thresholds.

Out of scope (initial launch)
- Full e-commerce checkout (deferred to roadmap).
- Multi-location store finder (basic location + hours only).
- Loyalty/subscription management.

Stakeholders
- Product owner / CNNO founder
- Designer
- Frontend engineer
- Marketing / Social manager
- DevOps / Release manager

Timeline (example)
- Discovery & content: 1 week
- Design & approval: 1 week
- Implementation & testing: 2 weeks
- Launch: 1 day
- Post-launch fixes & analytics monitoring: 1 week

## 2. Target Audience

Primary audiences
- Local foot-traffic customers: people near physical CNNO store(s) looking for breakfast / pastry options.
- Office workers and commuters: value quick, tasty breakfast & coffee pairings.
- Food-curious social audiences: users exploring new local bakeries via social, Instagram, or food blogs.
- Gift buyers: people looking for small, local treats for gifts or events.

Audience characteristics & needs
- Mobile-first behavior — quick info: hours, location, menu highlights, ordering link.
- Visual appeal — attractive food photography sells product.
- Trust & authenticity — short brand story, clear contact info, hygiene / ingredient notes where relevant.
- Convenience — easy call-to-action for ordering / directions / contact.

User personas (short)
- Commuter Claire: 29, quick breakfast, needs store hours & close location, uses phone.
- Foodie James: 35, discovers via Instagram, wants appealing images and product details.
- Office Manager Priya: 40, orders for team occasionally, looks for bulk/order info (future).

## 3. Functional Requirements

Overview: The landing page must present content blocks, capture leads, and provide clear CTAs. All features should be minimal and unobtrusive.

Pages / Sections
- Root landing page ("/")
  - Header: logo, simple nav (Menu, About, Visit, Contact, Order)
  - Hero: hero image or hero carousel with primary CTA ("Order / Find Us / View Menu")
  - Product highlights: signature rolls, flavor callouts, featured combo
  - Menu snapshot: short list with prices + link to full menu (PDF or page)
  - About / Story: short brand story and values
  - Locations & hours: store address, map link, opening hours
  - Newsletter signup: email capture, short copy, consent
  - Contact: simple contact form (name, email, message) or CTA to call/email
  - Social / gallery: small photo gallery or Instagram feed link
  - Footer: legal links (privacy, terms), social icons, small copyright

Functional items (with priority, user stories, and acceptance criteria)

1) Responsive layout (Priority: High)
- User story: As a visitor, I want the landing page to render perfectly on mobile and desktop so I can find info quickly.
- Acceptance: Layout must adapt to screen sizes; critical CTAs visible above the fold on mobile; no horizontal scroll.

2) Hero with main CTA (Priority: High)
- User story: As a visitor, I want to see a clear CTA to order or find the store.
- Acceptance: Hero contains headline, short subheading, and a prominent CTA (primary action) plus secondary CTA. CTA should be accessible (keyboard focusable) and trackable via analytics.

3) Menu preview & product cards (Priority: High)
- User story: As a visitor, I want to quickly know what flavors/prices are offered.
- Acceptance: At least 3 featured products displayed with image, name, short description, price. Clicking an item opens a lightweight modal or anchors to full menu.

4) Newsletter signup (Priority: High)
- User story: As a visitor, I want to sign up for updates/offers with minimal friction.
- Acceptance: Form captures email, shows success/error states, validates email pattern, uses double opt-in or stores legally with consent. Confirmation message displayed. Submission tracked.

5) Contact form (Priority: Medium)
- User story: As a visitor, I want to contact CNNO with a question or catering inquiry.
- Acceptance: Form requires name and email; message optional. Submissions send to configured email or CRM feed and show confirmation. Spam protection (honeypot) enabled.

6) Location & directions (Priority: High)
- User story: As a visitor, I want to find CNNO location and hours.
- Acceptance: Display address, hours, and one-click map link to Google Maps / Apple Maps; show opening hours and "Open now" indicator if feasible.

7) External ordering link(s) (Priority: High)
- User story: As a visitor, I want to order now via preferred ordering platform or phone.
- Acceptance: Prominent link or button to third-party ordering (e.g., DoorDash, local POS) or tel: link for phone ordering. Button styling consistent.

8) Performance & SEO (Priority: High)
- User story: As the site owner, I want the page to load fast and be discoverable.
- Acceptance: Proper meta tags, structured data (LocalBusiness/schema), optimized images (next/image), font loading strategy, sitemap, robots.txt, and server-side rendering where applicable.

9) Accessibility (Priority: High)
- User story: As a user with assistive tech, I want the site to be usable.
- Acceptance: Contrast ratios meet WCAG AA, semantic HTML, ARIA where needed, keyboard focus order, forms with labels and error messaging.

10) Analytics & tracking (Priority: Medium)
- User story: As the marketing owner, I want to measure conversions and page events.
- Acceptance: GA4 or privacy-respecting analytics integrated; track newsletter signups, order CTA clicks, phone clicks, and contact submissions.

11) CMS / Content updates (Priority: Medium)
- User story: As the marketing owner, I want to update menu items, hero text, and images without dev deployments.
- Acceptance: Provide a lightweight content editing flow (headless CMS or editable JSON) or document update process for now. (If CMS not in initial scope, content fields should be easy to update in code.)

12) Legal & Privacy (Priority: Medium)
- User story: As a visitor, I want to know how my data is used.
- Acceptance: Link to Privacy Policy, Cookie/Tracking consent if applicable. Newsletter signups must capture consent.

Non-functional requirements
- Use Next.js 14 with server-side rendering for critical content.
- Use TypeScript for type safety.
- Tailwind CSS for styling with small CSS bundle.
- Build for Vercel or similar environment with automatic deploys.
- Performance budget: total page weight <= 500 KB (excluding third-party assets) where feasible; Largest Contentful Paint <= 2.5s.
- Uptime/availability: 99.9%.

Integration requirements
- Email provider for newsletter (e.g., Mailchimp, ConvertKit) via API.
- Analytics (GA4) or Plausible (privacy-focused).
- Optional: Instagram feed embedding (lightweight, cached) or manual image updates.

Acceptance criteria (general)
- All core flows (viewing hero, viewing menu, signing newsletter, using contact form, clicking order link) work across Chrome, Safari, Firefox on iOS and Android mobile and desktop.
- No accessibility violations for critical components (automated + manual audit).
- Performance & SEO checks pass minimum thresholds.

## 4. Design Guidelines (Minimal; color scheme: brown and beige/cream)

Design principles
- Minimal, clean, and warm: let product photography and simple typography sell the product.
- Focus on whitespace, clear hierarchy, and fast scanning.
- Subtle use of brand colors (brown and beige/cream) to create appetite and warm feel.
- Minimal decorative elements; emphasis on product imagery and short copy.

Color palette (suggested tokens)
- Brand Brown (primary): #6B3E26 — deep warm brown for CTAs, headings, and accents.
- Dark Brown (text): #3E2A20 — for body text.
- Cream / Beige (background): #F5EFE6 — main page background.
- Accent Beige (light): #FFF7EE — for cards or subtle surfaces.
- White: #FFFFFF — for contrast and card backgrounds.
- Neutral Gray (muted text/icons): #8C857E — secondary text.

Typography
- Primary font: Inter (or system sans-serif) for UI and body — clean and legible.
- Display font (optional): a subtle rounded serif or tasteful script for logo/headline accent if brand has one; keep minimal use.
- Font sizes: mobile scale: 16px body, 22–28px hero headline, 14–16px for nav/secondary text.
- Line-height: 1.4–1.6 for readability.

Layout & spacing
- Grid: 12-column on desktop; single column on mobile with max width 980px (container).
- Spacing scale: use Tailwind spacing scale; maintain consistent padding 16–48px for section gaps.
- Cards: soft rounded corners (4–8px), subtle shadow only if needed; prefer flat minimal look.

Components & patterns
- Header: left-aligned logo, right-aligned minimal nav (collapse to hamburger on mobile). Sticky header optional but minimal.
- Hero: large hero photo or subtle background with overlay gradient from cream to transparent; headline + subline + primary CTA button (brown background, cream text) and secondary link (text button).
- Product cards: image (square) + name + short desc + price. Keep layout grid tidy and minimal borders.
- Buttons:
  - Primary CTA: filled brown (#6B3E26) with cream text (#F5EFE6).
  - Secondary CTA: transparent or cream background with brown text and thin border.
  - Disabled style: muted beige with low contrast (but still accessible).
- Forms:
  - Minimal inputs with clear labels and focus ring (brown 2px).
  - Error messages in red with clear guidance.
- Imagery:
  - Bright, natural photos of cinnamon rolls, close-ups, and lifestyle shots.
  - Images should have consistent crop and warm color grading to match palette.
- Icons:
  - Minimal line icons in dark brown; avoid heavy decorative icons.
- Animations:
  - Very subtle micro-interactions only (button hover scale, fade-in on scroll). No heavy animations that harm performance.
- Accessibility:
  - Ensure color contrast for text >= WCAG AA against background.
  - Focus outlines visible and consistent.
  - Controls appropriately labelled with aria attributes as needed.

Brand voice / copy
- Brief, warm, friendly, and authentic. Keep copy short & appetizing.
- Example CTAs: “Order Now”, “See Menu”, “Get Fresh Rolls”, “Visit Us”.

Design deliverables
- High-fidelity mockups for mobile and desktop.
- Component library (Tailwind classes documented) and style tokens.
- Image assets optimized (webp / avif) and responsive.

## 5. Tech Stack & Implementation Notes

Core stack
- Framework: Next.js 14 (app router) — SSR / SSG as appropriate.
- Styling: Tailwind CSS (utility-first).
- Language: TypeScript.
- Hosting: Vercel recommended (or Netlify) for fast Next.js deployments.
- Images: next/image (or Next 14's new image handling) with responsive sizes and AVIF/WebP fallback.
- Forms & APIs: Next.js API routes (edge functions where appropriate) to forward newsletter/contact data to email provider or serverless function.
- Analytics: GA4 or Plausible (config via env); server-side event forwarding optional.

Development tooling
- Linting: ESLint with TypeScript rules.
- Formatting: Prettier.
- Type checking: tsc build step.
- Testing: Unit tests with Vitest / Jest; end-to-end tests with Playwright.
- CI/CD: GitHub Actions (lint/test/build) and automatic deploy to Vercel.
- Accessibility testing: axe-core (CI checks) and manual audits.

Data & integrations
- Newsletter: Mailchimp/ConvertKit API integration via serverless endpoint.
- Contact submissions: send email via transactional email provider (SendGrid / Postmark) or webhook to Slack/email.
- Optional: Instagram embed via API or static images.
- Structured data: JSON-LD for LocalBusiness and Product snippets for SEO.

Security & privacy
- Sanitize form inputs; CSRF protected (Next.js defaults).
- Use environment variables for keys and secrets.
- Privacy: collect only necessary fields; store consent for newsletters.

Performance best practices
- Preload LCP-critical images.
- Use image formats modern (AVIF/WebP), responsive srcsets.
- Minimal JavaScript on first load; hydrate interactive parts only.
- Defer non-critical third-party scripts; use privacy-respecting analytics or server-side tagging.
- Limit webfont usage; prefer system fonts for faster loads or subset webfonts.

Developer deliverables
- Next.js project scaffolded with TypeScript and Tailwind.
- Reusable component library for Hero, Nav, ProductCard, CTA, Form, Footer.
- Documentation: README with environment variables, deployment steps, content editing instructions.

Deployment
- Deploy to Vercel with preview deployments on pull requests.
- Branching: main branch for production, feature branches for work.
- Release checklist: passing tests, accessibility smoke test, SEO meta verification.

## 6. Future Roadmap

Phase 1 (Launch) — Minimal Landing Page (this PRD)
- All items from Functional Requirements implemented.
- Newsletter & contact integration.
- Basic analytics & SEO.
- Responsive and accessible design.

Phase 2 (Near-term enhancements: 1–3 months)
- Add editable CMS (Sanity/Contentful/Strapi/Notion or markdown + headless CMS) for non-dev content updates (menu, hero images, promotions).
- Add order flow integration: connect with POS or third-party ordering APIs to add ordering buttons or deep links.
- Add store-specific pages if multiple locations.
- Add more analytics events and conversion tracking, GA4 enhanced ecommerce for order flows.

Phase 3 (Medium-term: 3–6 months)
- Native online ordering (simple cart & checkout, pickup scheduling) or integration with a partner POS.
- Gift boxes / bulk order form and admin notifications.
- Loyalty & subscription offering (e.g., monthly roll box).
- A/B testing for hero messaging and CTAs.

Phase 4 (Long-term: 6–12 months)
- Multi-location management with geolocation and store selection.
- Progressive Web App (PWA) support for offline access and install prompt.
- Full internationalization (i18n) and accessibility refinements.
- Personalization / CRM integration for targeted offers.
- Mobile app proof-of-concept (if subscriptions/loyalty require it).

Risks & mitigation
- Heavy images harming performance: mitigate via strict optimization & lazy loading.
- Third-party dependencies (ordering APIs) may introduce latency: link out initially, integrate later with async methods.
- Privacy/consent complexity: implement lean consent UI and keep data collection minimal.

Appendix — Example Content Checklist (for copy & assets)
- Logo: SVG
- Hero photo(s): high-quality, optimized
- Product photos: each featured item
- Short brand story: 2–3 sentences
- Menu list with prices (or link to PDF)
- Store address and hours
- Newsletter privacy consent text
- Contact email & phone
- Social links

Notes
- Keep the design minimal and product-first. Prioritize conversion and speed over feature bloat. Build a flexible, componentized Next.js + Tailwind TypeScript codebase that supports iterative enhancements per the roadmap.

---  
End of PRD.