# Press Check

A CMYK experiment by [Thomas Pavitte](https://thomaspavitte.com). Every printed
picture is really four colours of dots — cyan, magenta, yellow, and black
halftone plates, each screened at its own angle, stacking into a full-colour
image. Press Check lets you run the press yourself: scroll and the four plates
stamp down one at a time (each a little misregistered, like cheap newsprint),
then ease into register as the camera pulls back and ten thousand dots become a
photograph.

**Live:** https://thomaspavitte-beep.github.io/press-check/

## Play

- **Scroll** — the press run: the plates print in order (cyan, magenta, yellow,
  black), misregister, then lock into register.
- **Plates** — toggle any plate on/off, push its ink density, or rotate its
  screen angle off the classic values and watch moiré wreck the picture;
  *Classic angles* heals it. *Shake the press* knocks everything out of
  register; *Perfect register* snaps it back.
- **Drag** the artwork to nudge the selected plate out of register by hand.
- **Loupe** — a printer's magnifier that follows your cursor, showing the
  rosette of raw ink dots up close.
- **Create** — separate your own image, a webcam selfie, or a typed message
  (each word prints in a different ink).
- **Print kit** — downloads the four plates as separate SVGs, with registration
  crosses and screen-angle labels. Print C / M / Y / K on clear acetate, line
  up the crosses, and you have a real four-colour print.

## Adding artworks

Drop a full-colour image at `art/<id>/image.jpg` (any aspect ratio — it
cover-crops to 4:5) and add an entry in `art/manifest.js` (instructions are at
the top of that file). Bold, saturated images separate best — timid colours
flatten under the screens.

## Credits

Sample artwork: Vincent van Gogh, *Self-Portrait*, 1889 — public domain, via
Wikimedia Commons.

Built as a single vanilla `index.html` — no frameworks, no build step. The
plates are rendered to canvases and composited with multiply blending, so
misregistering, rotating, and zooming stay smooth.
