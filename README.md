# Digital India • Smart India

A presentation-ready responsive website for BCA/MCA students.

## Files
- `index.html` — website structure/content
- `styles.css` — responsive design
- `script.js` — navigation + presentation mode

## Run locally
Open `index.html` in a browser, or use VS Code Live Server.

## Deploy with GitHub Pages
1. Create a GitHub repository.
2. Upload the website files.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/root`.
5. Save and open the published URL.

## Generate the final QR
Install Python package:
`pip install qrcode[pil]`

Then run:
```python
import qrcode
url = "https://YOUR-USERNAME.github.io/digital-india-smart-india/"
qrcode.make(url).save("qr-final.png")
```

Replace `qr-placeholder.png` with `qr-final.png`.

## Presentation tips
- Use the **Presentation mode** button.
- Start with the hero section.
- Explain Before vs After.
- Discuss benefits AND digital risks.
- Finish with the roadmap and scan the QR code live.
