import { chromium } from "playwright";
import fs from "fs";

if (!fs.existsSync("screenshots")) {
  fs.mkdirSync("screenshots");
}

(async () => {
  const browser = await chromium.launch({ channel: "msedge" });
  for (const [w, h] of [
    [375, 812],
    [390, 844],
    [412, 915],
    [844, 390],
    [1280, 800],
  ]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto("http://localhost:8080/", { waitUntil: "networkidle" });
    await page.waitForTimeout(3500); // let curtain open
    
    // Scroll host into view
    await page.evaluate(() => {
      const el = document.querySelector(".sylva-scene-host, .threeui-background, [data-variant='living-green']");
      if (el) el.scrollIntoView({ behavior: "instant" });
    });

    try {
      await page.waitForSelector('iframe[title="Sylva Living Green"]', { timeout: 8000 });
      // Wait 6.5s for 3.4s scan wave + fade + full reveal
      await page.waitForTimeout(6500);
      const frameHandle = await page.$('iframe[title="Sylva Living Green"]');
      const frame = await frameHandle.contentFrame();
      const canvas = await frame.$('#scene');
      console.log(`Viewport ${w}x${h} - Canvas found:`, !!canvas);
      if (canvas) {
        const box = await canvas.boundingBox();
        console.log(`Viewport ${w}x${h} - Canvas Box:`, box);
      }
    } catch (err) {
      console.log(`Viewport ${w}x${h} - Error:`, err.message);
    }

    await page.screenshot({ path: `screenshots/live-${w}x${h}.png` });
    console.log(`Captured screenshots/live-${w}x${h}.png`);
    await page.close();
  }
  await browser.close();
})();
