# Zhaokun Zhang — Personal Portfolio V2

A responsive personal portfolio for 张昭坤 / Zhaokun Zhang, built with Next.js App Router, React, TypeScript and Tailwind CSS 3.4.

The visual direction is **Minimal Tech × Hand-drawn Personality**: warm off-white surfaces, charcoal typography, restrained red accents, subtle grid texture, and the original hand-drawn character assets supplied by the owner.

## What's included

- Responsive single-page portfolio (desktop, tablet and mobile)
- Chinese / English language switch
- Light / dark theme switch
- Project showcase: SequFlow, Bulby English, Study Hub and FAN ARCHIVE
- Xiaohongshu merchant content-operations experience (May–December 2025)
- Education, technical skills and contact details
- Original OC artwork in the hero and creative section
- Bulby lamp mascot as a floating portfolio guide
- Copy-email controls and direct links to live demos / GitHub
- SEO metadata and a custom SVG favicon

## Artwork mapping

All artwork is copied from the user's supplied original PNG files. The images are not AI-generated or redrawn.

| Website usage | Asset | Original artwork |
|---|---|---|
| Hero OC | `public/assets/oc-main.png` | `Horny-time-limited.png` |
| OC variation | `public/assets/oc-glasses.png` | `P4-wearinglasses.png` |
| OC sketch | `public/assets/oc-sketch-1.png` | `P1.png` |
| OC sketch | `public/assets/oc-sketch-2.png` | `P4.png` |
| Bulby guide / project visual | `public/assets/bulby-mascot.png` | `Bulby.png` |
| Subtle paper grid | `public/assets/grid-texture.png` | `小方格.png` |
| Retained pattern assets | `public/assets/handdrawn-divider-*.png` | `断虚线-横线.png` / `断虚线-竖线.png` |

The assistant is a **local preset portfolio guide**, not a live LLM integration. It does not call DeepSeek, OpenAI or another external model, and it requires no API key. This is intentional for a safe, deployable portfolio preview. A real model integration should be added through a server-side route with secrets stored as environment variables, never in browser JavaScript.

## Run locally (Windows / PowerShell)

Requires Node.js 20.9 or newer (Node.js 22 LTS is suitable).

```powershell
cd .\zhaokun-portfolio-v2
npm install
npm run dev
```

Open `http://localhost:3000` in Edge.

Before deployment, run a production build:

```powershell
npm run build
```

Optional TypeScript check:

```powershell
npm run typecheck
```

## Deploy to Vercel

This is a standalone project package. **Deploy it as a new Vercel project first** so the currently published portfolio is not overwritten before you review the new version.

1. Unzip the package.
2. Open PowerShell in the extracted `zhaokun-portfolio-v2` folder.
3. Run `npm install` and `npm run build`.
4. Install Vercel CLI if it is not installed: `npm install -g vercel`.
5. Clear proxy variables for this terminal session (the existing workflow notes mention Vercel fetch failures when a proxy is set):

```powershell
$env:HTTP_PROXY = ""
$env:HTTPS_PROXY = ""
$env:ALL_PROXY = ""
$env:http_proxy = ""
$env:https_proxy = ""
$env:all_proxy = ""
```

6. Run `vercel`, follow the prompts, and create a **new project** (for example, `zhaokun-portfolio-v2`).
7. Preview the deployment on the Vercel-provided URL. Once approved, run `vercel --prod`.
8. Only after reviewing the new version should you decide whether to assign a custom domain. Do not remove or replace the current portfolio deployment/DNS records until the new deployment is verified.

## Where to edit content

Most text is in `app/page.tsx`:

- `copy.zh` / `copy.en`: Chinese and English content
- `projects`: project titles, labels and technology tags
- `links`: project demo URLs and GitHub repositories
- `ProjectVisual`: project preview artwork built with HTML/CSS and Bulby's supplied image

Contact details are in the contact section near the end of `app/page.tsx`.

Artwork files are in `public/assets/`. Keep the filenames in sync with the references in `app/page.tsx` if replacing an image.

## Notes / accuracy

- SequFlow is described with its documented Next.js 15, React 19, TypeScript, Tailwind CSS, TipTap, Zustand and Supabase stack.
- Bulby English is correctly identified as a static HTML/CSS/JavaScript app with a Vercel serverless proxy for DeepSeek, not as a Next.js app.
- Study Hub is marked **In Progress** and is not presented as a live deployment.
- FAN ARCHIVE is labelled as an unofficial fan-made project.
- Xiaohongshu work is described as a conversion-oriented workflow, but no conversion percentage, traffic, follower count or other unverified metric is invented.
- The previously excluded military-service experience is not included.
- No API keys, passwords, private tokens or `.env` files are included.

## Stack

- Next.js 16.4.2
- React 19.3.1
- TypeScript
- Tailwind CSS 3.4.17
- No third-party UI component or icon library required
