import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateFavicons() {
  const publicDir = path.resolve(__dirname, '../public');
  const svgPath = path.join(publicDir, 'favicon.svg');
  const svgContent = fs.readFileSync(svgPath, 'utf8');

  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  });
  const page = await browser.newPage();

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { background: transparent; overflow: hidden; display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; }
          svg { width: 100%; height: 100%; display: block; }
        </style>
      </head>
      <body>
        ${svgContent}
      </body>
    </html>
  `;

  await page.setContent(html);

  const sizes = [
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'favicon-96x96.png', size: 96 },
    { name: 'favicon-192x192.png', size: 192 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: '__grok/icon-180.png', size: 180 },
  ];

  for (const { name, size } of sizes) {
    await page.setViewportSize({ width: size, height: size });
    const outPath = path.join(publicDir, name);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    await page.screenshot({ path: outPath, omitBackground: true });
    console.log(`Generated: ${name} (${size}x${size})`);
  }

  await browser.close();

  // Create valid favicon.ico wrapping the 48x48 PNG
  const png48Buffer = fs.readFileSync(path.join(publicDir, 'favicon-48x48.png'));
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // image type: 1 = ICO
  icoHeader.writeUInt16LE(1, 4); // count: 1 image

  const icoDirEntry = Buffer.alloc(16);
  icoDirEntry.writeUInt8(48, 0); // width 48
  icoDirEntry.writeUInt8(48, 1); // height 48
  icoDirEntry.writeUInt8(0, 2);  // color palette: 0 = no palette
  icoDirEntry.writeUInt8(0, 3);  // reserved
  icoDirEntry.writeUInt16LE(1, 4); // color planes
  icoDirEntry.writeUInt16LE(32, 6); // bpp
  icoDirEntry.writeUInt32LE(png48Buffer.length, 8); // size of image data
  icoDirEntry.writeUInt32LE(6 + 16, 12); // offset of image data (22)

  const icoBuffer = Buffer.concat([icoHeader, icoDirEntry, png48Buffer]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Generated: favicon.ico');
}

generateFavicons().catch(err => {
  console.error(err);
  process.exit(1);
});
