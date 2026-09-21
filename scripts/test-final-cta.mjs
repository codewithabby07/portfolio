import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function testFinalCtaAndFooter() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });

  // Desktop check
  const desktopPage = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  console.log('Navigating to http://127.0.0.1:8080/ ...');
  await desktopPage.goto('http://127.0.0.1:8080/', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(2000);

  // Scroll to CTA
  const cta = await desktopPage.$('#cta');
  if (cta) {
    await cta.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(1000);
    await cta.screenshot({ path: 'screenshots/final-cta-desktop.png' });
    console.log('Saved screenshots/final-cta-desktop.png');
  }

  // Footer screenshot
  const footer = await desktopPage.$('footer');
  if (footer) {
    await footer.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(500);
    await footer.screenshot({ path: 'screenshots/footer-desktop.png' });
    console.log('Saved screenshots/footer-desktop.png');
  }

  // Mobile check
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobilePage.goto('http://127.0.0.1:8080/', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(2000);

  const mobileCta = await mobilePage.$('#cta');
  if (mobileCta) {
    await mobileCta.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(1000);
    await mobileCta.screenshot({ path: 'screenshots/final-cta-mobile.png' });
    console.log('Saved screenshots/final-cta-mobile.png');
  }

  const mobileFooter = await mobilePage.$('footer');
  if (mobileFooter) {
    await mobileFooter.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(500);
    await mobileFooter.screenshot({ path: 'screenshots/footer-mobile.png' });
    console.log('Saved screenshots/footer-mobile.png');
  }

  await browser.close();
}

testFinalCtaAndFooter().catch(console.error);
