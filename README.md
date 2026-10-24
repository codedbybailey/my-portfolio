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
