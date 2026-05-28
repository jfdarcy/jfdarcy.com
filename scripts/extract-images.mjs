import fs from 'fs';
import path from 'path';
import os from 'os';

const portfolio = fs.readFileSync(path.join(os.tmpdir(), 'jfdarcy-portfolio.html'), 'utf8');
const about = fs.readFileSync(path.join(os.tmpdir(), 'jfdarcy-about.html'), 'utf8');

const imgs = [...portfolio.matchAll(/https:\/\/lh3\.googleusercontent\.com[^"'\\]+/g)].map((m) => m[0]);
console.log('portfolio images:', imgs.length);
imgs.slice(0, 10).forEach((u, i) => console.log(i, u.slice(0, 120) + '...'));

const aboutImgs = [...about.matchAll(/https:\/\/lh3\.googleusercontent\.com[^"'\\]+/g)].map((m) => m[0]);
console.log('about images:', aboutImgs.length);
aboutImgs.slice(0, 5).forEach((u, i) => console.log(i, u.slice(0, 120) + '...'));
