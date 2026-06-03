import fs from 'fs';
import path from 'path';

const payloadPath = path.resolve('payloads/today.json');
const reportPath = path.resolve('reports/daily-signal.md');

const payload = JSON.parse(fs.readFileSync(payloadPath, 'utf8'));

const builds = payload.builds || '';
const socialSignals = payload.social?.signals || [];

const successfulBuilds = builds
  .split('\n')
  .filter(line => line.includes('success')).length;

const socialErrors = socialSignals
  .filter(signal => signal.error)
  .map(signal => `- ${signal.keyword}: ${signal.error}`)
  .join('\n');

const report = `# SoulSoundWorld Daily Signal

Generated: ${payload.generatedAt}

## SIGNAL

GitHub deployment monitoring is active. The latest captured workflow history shows ${successfulBuilds} successful GitHub Pages deployment runs.

Neynar social monitoring is connected at the script level, but the current endpoint is returning 402.

## OPPORTUNITY

Signal Monitor v1 is operational as a studio-in-pocket command system.

SoulSoundWorld can now track website/build health without manually opening GitHub every time.

## NEXT ACTION

Keep Neynar parked for now. Do not pay yet.

Next expansion:
1. GitHub repo summary
2. Latest commit
3. Website health check
4. Daily report archive

## RAW SOCIAL STATUS

${socialErrors || 'No social errors detected.'}
`;

fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, report);

console.log('Daily report written to reports/daily-signal.md');
