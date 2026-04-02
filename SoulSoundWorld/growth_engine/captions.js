import fs from "fs";
import { getSongs, getStories } from "./registry.js";
import { slugify, todayDate } from "./utils.js";

function buildSongCaption(song, platform = "tiktok") {
  const base = `“${song.title}” by ${song.artist} is out now. If you like music with energy, edge, and feeling, run this one up.`;

  const cta =
    platform === "x"
      ? "Listen and share."
      : "Tap in, stream it, and tell me what part hits hardest.";

  const hashtags =
    platform === "x"
      ? "#NowPlaying #SamzinKreave #SoulSoundWorld"
      : "#fyp #newmusic #spotify #samzinkreave #soulsoundworld #independentartist";

  return `${base} ${cta}\n\n${hashtags}`;
}

function buildStoryCaption(story, platform = "tiktok") {
  const chapterText = story.chapter ? ` ${story.chapter}` : "";
  const base = `${story.title}${chapterText} is live. If you love serialized stories with depth, mystery, and emotional tension, this is for you.`;

  const cta =
    platform === "x"
      ? "Listen free and share it."
      : "Listen free, share it with somebody who loves story worlds, and follow for more.";

  const hashtags =
    platform === "x"
      ? "#PocketFM #SoulSoundWorld #SerializedFiction"
      : "#pocketfm #storytok #serializedfiction #audiofiction #soulsoundworld #fyp";

  return `${base} ${cta}\n${story.link ? `\n${story.link}\n` : "\n"}${hashtags}`;
}

export function generateCaptions() {
  const songs = getSongs();
  const stories = getStories();

  const results = [];

  songs.forEach((song) => {
    results.push({
      title: song.title,
      kind: "song",
      platform: "tiktok",
      caption: buildSongCaption(song, "tiktok")
    });
    results.push({
      title: song.title,
      kind: "song",
      platform: "x",
      caption: buildSongCaption(song, "x")
    });
  });

  stories.forEach((story) => {
    results.push({
      title: story.title,
      kind: "story",
      platform: "tiktok",
      caption: buildStoryCaption(story, "tiktok")
    });
    results.push({
      title: story.title,
      kind: "story",
      platform: "x",
      caption: buildStoryCaption(story, "x")
    });
  });

  return results;
}

export function printCaptions() {
  const captions = generateCaptions();

  console.log("\nSoulSound Signal Engine — Captions\n");

  captions.forEach((item, index) => {
    console.log(`--- ${index + 1}. ${item.kind.toUpperCase()} | ${item.platform.toUpperCase()} | ${item.title} ---`);
    console.log(item.caption);
    console.log("");
  });
}

export function saveCaptions() {
  const captions = generateCaptions();

  captions.forEach((item) => {
    const fileName = `${todayDate()}-${slugify(item.title)}-${item.platform}.txt`;
    const outputPath = `./output/captions/${fileName}`;
    fs.writeFileSync(outputPath, item.caption, "utf-8");
  });

  console.log("Saved captions to ./output/captions/");
}
