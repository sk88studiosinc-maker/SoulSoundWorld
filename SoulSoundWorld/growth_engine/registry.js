import { readJson } from "./utils.js";

const SONGS_PATH = "./signals/songs.json";
const STORIES_PATH = "./signals/stories.json";
const LINKS_PATH = "./signals/links.json";

export function getSongs() {
  return readJson(SONGS_PATH);
}

export function getStories() {
  return readJson(STORIES_PATH);
}

export function getLinks() {
  return readJson(LINKS_PATH);
}

export function getAllSignals() {
  return {
    songs: getSongs(),
    stories: getStories(),
    links: getLinks()
  };
}
