import fs from "fs";
import { getSongs, getStories } from "./registry.js";
import { todayDate } from "./utils.js";

function scoreItem(item, type) {
  let score = 0;

  if (item.priority === "high") score += 3;
  if (item.priority === "medium") score += 2;
  if (item.priority === "low") score += 1;

  if (item.promoStatus === "needs_push") score += 4;
  if (item.promoStatus === "monitor") score += 1;

  if (item.status === "released" || item.status === "active") score += 2;

  if (type === "song") score += 1;
  if (type === "story") score += 1;

  return score;
}

export function getTodayActions() {
  const songs = getSongs().map((item) => ({
    ...item,
    type: "song",
    score: scoreItem(item, "song")
  }));

  const stories = getStories().map((item) => ({
    ...item,
    type: "story",
    score: scoreItem(item, "story")
  }));

  const all = [...songs, ...stories].sort((a, b) => b.score - a.score);

  const actions = [];

  for (const item of all) {
    if (item.type === "song" && item.promoStatus === "needs_push") {
      actions.push(`Promote song: "${item.title}" on TikTok / IG Reels / X`);
    }

    if (item.type === "story" && item.promoStatus === "needs_push") {
      actions.push(`Push story: "${item.title}" (${item.chapter || "latest"}) with link`);
      actions.push(`Create one hotspot clip from "${item.title}"`);
    }
  }

  return [...new Set(actions)].slice(0, 6);
}

export function printTodayActions() {
  const actions = getTodayActions();

  console.log(`\nSoulSound Signal Engine — Daily Actions (${todayDate()})\n`);

  if (!actions.length) {
    console.log("No urgent actions found.\n");
    return;
  }

  actions.forEach((action, index) => {
    console.log(`${index + 1}. ${action}`);
  });

  console.log("");
}

export function saveTodayActions() {
  const actions = getTodayActions();
  const filePath = `./output/daily/${todayDate()}-actions.txt`;

  const content = [
    `SoulSound Signal Engine — Daily Actions (${todayDate()})`,
    "",
    ...actions.map((action, index) => `${index + 1}. ${action}`),
    ""
  ].join("\n");

  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`Saved daily actions to ${filePath}`);
}
