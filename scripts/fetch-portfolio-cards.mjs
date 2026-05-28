import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const cardsDir = path.join(root, 'public', 'images', 'portfolio', 'cards');

async function download(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 1000) throw new Error(`File too small (${buf.length} bytes): ${destPath}`);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, buf);
  console.log('Saved', path.relative(root, destPath), `(${buf.length} bytes)`);
}

// Portfolio card images from Unsplash (matches photo credits on the live site)
const cardSources = [
  {
    file: 'usability-test-card.jpg',
    url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    file: 'literature-review-card.jpg',
    url: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    file: 'standardized-questionnaire-card.jpg',
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    file: 'latent-class-analysis-card.jpg',
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    file: 'design-sprint-card.jpg',
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
];

for (const card of cardSources) {
  await download(card.url, path.join(cardsDir, card.file));
}

console.log('Done fetching portfolio card images.');
