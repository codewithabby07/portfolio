import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function testUnderline() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    @font-face {
      font-family: 'Satoshi';
      src: url('http://127.0.0.1:8080/fonts/Satoshi-Black.woff2') format('woff2');
      font-weight: 800;
    }
    @font-face {
      font-family: 'Playfair Display';
      src: url('http://127.0.0.1:8080/fonts/PlayfairDisplay-Italic.woff2') format('woff2');
      font-style: italic;
      font-weight: 600;
    }
    body {
      background: #000;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding: 40px;
      gap: 60px;
    }
    .headline-container {
      text-align: center;
    }
    .line1 {
      font-family: 'Satoshi', sans-serif;
      font-weight: 800;
      font-size: 52px;
      letter-spacing: -0.035em;
      color: #fff;
      line-height: 1.15;
    }
    .line2-wrap {
      position: relative;
      display: inline-block;
      margin-top: 8px;
    }
    .line2 {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 600;
      font-size: 86px;
      letter-spacing: -0.015em;
      color: #E44C1F;
      line-height: 1.05;
      position: relative;
      z-index: 2;
    }
    .brush-underline {
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 22px;
      pointer-events: none;
      z-index: 1;
    }
  </style>
</head>
<body>
  <!-- Variation 1: Expressive Tapered Brush Stroke with subtle upward angle -->
  <div class="headline-container">
    <div class="line1">Your business deserves</div>
    <div class="line2-wrap">
      <span class="line2">a better website.</span>
      <svg class="brush-underline" viewBox="0 0 360 22" fill="none" preserveAspectRatio="none">
        <path
          d="M 4 16.5 C 38 14.8, 85 13.5, 142 14.5 C 205 15.6, 275 12.8, 354 4.5 C 358.5 4, 359.5 6, 356 7.2 C 298 15.2, 218 20.5, 142 19.5 C 88 18.8, 40 18.5, 2 18.8 C 0.8 18.8, 1.2 16.8, 4 16.5 Z"
          fill="#E44C1F"
        />
        <path
          d="M 16 19.2 C 75 19.5, 160 20.2, 245 17.5 C 285 16.2, 325 13.8, 348 11"
          stroke="#E44C1F"
          stroke-width="1.8"
          stroke-linecap="round"
          opacity="0.8"
        />
      </svg>
    </div>
  </div>

  <!-- Variation 2: Richer organic brush swipe -->
  <div class="headline-container">
    <div class="line1">Your business deserves</div>
    <div class="line2-wrap">
      <span class="line2">a better website.</span>
      <svg class="brush-underline" viewBox="0 0 380 24" fill="none" preserveAspectRatio="none">
        <path
          d="M 3 17.5 C 42 14, 98 12.5, 165 14 C 235 15.5, 305 12, 375 4 C 378 3.5, 379 5.5, 376 6.8 C 315 15.2, 235 21.5, 165 20.8 C 98 20.1, 42 19.5, 2 19.8 C 0.8 19.8, 1.2 18, 3 17.5 Z"
          fill="#E44C1F"
        />
      </svg>
    </div>
  </div>
</body>
</html>
  `;

  await page.setContent(html);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);

  const dir = path.join(process.cwd(), 'screenshots');
  await page.screenshot({ path: path.join(dir, 'test-underline-variations.png') });
  console.log('Saved test-underline-variations.png');
  await browser.close();
}

testUnderline().catch(console.error);
