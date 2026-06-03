#!/data/data/com.termux/files/usr/bin/bash

mkdir -p logs payloads reports

echo "Fetching Neynar social signals..."
node scripts/fetchSocialSignals.mjs

echo "Fetching GitHub build status..."
gh run list --limit 5 > logs/builds.json

echo "Compiling daily payload..."
node scripts/compileBrief.mjs

echo "Generating daily report..."
node scripts/generateDailyReport.mjs

echo "Signal Monitor complete:"
echo "- payloads/today.json"
echo "- reports/daily-signal.md"
