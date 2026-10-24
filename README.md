# Bailey Pixel Portfolio

Updated from V7 with more consistent pixel-shaped UI details.

## What's new in this version

- Replaced remaining smooth rounded UI details with pixel-style geometry.
- Updated the navigation container to use a pixel-beveled shape instead of a smooth rounded pill.
- Updated the skill tag pills to use pixel-style beveled edges.
- Updated the year markers in the Experience timeline to use a pixel-circle shape instead of a smooth circle.
- Preserved the V7 behavior where:
  - laptop and iPad keep the V5-style About layout,
  - iPhone uses the creative dialogue-box layout,
  - cards keep sharp corners.

## Included functionality

- Lenis smooth scrolling
- GSAP flower motion
- Responsive layouts for desktop, iPad, and iPhone


## V10 refinements

- Repaired the year markers so they read as more clearly pixelated circles.
- Repaired the Skills & Technologies card borders with stronger pixel-style edges.
- Updated the skill tags to match the pixel border treatment.
- Kept the iPhone-specific About layout and the desktop/iPad layout unchanged.

## V12 iPhone flower placement

The flower is enlarged and anchored higher behind the About heading and dialogue boxes on narrow screens. The text retains its opaque pixel dialogue panels for contrast; desktop and iPad layouts are unchanged.


## V13 header readability

Added compact pixel-style dark shadows behind the site title and navigation text, preserving the flower placement and all layouts.


## V14 responsive fix
The flower and staggered dialogue layout now applies at widths up to 700px with responsive clamp-based sizing. The old 601–700px stacked layout no longer activates. Wider tablet and laptop layouts are unchanged.

## V15 skills layout
- Reduced oversized skill labels and padding.
- Skill cards grow only as needed instead of occupying unnecessary vertical space.
- Three columns on wide desktops, two on tablet widths, and one on phones.
- Preserves connected, square pixel-style borders.

## V16 timeline color
All pixels in each timeline circle now use the same solid purple (#8453d2), with no highlights or darker outline; white year labels remain unchanged.


## V17 speech boxes
The About dialogue uses layered stepped silhouettes instead of clip-path on bordered elements. On phones each paragraph has a separate white pixel bubble with a speech tail; tablet and desktop retain their original layout and one combined bubble.


## V18 dialogue bubble corrections

- Replaced the About Me bubble frames with crisp SVG-based pixel speech bubbles.
- Removed the faint gray edge caused by the prior clip-path approach.
- Corrected the desktop/iPad combined About box so the whole frame matches the reference style and includes a bottom speech tail.
- Kept the iPhone layout as separate paragraph bubbles with matching tails.

## V19 fix
The dialogue frames are now content-sized CSS pixel shapes, including tails. No stretched SVG frame artwork is used.


## V20 timeline marker refinement

- Rebuilt the year markers as a new pixel-circle silhouette with a cleaner 8-bit round shape.
- Kept the markers one solid purple color.
- Realigned the timeline line to the new marker size.

## V21 marker correction
The previous pointed year badges were replaced with a true circular mask sampled on a 32x32 square pixel grid. The SVG is one solid purple.


## V22 decorative sparkles

- Added several pink pixel sparkles around the About/flower area.
- Converted the provided sparkle graphic to a transparent PNG so it blends into the black background cleanly.
- Preserved the existing flower, textboxes, and responsive layouts.


## V23 contact corner flower

- Added the new pixel flower/plant to the lower-right corner of the Contact section.
- Removed the black background so it blends into the page.
- Kept edges crisp and pixel-rendered to match the main flower style.


## V24 contact plant cleanup

- Removed the pink heart sparkles.
- Increased the size of the lower-right contact plant decoration.
- Cleaned the plant edge by removing the bright fringe / white border.


## V26 contact flower replacement

- Replaced the bottom-right rock photo with the new pink pixel flower.
- Removed the black background and kept the art crisp with transparent edges.
- Positioned the flower as a larger static bottom-corner element with overlap behind the contact content.
- Added the same hard-edged text shadow style used at the top so overlapped contact text remains readable.


## V27 animated bottom flower

- Replaced the static contact-corner placement with a true page-bottom flower element.
- Positioned the pink flower at the absolute bottom-right of the page.
- Added GSAP scroll-linked motion matching the gentle movement style of the top flower.
- Preserved hard-edged text shadows for contact/footer readability if overlap occurs.


## V28 footer / bottom flower behavior

- Restored the footer to the true bottom with no extra bottom padding pushing content upward.
- Kept the pink flower pinned to the absolute bottom-right of the page.
- Replaced the free-floating bottom animation with a subtle magnetic-style motion: slight scale-up and nudge as the user scrolls into the contact/footer area.


## V29 deployment repair

Deploy index.html AND portfolio-v29.css AND portfolio-v29.js together at the repository root.
Previous GitHub Pages version appeared to load a stale style.css. New filenames force the live site to request matching styles and animation logic.
Restore pixel text boxes, overlap positioning, and bottom-right flower.


## V30 bottom flower scale

- Reduced the bottom-right pink flower slightly across desktop, tablet, and mobile breakpoints.
- Left the overlap, footer position, and magnetic animation unchanged.


V31: Improved Contact/footer pixel text outline to remain legible when pink flower overlaps. No layout changes.

## V33 wide desktop layout
For viewports 1400px and wider, the page uses an expanded content area and a balanced About/flower composition. Smaller laptop, iPad, and iPhone layouts are unchanged.


## V34 responsive wide-screen fix
The top flower, header and section headings scale fluidly above 900px instead of jumping at 1400px. The footer aligns to the same container; bottom flower positioning and animation are untouched.


## V35 top flower animation

- Changed the top purple flower animation to match the softer magnetic-style behavior of the bottom flower.
- Removed the older drifting/parallax movement.
- Kept the rest of the V34/V33 responsive layout behavior unchanged.


## V36: Restored top flower overlap

The top purple flower overlaps behind the About bubble on laptop, iPad and wide desktop. Its soft magnetic scroll effect remains unchanged; iPhone layout and bottom flower remain unchanged.


## V37 top flower overlap

- Kept the top purple flower anchored to the right edge.
- Increased its size on tablet and desktop breakpoints so it overlaps the About bubble more like the intended layered composition.
- Preserved the softer magnetic animation from V35.


## V38 overlap containment
The large top flower stays right-aligned and overlapping with the About speech bubble, but is clipped at the bottom boundary of the About section so it does not cover the Skills cards or Experience. No changes to the bottom flower or mobile positioning.


## V39 top flower continuation

- Let the top purple flower continue below the About section so it remains visible beneath the Skills area.
- Kept the Skills, Experience, Projects, Contact, and footer content layered above the artwork.
- Preserved the right-edge anchoring, overlap with About, and softer magnetic animation.


## V40 extended flower visibility

- Increased the downward visible region for the top flower so the bottom of the artwork is not clipped.
- Kept the flower behind the Skills/Experience/Projects/Contact content.
- Preserved right-edge anchoring, About overlap, and the softer animation.

V41: enlarged only the bottom pink flower on desktop to overlap behind the right project card, keeping the bottom-right anchoring, project readability, and gentle animation.


## V42 foreground flower
The pink bottom-right flower now draws over the Recipe Cart project card, instead of behind it. Position, size and motion remain unchanged.

## V43
Reduced only the bottom pink flower size while keeping it above the Recipe Cart card and anchored at the bottom right. Magnetic animation unchanged.
