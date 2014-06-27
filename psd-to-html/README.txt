Technical Exercise Description:
Implement a pixel-perfect replica of the attached landing-page design (in PSD format) in HTML & CSS (this is a landing page for a recently launched Intercom feature). In order to keep the scope of this exercise small, do not worry about cross-browser support but please ensure it renders correctly in either Chrome or Safari for OS X.

Please submit a zip of all assets (images, css, html) required to render the page.

Process:
Converted into HTML5 and CSS3, exporting PSD assets into CSS and images, with modern semantic tags like article and footer, and modern effects like rounded corners and subtle drop shadows, following the PSD template. Based off the HTML5 Initializr template, it should have good backwards compatibility with older browsers as well.

From the original PSD file, I was missing a font on my system, "HelveticaNeueLTPro Bd", and was only used on the button in the PSD. (See missing-font-screenshot.png) I asked my contact at Intercom if I could get the font file to install, they were unaware of the font issue, and was advised to make the best substitution I could. Going with the brand pattern from the file, I substituted another Helvetica Neue font for it.

Being pixel-perfect is imperative, so I customized some font weights and letter spacing to most closely match the PSD. I included some hyperlinks including links to the main intercom.io site, a link I found on the docs page (http://docs.intercom.io/filtering-users-by-events/Tracking-User-Events-in-Intercom) seemed most appropriate for the "Start using Events" button, and populated the footer with links to the docs page, the Intercom blog, Twitter, and Facebook.

It will display best on OSX systems, because Helvetica Neue is a standard font in the system. For PC's (which don't have Helvetica Neue as a standard system font) and also in case of font corruption, I also made a CSS font fallback to Helvetica, Arial, sans-serif. 
