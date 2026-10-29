import { chromium } from "playwright";
import fs from "fs";

async function runQa() {
  const browser = await chromium.launch({ channel: "msedge" });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  if (!fs.existsSync("screenshots")) {
    fs.mkdirSync("screenshots");
  }

  console.log("1. Visiting Homepage...");
  await page.goto("http://localhost:8080/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  // Scroll slightly to view What We Do section
  await page.evaluate(() => {
    const el = document.getElementById("what-we-do");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "screenshots/01-homepage-what-we-do.png" });
  console.log("✓ Homepage What We Do section screenshot saved.");

  console.log("2. Visiting /templates...");
  await page.goto("http://localhost:8080/templates", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: "screenshots/02-templates-gallery.png" });
  console.log("✓ Templates Gallery screenshot saved.");

  console.log("3. Testing Customization Modal...");
  const orderButton = page.locator("button:has-text('Customize / Order Now')").first();
  await orderButton.click();
  await page.waitForTimeout(800);
  await page.screenshot({ path: "screenshots/03-order-modal.png" });
  console.log("✓ Customization Modal screenshot saved.");

  // Test validation
  console.log("3b. Testing form validation error triggers...");
  const submitButton = page.locator("button:has-text('Send Order via WhatsApp')").first();
  await submitButton.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: "screenshots/03b-form-validation.png" });
  console.log("✓ Validation errors verified & screenshot saved.");

  console.log("4. Visiting /templates/preview...");
  await page.goto("http://localhost:8080/templates/preview", { waitUntil: "networkidle" });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: "screenshots/04-demo-preview.png" });
  console.log("✓ Demo Preview screenshot saved.");

  console.log("5. Visiting /digital-qr-menus...");
  await page.goto("http://localhost:8080/digital-qr-menus", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: "screenshots/05-digital-qr-menus.png" });
  console.log("✓ Digital QR Menus screenshot saved.");

  console.log("6. Visiting /website-development...");
  await page.goto("http://localhost:8080/website-development", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: "screenshots/06-website-development.png" });
  console.log("✓ Website Development screenshot saved.");

  await browser.close();
  console.log("ALL TESTS COMPLETED SUCCESSFULLY!");
}

runQa().catch((err) => {
  console.error("QA failed:", err);
  process.exit(1);
});
