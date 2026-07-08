/* Press Check — artwork manifest.
   To add an artwork:
     1. Make a folder art/<id>/  (id: lowercase letters, digits, hyphens)
     2. Drop in image.jpg or image.png — full colour, any aspect ratio
        (it cover-crops to 4:5). Bold, saturated images separate best;
        the CMYK screens flatten timid colours.
     3. Add an entry below (order = switcher order):
        { id:"my-picture", title:"My Picture",
          book:"Press Check",               // shown on the completion card
          image:"image.jpg",                // optional, defaults to image.jpg
          cover:"covers/press.jpg",         // optional, lettered fallback
          buy:"https://..." }               // optional
     4. Open ?art=<id> to view it directly.
*/
window.PRESS_MANIFEST = [
  { id: "vangogh", title: "Vincent", book: "Press Check" }
];
