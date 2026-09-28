# What you can change in the Kage website

Everything below is changeable without breaking the authored experience. Tell me the
item number and hand me whatever the "Give me" column asks for (or just describe what
you want in plain words — I'll handle the rest).

## 1. Theme knobs (instant — no assets needed)

These are already wired as props in `src/Scene.tsx` (they restyle the page live, the
document itself is never rewritten):

| Item | Current value | Give me |
| --- | --- | --- |
| Primary accent colour | `#e0231c` (vermilion) | any HEX colour |
| Heading font | Onest | a font name (Google Fonts) or `.woff2` file |
| Body font | Onest | a font name (Google Fonts) or `.woff2` file |
| Heading weight | 400 | 400 / 500 / 600 / 700 |
| Body weight | 300 | 300 / 400 / 500 / 600 |
| Heading size | 46 (px) | any number, e.g. 40–72 |
| Body size | 17 (px) | any number, e.g. 13–24 |
| Heading letter-spacing | -0.012 (em) | any number, e.g. -0.06 – 0.12 |

Extra colour families inside the page (`--ember`, `--bone`, `--gold`, lantern glow tints) —
give me HEX values and where to apply them.

## 2. Text content (copy in `public/landing-pages/kage.html`)

| # | Item | Current | Give me |
| --- | --- | --- | --- |
| 2.1 | Site name / wordmark | KAGE | new name text |
| 2.2 | Tagline under wordmark | HIDDEN REALMS OF KYOTO | new tagline |
| 2.3 | Japanese side title | 影の道 | new JP text (or remove) |
| 2.4 | Nav items | Temples / Gardens / Rituals / Afterlight (+ JP) | new labels |
| 2.5 | Hero eyebrow | Chapter 00 — The Hidden Gate | new text |
| 2.6 | Hero headline | Where stillness reveals the unseen. | new headline (3 lines max) |
| 2.7 | Hero intro paragraph | Enter Kyoto through its quiet thresholds… | new paragraph |
| 2.8 | Four hero chapter teasers | 01 Thresholds, 02 Still Gardens, 03 Sacred Craft, 04 Night Rituals | new titles + one-line descriptions |
| 2.9 | Video card label | 山門 Sanmon — before the bell | new label |
| 2.10 | Sanmon section heading | — The Sanmon / Charred cypress, worn stone, one gate left open. | new heading |
| 2.11 | Sanmon paragraphs (2) | "Kage begins where the city stops…" | new copy |
| 2.12 | CTA buttons | Cross the threshold / Begin the walk | new button text + link URL |
| 2.13 | Stats row | 05 Chapters · 92 Minutes · 1611 Hall raised · ∞ Stillness | new numbers + labels |
| 2.14 | 3 field-note cards | Approach 参道 "The long climb", Lanterns 灯籠 "Lantern court", Moonwater 月影 "The wet court" | new titles/captions |
| 2.15 | Sacred Craft headline | Five chapters. Ninety minutes. One quiet mind. | new headline |
| 2.16 | 5 lesson cards | The Hidden Gate (14 min), Borrowed Scenery (18), Charred Cypress (21), Lantern Light (17), The Vermilion Moon (22) | new titles + blurbs + minutes |
| 2.17 | Afterlight closing copy | "The gate does not close behind you…" | new paragraph |
| 2.18 | Footer columns | Chapters / Practice / Elsewhere | new link lists + URLs |
| 2.19 | Footer tagline | A five-chapter night walk through a Kyoto mountain temple… | new one-liner |
| 2.20 | Footer bottom line | © 2026 Kage — Kage no Michi · 静けさは一つの技である · WebGL · Onest · Kyoto | new credits |

Any language is fine (English, Hindi, Japanese — the fonts carry JP already).

## 3. Images

| # | Item | File(s) | Give me |
| --- | --- | --- | --- |
| 3.1 | Video card poster | `generated/kage-sanmon-preview.webp` | new image — dark temple-gate scene, ~16:10, WebP/JPG/PNG ≥1280px |
| 3.2 | Field-note card art (3) | `generated/kage-approach.webp`, `kage-lantern-court.webp`, `kage-moonwater.webp` | 3 images — misty approach / lantern courtyard / wet moonlit court, portrait ~4:5, ≥1024px |
| 3.3 | 3D foreground layers (10) | `foreground/png/*.webp` (temple-wall, pine-tree, tall-grass, sakura-branch, maple-leaves, stone-lantern, garden-bush, basalt-stones, hill, shrine-ruins) | **transparent PNG cut-outs** (I convert to WebP). One object per image, clean edges, layered depth in mind |

I resize/optimize — just send the best quality you have (photos, AI images, or art).

## 4. Video

The "Sanmon — before the bell" card is currently a poster + play button.

| # | Item | Give me |
| --- | --- | --- |
| 4.1 | Play the actual video | an **MP4 (H.264)** or **WebM** clip, 720p–1080p, ≤ 30 MB, ≤ 60 s |
| 4.2 | Replace with a different video | same formats + a new poster image |
| 4.3 | Autoplay background video in a section | same formats (silent loop recommended) |

## 5. Fonts (embedded in `secret-pathways-assets/fonts.css`)

| Face | Used for | Change by |
| --- | --- | --- |
| Onest (300/400/500) | all body + headings | new `.woff2` files, or say "use <Google Font>" |
| NotoJP | Japanese text | same |
| Wordmark | the KAGE logo lettering | same (keep it a display face) |

## 6. 3D scene / motion (the live Three.js world)

| # | Item | Give me |
| --- | --- | --- |
| 6.1 | Moon (size, colour, glow, craters) | description or a reference screenshot |
| 6.2 | Fog / mist / grain intensity | "more/less" or a reference screenshot |
| 6.3 | Lantern glow colour + size | HEX + description |
| 6.4 | Parallax depth of any foreground layer | "closer to camera / further" |
| 6.5 | Scroll choreography (scene timing, camera moves) | describe the new behaviour |
| 6.6 | Falling leaves / particles | description of effect |
| 6.7 | Hover focus behaviour (chips, lesson cards) | description |

## 7. Structure

| # | Item | Give me |
| --- | --- | --- |
| 7.1 | Add a chapter/section | title + copy + images + where it goes |
| 7.2 | Remove/reorder sections | which ones |
| 7.3 | Change stats/labels layout | the look you want |
| 7.4 | Page title / meta description | new strings |
| 7.5 | Language switch (EN/JP/HI…) | the translated copy |

---

**How to hand it over:** drop files (image/video/font) in the chat, or push them anywhere
and give me the link, and say "change item 2.6 to …" / "replace 3.1 with this image".
One item or a batch — either works.
