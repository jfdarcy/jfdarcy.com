import fs from 'fs';
import path from 'path';
import os from 'os';

const temp = os.tmpdir();
const files = {
  home: path.join(temp, 'jfdarcy-home.html'),
  portfolio: path.join(temp, 'jfdarcy-portfolio.html'),
  about: path.join(temp, 'jfdarcy-about.html'),
};

function extract(file, pattern) {
  const text = fs.readFileSync(file, 'utf8');
  return [...text.matchAll(pattern)].map((m) => m[0]);
}

const home = files.home;
console.log('mailto:', extract(home, /mailto:[^"'\\]+/g));
console.log('linkedin:', extract(home, /https:\/\/www\.linkedin\.com[^"'\\]+/g));
console.log('hero:', extract(home, /https:\/\/lh3\.googleusercontent\.com[^"'\\]+/g)[0]);
console.log('slides:', extract(files.portfolio, /https:\/\/docs\.google\.com\/presentation[^"'\\]+/g));
console.log('github:', extract(files.about, /https:\/\/github\.com[^"'\\]+/g));
const philosophy = path.join(temp, 'jfdarcy-philosophy.html');
console.log('toolkit href:', extract(philosophy, /href="([^"]+)"[^>]*>[^<]*AI UX Research Toolkit/g).map((m) => m.replace(/^href="/, '')));
console.log('fair hire:', extract(files.about, /href="([^"]+)"[^>]*>[^<]*Fair Hire AI/g));
console.log('felicitous:', extract(files.about, /href="([^"]+)"[^>]*>[^<]*Felicitous/g));
console.log('linkedin redirect:', extract(home, /http%3A%2F%2Fwww\.linkedin\.com[^&]+/g));
