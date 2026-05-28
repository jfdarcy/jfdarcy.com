import fs from 'fs';
import path from 'path';
import os from 'os';

const temp = os.tmpdir();
const about = fs.readFileSync(path.join(temp, 'jfdarcy-about.html'), 'utf8');
const philosophy = fs.readFileSync(path.join(temp, 'jfdarcy-philosophy.html'), 'utf8');

function around(text, needle, radius = 300) {
  const i = text.indexOf(needle);
  if (i < 0) return null;
  return text.slice(Math.max(0, i - radius), i + radius);
}

console.log('Fair Hire context:', around(about, 'Fair Hire AI'));
console.log('Felicitous context:', around(about, 'Felicitous Technologies'));
console.log('Toolkit context:', around(philosophy, 'AI UX Research Toolkit'));
