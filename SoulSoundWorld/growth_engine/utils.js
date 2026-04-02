import fs from "fs";
import path from "path";

export function readJson(filePath) {
  try {
    const fullPath = path.resolve(filePath);
    if (!fs.existsSync(fullPath)) return [];
    const raw = fs.readFileSync(fullPath, "utf-8").trim();
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (error) {
    console.error(`Error reading JSON from ${filePath}:`, error.message);
    return [];
  }
}

export function writeJson(filePath, data) {
  try {
    const fullPath = path.resolve(filePath);
    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error(`Error writing JSON to ${filePath}:`, error.message);
  }
}

export function todayDate() {
  return new Date().toISOString().split("T")[0];
}

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
