import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function testHeadline() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  
  console.log('Navigating to http://127.0.0.1:8080/ ...');
  await page.goto('http://127.0.0.1:8080/', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  
  // Wait for intro curtain to settle if any
  await page.waitForTimeout(2000);

  const headingInfo = await page.evaluate(() => {
    const h1 = document.getElementById('hero-heading');
    if (!h1) return null;
    const spans = h1.querySelectorAll('span');
    const line1 = spans[0];
    const line2 = spans[1];
    const c1 = window.getComputedStyle(line1);
    const c2 = window.getComputedStyle(line2);
    
    // Check loaded fonts
    const loadedFonts = [];
    document.fonts.forEach(f => {
      loadedFonts.push({ family: f.family, weight: f.weight, style: f.style, status: f.status });
    });

    return {
      line1: {
        text: line1.innerText,
        fontFamily: c1.fontFamily,
        fontWeight: c1.fontWeight,
        fontSize: c1.fontSize,
        fontStyle: c1.fontStyle,
        color: c1.color,
      },
      line2: {
        text: line2.innerText,
        fontFamily: c2.fontFamily,
        fontWeight: c2.fontWeight,
        fontSize: c2.fontSize,
        fontStyle: c2.fontStyle,
        color: c2.color,
      },
      satoshiCheck: document.fonts.check('800 32px Satoshi'),
      playfairCheck: document.fonts.check('italic 600 48px "Playfair Display"'),
      hasUnderlineSvg: !!h1.querySelector('svg'),
      loadedFonts: loadedFonts.filter(f => f.family.includes('Satoshi') || f.family.includes('Playfair Display'))
    };
  });

  console.log('Heading info:', JSON.stringify(headingInfo, null, 2));

  const dir = path.join(process.cwd(), 'screenshots');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  const h1Element = await page.$('#hero-heading');
  if (h1Element) {
    await h1Element.screenshot({ path: path.join(dir, 'hero-headline-typography.png') });
    console.log('Saved screenshot of #hero-heading to screenshots/hero-headline-typography.png');
  }

  // Also take full hero section screenshot
  const heroSection = await page.$('#home');
  if (heroSection) {
    await heroSection.screenshot({ path: path.join(dir, 'hero-section.png') });
    console.log('Saved screenshot of #home to screenshots/hero-section.png');
  }

  await browser.close();
}

testHeadline().catch(err => {
  console.error(err);
  process.exit(1);
});
