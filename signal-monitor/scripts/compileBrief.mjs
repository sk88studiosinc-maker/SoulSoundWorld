import fs from 'fs';
import path from 'path';

const socialPath = path.resolve('logs/social.json');
const buildsPath = path.resolve('logs/builds.json');
const outPath = path.resolve('payloads/today.json');

const social = fs.existsSync(socialPath)
  ? JSON.parse(fs.readFileSync(socialPath, 'utf8'))
  : { error: 'missing social.json' };

const buildsRaw = fs.existsSync(buildsPath)
  ? fs.readFileSync(buildsPath, 'utf8')
  : 'missing builds.json';

const payload = {
  generatedAt: new Date().toISOString(),
  monitor: 'SoulSoundWorld Signal Monitor',
  mode: 'lean-daily-brief',
  social,
  builds: buildsRaw.slice(0, 4000),
  outputInstruction:
    'Return only SIGNAL, OPPORTUNITY, NEXT ACTION. Be specific, brief, and operational.'
};

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(payload, null, 2));

console.log('Compiled payloads/today.json');
