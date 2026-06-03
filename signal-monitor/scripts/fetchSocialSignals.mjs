import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { NeynarAPIClient, Configuration } from '@neynar/nodejs-sdk';

const apiKey = process.env.NEYNAR_API_KEY;

if (!apiKey) {
  console.error('Missing NEYNAR_API_KEY');
  process.exit(1);
}

const config = new Configuration({ apiKey });
const client = new NeynarAPIClient(config);

const KEYWORDS = [
  'SoulSoundWorld',
  'Samzin Kreave',
  'soulsound',
  'Joker for the Queen',
  'Tomorrow’s Yesterday',
  'Neon Drive'
];

const outDir = path.resolve('logs');
fs.mkdirSync(outDir, { recursive: true });

function cleanCast(cast) {
  return {
    timestamp: cast.timestamp || null,
    author: cast.author?.username || null,
    displayName: cast.author?.display_name || null,
    text: cast.text || '',
    hash: cast.hash || null,
    metrics: {
      replies: cast.replies?.count || 0,
      recasts: cast.recasts?.count || 0,
      likes: cast.reactions?.count || 0
    }
  };
}

async function run() {
  const results = [];

  for (const keyword of KEYWORDS) {
    try {
      const res = await client.searchCasts({
        q: keyword,
        limit: 10
      });

      const casts = res?.result?.casts || res?.casts || [];

      for (const cast of casts) {
        results.push({
          keyword,
          ...cleanCast(cast)
        });
      }
    } catch (err) {
      results.push({
        keyword,
        error: err.message
      });
    }
  }

  const unique = Object.values(
    results.reduce((acc, item) => {
      const key = item.hash || `${item.keyword}-${item.text}`;
      acc[key] = item;
      return acc;
    }, {})
  );

  fs.writeFileSync(
    path.join(outDir, 'social.json'),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        source: 'neynar',
        count: unique.length,
        signals: unique
      },
      null,
      2
    )
  );

  console.log('Signal social log saved to logs/social.json');
}

run();
