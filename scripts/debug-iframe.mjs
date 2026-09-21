import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch({ channel: "msedge" });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  
  page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
  page.on("pageerror", (err) => console.log("PAGE ERROR:", err.message));

  await page.goto("http://localhost:8080/", { waitUntil: "networkidle" });
  await page.waitForTimeout(3500);

  await page.evaluate(() => {
    const el = document.querySelector(".sylva-scene-host, .threeui-background");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });

  await page.waitForSelector('iframe[title="Sylva Living Green"]');
  // Wait 6.5 seconds for Three.js scan and reveal animation (SCAN_DUR = 3.4s + fade)
  await page.waitForTimeout(6500);

  const frameHandle = await page.$('iframe[title="Sylva Living Green"]');
  const frame = await frameHandle.contentFrame();

  frame.on?.("console", (msg) => console.log("FRAME LOG:", msg.text()));

  const info = await frame.evaluate(() => {
    const scene = document.getElementById("scene");
    return {
      hasThree: !!window.THREE,
      threeRevision: window.THREE ? window.THREE.REVISION : null,
      bodyClass: document.body.className,
      heroRect: document.getElementById("hero")?.getBoundingClientRect(),
      stageRect: document.getElementById("stage")?.getBoundingClientRect(),
      sceneRect: scene?.getBoundingClientRect(),
      sceneOpacity: scene ? window.getComputedStyle(scene).opacity : null,
    };
  });

  console.log("Iframe internal info:", JSON.stringify(info, null, 2));

  await page.screenshot({ path: "screenshots/debug-390x844.png" });
  console.log("Saved screenshots/debug-390x844.png");

  await browser.close();
})();
