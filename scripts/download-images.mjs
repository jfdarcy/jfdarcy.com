import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const imagesDir = path.join(root, 'public', 'images');

async function download(url, destPath) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
      Referer: 'https://www.jfdarcy.com/',
    },
  });
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, buf);
  console.log('Saved', path.relative(root, destPath));
}

const assets = [
  {
    url: 'https://lh3.googleusercontent.com/sitesv/AA5AbUAm2C-39dzN55W5LX-kZdTf-icY0BP8fmtNZjnGIDDl0oa2EorGnyywWyDb3xP7qjgvxgduFciqPt5iVkcrb8fThh4HsNhpo0TyKefRp-0gzpkZueADk1WGSJAAFwmZrEmrC84QYc5NHVW74EgE8tfXOkwaind0t6pvG1rNRfij4WZE07FuDWcejb0=w16383',
    dest: 'hero/us-pavilion.jpg',
  },
];

for (const asset of assets) {
  await download(asset.url, path.join(imagesDir, asset.dest));
}

console.log('Done downloading assets.');
