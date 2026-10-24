# Bailey Pixel Portfolio

A one-page HTML, CSS, and JavaScript portfolio, based on the uploaded dark-themed files.

## Run locally

From this directory, run `python3 -m http.server 8000 --bind 127.0.0.1`.

## Scrolling

The locally bundled Lenis 1.3.27 smooths wheel input across the document using one animation loop. CSS smooth scrolling is disabled so it cannot compete with Lenis. Wheel distance stays at its native multiplier, touch scrolling remains native, and reduced-motion preferences disable smoothing (including changes made while the page is open). Navigation links use Lenis anchors; the active link follows the current scroll position.

`assets/lenis.min.js` and `assets/lenis.css` come from the installed `darkroomengineering/lenis` checkout. Its MIT license is included in `assets/lenis-LICENSE`.

## Flower image

`assets/pixel-flower.png` is a transparent image-tool edit of the supplied purple pixel-flower reference. The decorative image keeps pixelated rendering, with mobile spacing that prevents overlap with the About section.

## Open these files in Cursor

1. Extract `bailey-portfolio-updated.zip` to a folder, or copy its contents over your existing portfolio. Keep the `assets/` folder alongside `index.html`.
2. Open that folder in Cursor. No application dependency installation or build step is needed.
3. Preview with Live Server, or run the Python command above. `index.html` can also open directly in a browser.
4. The optional `.cursor/mcp.json` configures Better Icons for Cursor. It requires Node.js/npx and internet access; enable it in Cursor's MCP settings if prompted. Merge its `better-icons` entry with your existing MCP configuration rather than overwriting other servers.

## Requirements covered

- GitHub contact: https://github.com/codedbybailey
- Full Personal Finance Tracker card links to https://github.com/codedbybailey/personal-finance-tracker
- Purple pixel-flower image has an alpha-transparent background and 1254 × 1254 resolution. Its current maximum rendered width is 420 CSS pixels, enough for typical 2×/3× displays; pixelated rendering keeps the intended pixel-art style.
- Flower sits below the navigation; only the upper stems fade, keeping the wording clear. Mobile layout reserves the full flower height.
- No cat image is included.
- Pho Tre Bien title: Customer Service Associate. Army ROTC title: Leadership & Outreach Cadet. These are editable display labels, not verified official titles.
- Lenis smooths wheel scrolling across the entire document. Touch scrolling remains native and reduced-motion preferences are respected.
- Better Icons is configured as an optional Cursor authoring tool. GitHub/LinkedIn SVGs are bundled inline from its underlying Iconify Material Design Icons catalog. The live Better Icons API was blocked in the setup environment, so icons were retrieved from the published `@iconify-json/mdi` catalog instead. The website needs no icon API or editor connection to run.

The export contains only the website, required assets/licenses, and optional Cursor configuration. It excludes repositories, caches, node_modules, unrelated images, and secrets.
